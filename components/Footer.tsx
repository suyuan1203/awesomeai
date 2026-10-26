"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const { t } = useT();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/companies", label: t.nav.companies },
    { href: "/models", label: t.nav.models },
    { href: "/tools", label: t.nav.tools },
    { href: "/history", label: t.nav.history },
  ];

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-base">
                ✨
              </span>
              <span className="font-bold tracking-tight">
                Awesome<span className="text-indigo-600">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-500">{t.footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 transition-colors hover:text-indigo-600"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} AwesomeAI · {t.footer.copyright} · Built
          with Next.js · Deployed on Vercel
        </div>
      </div>
    </footer>
  );
}
