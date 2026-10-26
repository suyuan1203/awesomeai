import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import HistoryContent from "@/components/HistoryContent";

export const metadata: Metadata = {
  title: "AI 发展史",
  description:
    "从图灵测试、达特茅斯会议，到神经网络、深度学习、Transformer 与 GPT，再到多模态与推理模型——一条时间轴看懂人工智能的发展历程。",
  alternates: { canonical: "/history" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI 发展史：从图灵测试到大模型时代",
  description:
    "从图灵测试、达特茅斯会议，到神经网络、深度学习、Transformer 与 GPT，再到多模态与推理模型的人工智能发展时间轴。",
  inLanguage: "zh-CN",
  author: { "@type": "Organization", name: "AwesomeAI" },
  publisher: { "@type": "Organization", name: "AwesomeAI" },
  mainEntityOfPage: "https://ai.suyuan.me/history",
};

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <JsonLd data={articleSchema} />
      <HistoryContent />
    </div>
  );
}
