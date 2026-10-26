import type { Metadata } from "next";
import Directory from "@/components/Directory";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { companies } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI 公司",
  description:
    "全球顶尖 AI 公司与国产 AI 力量大全，涵盖基础模型、AI 芯片、云计算与 AI 应用等方向。",
  alternates: { canonical: "/companies" },
};

export default function CompaniesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI 公司列表",
    numberOfItems: companies.length,
    itemListElement: companies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: c.url,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd data={itemList} />
      <PageHeader variant="companies" />
      <Directory items={companies} variant="company" />
    </div>
  );
}
