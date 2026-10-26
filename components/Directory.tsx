"use client";

import { useEffect, useMemo, useState } from "react";
import type { Company, AIModel, Tool } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";
import {
  filterValue,
  localizeItems,
  searchText,
  type DirectoryItem,
  type DirectoryVariant,
} from "@/lib/localize";
import Logo from "./Logo";

interface DirectoryProps {
  items: DirectoryItem[];
  variant: DirectoryVariant;
}

export default function Directory({ items, variant }: DirectoryProps) {
  const { lang, t } = useT();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("");

  const localized = useMemo(
    () => localizeItems(items, variant, lang),
    [items, variant, lang]
  );

  const filterOptions = useMemo(
    () =>
      Array.from(new Set(localized.map((item) => filterValue(item, variant)))),
    [localized, variant]
  );

  // Reset the filter when the language changes so options stay valid.
  useEffect(() => {
    setActiveFilter("");
  }, [lang]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return localized.filter((item) => {
      const matchesFilter =
        activeFilter === "" || filterValue(item, variant) === activeFilter;
      const matchesQuery =
        q === "" || searchText(item, variant).toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [localized, query, activeFilter, variant]);

  return (
    <div>
      {/* 搜索 + 筛选 */}
      <div className="space-y-4">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.directory.search[variant]}
            className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-500">
            {t.directory.filter[variant]}：
          </span>
          {[{ label: t.directory.all, value: "" }, ...filterOptions.map((o) => ({ label: o, value: o }))].map(
            (opt) => {
              const active = activeFilter === opt.value;
              return (
                <button
                  key={opt.value || "__all__"}
                  onClick={() => setActiveFilter(opt.value)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
                  )}
                >
                  {opt.label}
                </button>
              );
            }
          )}
        </div>

        <p className="text-sm text-slate-400">
          {t.directory.results(filtered.length)}
        </p>
      </div>

      {/* 列表 */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Card key={item.id} item={item} variant={variant} t={t} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
          <div className="text-4xl">🔍</div>
          <p className="mt-4 font-medium text-slate-700">{t.directory.empty}</p>
          <p className="mt-1 text-sm text-slate-400">{t.directory.emptyHint}</p>
        </div>
      )}
    </div>
  );
}

type Dict = ReturnType<typeof useT>["t"];

function Badge({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "slate" | "indigo" | "green" | "amber" | "rose";
}) {
  const tones: Record<string, string> = {
    slate: "bg-slate-100 text-slate-600",
    indigo: "bg-indigo-50 text-indigo-600",
    green: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

function pricingLabel(pricing: Tool["pricing"], t: Dict) {
  if (pricing === "免费") return t.pricing.free;
  if (pricing === "免费增值") return t.pricing.freemium;
  return t.pricing.paid;
}

function Card({
  item,
  variant,
  t,
}: {
  item: DirectoryItem;
  variant: DirectoryVariant;
  t: Dict;
}) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-3">
        <Logo glyph={item.logo} name={item.name} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate font-semibold text-slate-900 group-hover:text-indigo-600">
              {item.name}
            </h3>
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
          </div>
          <p className="mt-0.5 truncate text-xs text-slate-400">
            {variant === "company"
              ? `${(item as Company).country} · ${t.directory.founded(
                  (item as Company).founded
                )}`
              : variant === "model"
                ? (item as AIModel).developer
                : (item as Tool).company}
          </p>
        </div>
      </div>

      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {variant === "company" && (
          <>
            <Badge tone="indigo">{(item as Company).field}</Badge>
            {(item as Company).tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </>
        )}
        {variant === "model" && (
          <>
            <Badge tone="indigo">{(item as AIModel).type}</Badge>
            <Badge tone={(item as AIModel).openSource ? "green" : "amber"}>
              {(item as AIModel).openSource
                ? t.directory.open
                : t.directory.closed}
            </Badge>
            {(item as AIModel).tags.slice(0, 2).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </>
        )}
        {variant === "tool" && (
          <>
            <Badge tone="indigo">{(item as Tool).category}</Badge>
            <Badge
              tone={
                (item as Tool).pricing === "免费"
                  ? "green"
                  : (item as Tool).pricing === "免费增值"
                    ? "amber"
                    : "rose"
              }
            >
              {pricingLabel((item as Tool).pricing, t)}
            </Badge>
            {(item as Tool).tags.slice(0, 2).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </>
        )}
      </div>
    </a>
  );
}
