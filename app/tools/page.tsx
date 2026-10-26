import type { Metadata } from "next";
import Directory from "@/components/Directory";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI 工具",
  description:
    "对话助手、编程开发、图像视频、音频与办公效率等实用 AI 工具大全，标注价格模式。",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI 工具列表",
    numberOfItems: tools.length,
    itemListElement: tools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: t.url,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd data={itemList} />
      <PageHeader variant="tools" />
      <Directory items={tools} variant="tool" />
    </div>
  );
}
