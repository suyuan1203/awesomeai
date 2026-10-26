"use client";

import { useT } from "@/lib/i18n";
import { eras, modelReleases, pick } from "@/lib/history";

export default function HistoryContent() {
  const { lang, t } = useT();

  return (
    <>
      {/* 页头 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          🕰️ {t.history.title}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-500">{t.history.desc}</p>
      </div>

      {/* 时间轴 */}
      <div className="space-y-12">
        {eras.map((era) => (
          <section key={era.id}>
            <div className="mb-6 flex items-center gap-3">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-xl text-white shadow-sm ${era.accent}`}
              >
                {era.emoji}
              </span>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  {pick(era.title, lang)}
                </h2>
                <p className="text-sm text-slate-400">{pick(era.range, lang)}</p>
              </div>
            </div>

            <div>
              {era.milestones.map((m, i) => {
                const isLast = i === era.milestones.length - 1;
                return (
                  <div key={m.year} className="relative flex gap-4">
                    {/* 左侧时间轴轨道 */}
                    <div className="flex w-4 shrink-0 flex-col items-center">
                      <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-indigo-500 ring-4 ring-indigo-100" />
                      {!isLast && (
                        <span className="mt-1 w-px flex-1 bg-slate-200" />
                      )}
                    </div>

                    {/* 内容卡片 */}
                    <div className={isLast ? "flex-1 pb-0" : "flex-1 pb-8"}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-sm font-bold text-indigo-600">
                          {m.year}
                        </span>
                        <h3 className="text-base font-semibold text-slate-900">
                          {pick(m.title, lang)}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {pick(m.description, lang)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* 大模型发布时间线 */}
      <section className="mt-16 border-t border-slate-200 pt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            🚀 {t.history.releasesTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {t.history.releasesDesc}
          </p>
        </div>

        <ol className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {modelReleases.map((m) => (
            <li
              key={`${m.date}-${m.name}`}
              className="flex items-center gap-4 border-b border-slate-100 px-4 py-3.5 last:border-0 sm:px-6"
            >
              <span className="w-24 shrink-0 font-mono text-xs text-slate-400 sm:w-28 sm:text-sm">
                {m.date}
              </span>
              <span className="min-w-0 flex-1 truncate">
                <span className="font-semibold text-slate-900">{m.name}</span>
                <span className="ml-2 text-sm text-slate-400">
                  {pick(m.developer, lang)}
                </span>
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                  m.open
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {m.open ? t.directory.open : t.directory.closed}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
