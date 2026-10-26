"use client";

import Link from "next/link";
import { companies, models, tools } from "@/lib/data";
import { stats } from "@/lib/utils";
import { useT } from "@/lib/i18n";
import {
  localizeCompanies,
  localizeModels,
  localizeTools,
} from "@/lib/localize";
import Logo from "@/components/Logo";

type FeaturedItem = {
  id: string;
  logo: string;
  name: string;
  url: string;
  subtitle: string;
};

export default function HomePage() {
  const { lang, t } = useT();

  const featuredCompanies: FeaturedItem[] = localizeCompanies(companies, lang)
    .filter((c) => c.featured)
    .slice(0, 6)
    .map((c) => ({
      id: c.id,
      logo: c.logo,
      name: c.name,
      url: c.url,
      subtitle: c.field,
    }));

  const featuredModels: FeaturedItem[] = localizeModels(models, lang)
    .filter((m) => m.featured)
    .slice(0, 6)
    .map((m) => ({
      id: m.id,
      logo: m.logo,
      name: m.name,
      url: m.url,
      subtitle: m.developer,
    }));

  const featuredTools: FeaturedItem[] = localizeTools(tools, lang)
    .filter((tool) => tool.featured)
    .slice(0, 6)
    .map((tool) => ({
      id: tool.id,
      logo: tool.logo,
      name: tool.name,
      url: tool.url,
      subtitle: tool.category,
    }));

  const sections = [
    {
      href: "/companies",
      emoji: "🏢",
      title: t.featured.companies,
      items: featuredCompanies,
    },
    {
      href: "/models",
      emoji: "🧩",
      title: t.featured.models,
      items: featuredModels,
    },
    {
      href: "/tools",
      emoji: "🛠️",
      title: t.featured.tools,
      items: featuredTools,
    },
  ];

  return (
    <div className="bg-hero-glow">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-28">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/70 px-4 py-1.5 text-sm text-indigo-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          {t.hero.badge(stats.companies, stats.models, stats.tools)}
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-slate-600">
          {t.hero.desc}
        </p>
      </section>

      {/* 精选公司 / 精选模型 / 精选工具 */}
      {sections.map((section) => (
        <section
          key={section.href}
          className="mx-auto max-w-6xl px-4 pb-12 sm:px-6"
        >
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {section.emoji} {section.title}
            </h2>
            <Link
              href={section.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
            >
              {t.featured.viewAll}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-card transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-card-hover"
              >
                <Logo glyph={item.logo} name={item.name} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-slate-800 group-hover:text-indigo-600">
                    {item.name}
                  </div>
                  <div className="truncate text-xs text-slate-400">
                    {item.subtitle}
                  </div>
                </div>
                <svg
                  className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17 17 7M7 7h10v10"
                  />
                </svg>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* 说明 */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-bold text-slate-900">{t.about.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">
            {t.about.desc}
          </p>
        </div>
      </section>
    </div>
  );
}
