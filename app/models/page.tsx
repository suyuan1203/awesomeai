import type { Metadata } from "next";
import Directory from "@/components/Directory";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { models } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI 模型",
  description:
    "大语言模型、推理模型、多模态与图像/视频/音频生成模型大全，开源闭源一网打尽。",
  alternates: { canonical: "/models" },
};

export default function ModelsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI 模型列表",
    numberOfItems: models.length,
    itemListElement: models.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: m.name,
      url: m.url,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd data={itemList} />
      <PageHeader variant="models" />
      <Directory items={models} variant="model" />
    </div>
  );
}
