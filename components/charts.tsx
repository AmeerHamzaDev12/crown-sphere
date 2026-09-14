"use client";

import { useId, useState } from "react";
import { cx } from "./ui";

/* ---------------------------------------------------------------------------
   Two small chart forms, hand-drawn as SVG — no charting dependency.

   Both are single-series, so per the dataviz rules there is no legend (the
   title names the series), labels are selective rather than on every point,
   gridlines are solid hairlines, and each chart ships a table view so no value
   is reachable only by hovering.

   MARK is validated against the dark chart surface (lightness band, chroma
   floor, 3:1 contrast). Do not swap it for the pale lilac accent — that fails
   the chroma floor and reads gray.
--------------------------------------------------------------------------- */

const MARK = "#b565d8";
const GRID = "rgba(255,255,255,0.10)";

export type Point = { label: string; value: number; display: string };

function TableView({
  points,
  unit,
  measure,
}: {
  points: readonly Point[];
  unit: string;
  measure: string;
}) {
  return (
    <table className="mt-6 w-full border-collapse text-sm">
      <caption className="sr-only">
        {measure} by year, in {unit}
      </caption>
      <thead>
        <tr className="border-line border-b">
          <th className="text-dim py-2 pr-4 text-left text-[11px] font-medium tracking-[0.14em] uppercase">
            Year
          </th>
          <th className="text-dim py-2 text-right text-[11px] font-medium tracking-[0.14em] uppercase">
            {measure}
          </th>
        </tr>
      </thead>
      <tbody>
        {points.map((p) => (
          <tr key={p.label} className="border-line-soft border-b">
            <th scope="row" className="text-mist py-2 pr-4 text-left font-normal">
              {p.label}
            </th>
            <td className="py-2 text-right tabular-nums text-white">
              {p.display}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ChartFrame({
  title,
  subtitle,
  children,
  points,
  unit,
  className,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  points: readonly Point[];
  unit: string;
  className?: string;
}) {
  const [showTable, setShowTable] = useState(false);

  return (
    <figure
      className={cx(
        "border-line bg-surface rounded-card m-0 border p-6 sm:p-7",
        className,
      )}
    >
      <figcaption className="flex items-start justify-between gap-4">
        <span>
          <span className="block text-base font-medium text-white">{title}</span>
          {subtitle ? (
            <span className="text-mist mt-1 block text-xs leading-relaxed">
              {subtitle}
            </span>
          ) : null}
        </span>
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          aria-pressed={showTable}
          className="border-line text-dim shrink-0 rounded-full border px-3 py-1 text-[10px] tracking-[0.12em] uppercase transition-colors hover:border-[#b565d8] hover:text-white"
        >
          {showTable ? "Chart" : "Table"}
        </button>
      </figcaption>

      {showTable ? (
        <TableView points={points} unit={unit} measure={title} />
      ) : (
        <div className="mt-6">{children}</div>
      )}
    </figure>
  );
}

/** Area chart for a trend over time. Endpoint is direct-labelled, not every point. */
export function TrendChart({
  title,
  subtitle,
  points,
  unit,
  className,
}: {
  title: string;
  subtitle?: string;
  points: readonly Point[];
  unit: string;
  className?: string;
}) {
  const gradientId = useId();
  const W = 520;
  const H = 200;
  const PAD = { top: 16, right: 16, bottom: 28, left: 16 };
  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;

  const max = Math.max(...points.map((p) => p.value));
  const x = (i: number) => PAD.left + (i / (points.length - 1)) * plotW;
  const y = (v: number) => PAD.top + plotH - (v / max) * plotH;

  const line = points.map((p, i) => `${x(i)},${y(p.value)}`).join(" ");
  const area = `${PAD.left},${PAD.top + plotH} ${line} ${PAD.left + plotW},${PAD.top + plotH}`;
  const last = points[points.length - 1];

  return (
    <ChartFrame
      title={title}
      subtitle={subtitle}
      points={points}
      unit={unit}
      className={className}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label={`${title}: ${points.map((p) => `${p.label} ${p.display}`).join(", ")}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={MARK} stopOpacity="0.38" />
            <stop offset="100%" stopColor={MARK} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* solid hairline gridlines, one shade off the surface */}
        {[0, 0.5, 1].map((t) => (
          <line
            key={t}
            x1={PAD.left}
            x2={PAD.left + plotW}
            y1={PAD.top + plotH * t}
            y2={PAD.top + plotH * t}
            stroke={GRID}
            strokeWidth="1"
          />
        ))}

        <polygon points={area} fill={`url(#${gradientId})`} />
        <polyline
          points={line}
          fill="none"
          stroke={MARK}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {points.map((p, i) => (
          <circle
            key={p.label}
            cx={x(i)}
            cy={y(p.value)}
            r="4"
            fill={MARK}
            stroke="#1d1621"
            strokeWidth="2"
          />
        ))}

        {/* selective direct label: the endpoint only */}
        <text
          x={x(points.length - 1)}
          y={y(last.value) - 14}
          textAnchor="end"
          className="fill-white text-[13px] font-medium"
        >
          {last.display}
        </text>

        {points.map((p, i) => (
          <text
            key={`${p.label}-tick`}
            x={x(i)}
            y={H - 8}
            textAnchor="middle"
            className="fill-[#8a708e] text-[11px] tabular-nums"
          >
            {p.label}
          </text>
        ))}
      </svg>
    </ChartFrame>
  );
}

/** Column chart for magnitude. One series, so one colour for every bar. */
export function BarChart({
  title,
  subtitle,
  points,
  unit,
  className,
}: {
  title: string;
  subtitle?: string;
  points: readonly Point[];
  unit: string;
  className?: string;
}) {
  const W = 320;
  const H = 190;
  const PAD = { top: 26, bottom: 28 };
  const plotH = H - PAD.top - PAD.bottom;
  const max = Math.max(...points.map((p) => p.value));

  // 2px surface gap between adjacent bars
  const slot = W / points.length;
  const barW = Math.min(56, slot - 18);

  return (
    <ChartFrame
      title={title}
      subtitle={subtitle}
      points={points}
      unit={unit}
      className={className}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label={`${title}: ${points.map((p) => `${p.label} ${p.display}`).join(", ")}`}
      >
        <line
          x1="0"
          x2={W}
          y1={PAD.top + plotH}
          y2={PAD.top + plotH}
          stroke={GRID}
          strokeWidth="1"
        />

        {points.map((p, i) => {
          const h = Math.max(3, (p.value / max) * plotH);
          const cx = slot * i + slot / 2;
          return (
            <g key={p.label}>
              {/* 4px rounded data-end, anchored to the baseline */}
              <rect
                x={cx - barW / 2}
                y={PAD.top + plotH - h}
                width={barW}
                height={h}
                rx="4"
                fill={MARK}
              />
              <text
                x={cx}
                y={PAD.top + plotH - h - 9}
                textAnchor="middle"
                className="fill-white text-[12px] font-medium"
              >
                {p.display}
              </text>
              <text
                x={cx}
                y={H - 8}
                textAnchor="middle"
                className="fill-[#8a708e] text-[11px] tabular-nums"
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
    </ChartFrame>
  );
}
