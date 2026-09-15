import { cx } from "./ui";

/* ---------------------------------------------------------------------------
   A browser-chrome desktop mockup for the Campus Management & ERP product.

   Structure is modelled on a real ERP dashboard (SuperApp's own erp.superapp.pk
   product: a stat row, a seven-day chart, and a recent-activity table) but every
   label is reskinned for a campus system — fee collection instead of POS
   revenue, admissions instead of invoices — since that is the product this
   page is actually about.

   Pure CSS/SVG like phone-mockup.tsx: no screenshot, no JS, stays a Server
   Component. Swap <DashboardScreen> for a real product screenshot once one
   exists — everything else (chrome, glow, float) can stay.
--------------------------------------------------------------------------- */

export type DashboardStat = { label: string; value: string; delta?: string };
export type DashboardRow = { name: string; meta: string; amount: string; status: string };

function ChromeDots() {
  return (
    <div className="flex gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

function BarChart({ points }: { points: readonly number[] }) {
  const max = Math.max(...points);
  return (
    <div className="flex h-20 items-end gap-2.5">
      {points.map((v, i) => (
        <div
          key={i}
          style={{ height: `${Math.max(10, (v / max) * 100)}%` }}
          className={cx(
            "tile-in w-full rounded-t-md",
            i === points.length - 1
              ? "bg-gradient-to-t from-[#b565d8] to-[#e0b8ec]"
              : "bg-white/10",
          )}
        />
      ))}
    </div>
  );
}

function DashboardScreen({
  appName,
  tabs,
  stats,
  chartLabel,
  chartPoints,
  tableTitle,
  rows,
}: {
  appName: string;
  tabs: readonly string[];
  stats: readonly DashboardStat[];
  chartLabel: string;
  chartPoints: readonly number[];
  tableTitle: string;
  rows: readonly DashboardRow[];
}) {
  return (
    <div className="flex h-full flex-col bg-[#150e19] text-white">
      {/* module tabs */}
      <div className="border-line-soft flex items-center gap-1 overflow-x-auto border-b px-5 py-3">
        <span className="text-accent mr-3 shrink-0 text-[13px] font-semibold">
          {appName}
        </span>
        {tabs.map((tab, i) => (
          <span
            key={tab}
            className={cx(
              "shrink-0 rounded-full px-3 py-1 text-[11px] whitespace-nowrap",
              i === 0
                ? "bg-royal/20 text-white"
                : "text-dim",
            )}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="flex-1 space-y-5 overflow-hidden p-5">
        {/* stat row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-white/[0.04] p-3.5 ring-1 ring-white/10"
            >
              <p className="text-dim text-[10px] tracking-[0.1em] uppercase">
                {s.label}
              </p>
              <p className="display mt-1.5 text-lg leading-none">{s.value}</p>
              {s.delta ? (
                <p className="mt-1 text-[10px] text-emerald-300">{s.delta}</p>
              ) : null}
            </div>
          ))}
        </div>

        {/* chart + table */}
        <div className="grid gap-3 sm:grid-cols-[1fr_1.3fr]">
          <div className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10">
            <p className="text-dim text-[10px] tracking-[0.1em] uppercase">
              {chartLabel}
            </p>
            <div className="mt-3">
              <BarChart points={chartPoints} />
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10">
            <p className="text-dim text-[10px] tracking-[0.1em] uppercase">
              {tableTitle}
            </p>
            <div className="mt-3 space-y-2.5">
              {rows.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between gap-3 text-[11px]"
                >
                  <span className="min-w-0 flex-1 truncate text-white">
                    {row.name}
                    <span className="text-dim ml-1.5 font-normal">
                      {row.meta}
                    </span>
                  </span>
                  <span className="text-mist shrink-0 tabular-nums">
                    {row.amount}
                  </span>
                  <span
                    className={cx(
                      "shrink-0 rounded-full px-2 py-0.5 text-[9px] tracking-wide uppercase",
                      row.status === "Paid" || row.status === "Enrolled"
                        ? "bg-emerald-400/15 text-emerald-300"
                        : "bg-white/10 text-dim",
                    )}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DesktopMockup({
  appName,
  tabs,
  stats,
  chartLabel,
  chartPoints,
  tableTitle,
  rows,
  className,
}: {
  appName: string;
  tabs: readonly string[];
  stats: readonly DashboardStat[];
  chartLabel: string;
  chartPoints: readonly number[];
  tableTitle: string;
  rows: readonly DashboardRow[];
  className?: string;
}) {
  return (
    <div className={cx("relative", className)}>
      <div
        aria-hidden="true"
        className="bg-royal/30 pointer-events-none absolute inset-6 rounded-full blur-3xl"
      />
      <div className="float-slow border-line bg-ink relative overflow-hidden rounded-2xl border shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]">
        <div className="border-line-soft flex items-center gap-3 border-b bg-[#1a1220] px-4 py-2.5">
          <ChromeDots />
          <div className="border-line-soft flex-1 truncate rounded-md border bg-black/20 px-3 py-1 text-center text-[10px] text-[#8a708e]">
            campus.crownseducation.pk/dashboard
          </div>
        </div>
        <div className="aspect-[16/10]">
          <DashboardScreen
            appName={appName}
            tabs={tabs}
            stats={stats}
            chartLabel={chartLabel}
            chartPoints={chartPoints}
            tableTitle={tableTitle}
            rows={rows}
          />
        </div>
      </div>
      <p className="text-dim mt-4 text-center text-xs">
        Illustrative interface — for demonstration only.
      </p>
    </div>
  );
}
