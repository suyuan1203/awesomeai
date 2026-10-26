"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useT();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/companies", label: t.nav.companies },
    { href: "/models", label: t.nav.models },
    { href: "/tools", label: t.nav.tools },
    { href: "/history", label: t.nav.history },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg shadow-sm">
            ✨
          </span>
          <span className="text-lg font-bold tracking-tight">
            Awesome<span className="text-indigo-600">AI</span>
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-1">
          <nav className="flex min-w-0 items-center gap-0.5 overflow-x-auto sm:gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors sm:px-3",
                    active
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="ml-1 shrink-0 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600"
            aria-label="Switch language"
            title="Switch language / 切换语言"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>
        </div>
      </div>
    </header>
  );
}
