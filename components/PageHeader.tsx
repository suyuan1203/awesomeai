"use client";

import { useT } from "@/lib/i18n";

const emojis = {
  companies: "🏢",
  models: "🧩",
  tools: "🛠️",
} as const;

export default function PageHeader({
  variant,
}: {
  variant: keyof typeof emojis;
}) {
  const { t } = useT();
  const page = t.pages[variant];

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {emojis[variant]} {page.title}
      </h1>
      <p className="mt-2 max-w-2xl text-slate-500">{page.desc}</p>
    </div>
  );
}
