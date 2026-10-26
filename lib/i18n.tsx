"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "zh" | "en";

type Dict = {
  nav: {
    home: string;
    companies: string;
    models: string;
    tools: string;
    history: string;
  };
  langZh: string;
  langEn: string;
  hero: {
    badge: (companies: number, models: number, tools: number) => string;
    title: string;
    desc: string;
  };
  featured: {
    companies: string;
    models: string;
    tools: string;
    viewAll: string;
  };
  about: { title: string; desc: string };
  footer: { tagline: string; copyright: string };
  directory: {
    all: string;
    results: (n: number) => string;
    empty: string;
    emptyHint: string;
    founded: (year: number) => string;
    open: string;
    closed: string;
    filter: { company: string; model: string; tool: string };
    search: { company: string; model: string; tool: string };
  };
  pages: {
    companies: { title: string; desc: string };
    models: { title: string; desc: string };
    tools: { title: string; desc: string };
  };
  history: {
    title: string;
    desc: string;
    releasesTitle: string;
    releasesDesc: string;
    eraLabel: string;
  };
  pricing: { free: string; freemium: string; paid: string };
};

const zh: Dict = {
  nav: {
    home: "首页",
    companies: "AI 公司",
    models: "AI 模型",
    tools: "AI 工具",
    history: "AI 发展史",
  },
  langZh: "中文",
  langEn: "EN",
  hero: {
    badge: (companies, models, tools) =>
      `收录 ${companies} 家公司 · ${models} 个模型 · ${tools} 款工具`,
    title: "发现更好的人工智能",
    desc: "AwesomeAI 是一站式 AI 导航站，汇聚全球 AI 公司、前沿 AI 模型与实用 AI 工具，帮你快速找到想要的人工智能产品。",
  },
  featured: {
    companies: "精选公司",
    models: "精选模型",
    tools: "精选工具",
    viewAll: "查看全部",
  },
  about: {
    title: "关于本站",
    desc: "AwesomeAI 聚合了 AI 公司、AI 模型与 AI 工具三类信息，帮助你快速了解 AI 行业版图。本站数据为人工整理，部分信息可能随时间变化，请以各官方渠道为准。",
  },
  footer: {
    tagline: "发现更好的 AI · 数据仅供参考，信息以官方为准",
    copyright: "保留所有权利",
  },
  directory: {
    all: "全部",
    results: (n) => `共找到 ${n} 条结果`,
    empty: "没有找到匹配的结果",
    emptyHint: "试试更换关键词或筛选条件",
    founded: (year) => `成立于 ${year}`,
    open: "开源",
    closed: "闭源",
    filter: { company: "行业方向", model: "模型类型", tool: "工具分类" },
    search: {
      company: "搜索公司名称、国家或标签…",
      model: "搜索模型名称、开发者或标签…",
      tool: "搜索工具名称、公司或标签…",
    },
  },
  pages: {
    companies: {
      title: "AI 公司",
      desc: "收录全球最具影响力的 AI 公司与国产 AI 力量，覆盖基础模型、AI 芯片、云计算与 AI 应用等方向。",
    },
    models: {
      title: "AI 模型",
      desc: "收录前沿大语言模型、推理模型、多模态与图像、视频、音频生成模型，标注开源 / 闭源状态，方便对比与选择。",
    },
    tools: {
      title: "AI 工具",
      desc: "收录对话助手、编程开发、图像视频、音频与办公效率等实用 AI 工具，标注免费 / 免费增值 / 付费，直接上手提升效率。",
    },
  },
  history: {
    title: "AI 发展史",
    desc: "从 1950 年的图灵测试出发，走过神经网络的兴衰、深度学习的爆发，再到 Transformer、GPT 与今天的前沿大模型——一条时间轴看懂人工智能的演进。",
    releasesTitle: "大模型发布时间线",
    releasesDesc: "主流大语言模型的首次发布时间，按时间先后排列。",
    eraLabel: "时代",
  },
  pricing: { free: "免费", freemium: "免费增值", paid: "付费" },
};

const en: Dict = {
  nav: {
    home: "Home",
    companies: "AI Companies",
    models: "AI Models",
    tools: "AI Tools",
    history: "AI History",
  },
  langZh: "中文",
  langEn: "EN",
  hero: {
    badge: (companies, models, tools) =>
      `${companies} companies · ${models} models · ${tools} tools`,
    title: "Discover Better AI",
    desc: "AwesomeAI is a one-stop AI directory that brings together AI companies, frontier models and practical tools so you can find what you need fast.",
  },
  featured: {
    companies: "Featured Companies",
    models: "Featured Models",
    tools: "Featured Tools",
    viewAll: "View all",
  },
  about: {
    title: "About",
    desc: "AwesomeAI curates AI companies, models and tools to help you understand the AI landscape. The data is manually maintained and may change over time; please refer to official sources.",
  },
  footer: {
    tagline: "Discover better AI · For reference only, see official sources",
    copyright: "All rights reserved",
  },
  directory: {
    all: "All",
    results: (n) => `${n} results`,
    empty: "No matching results",
    emptyHint: "Try a different keyword or filter",
    founded: (year) => `Founded ${year}`,
    open: "Open",
    closed: "Closed",
    filter: { company: "Field", model: "Type", tool: "Category" },
    search: {
      company: "Search company name, country or tag…",
      model: "Search model name, developer or tag…",
      tool: "Search tool name, company or tag…",
    },
  },
  pages: {
    companies: {
      title: "AI Companies",
      desc: "The world's most influential AI companies and China's AI forces, covering foundation models, AI chips, cloud and AI applications.",
    },
    models: {
      title: "AI Models",
      desc: "Frontier LLMs, reasoning and multimodal models, plus image, video and audio generation models, with open / closed labels for easy comparison.",
    },
    tools: {
      title: "AI Tools",
      desc: "Practical AI tools for chat, coding, image, video, audio and productivity, with free / freemium / paid labels.",
    },
  },
  history: {
    title: "AI History",
    desc: "From the 1950 Turing Test through the rise and fall of neural networks, the deep learning boom, Transformer and GPT, to today's frontier models — one timeline for the evolution of AI.",
    releasesTitle: "Major Model Release Timeline",
    releasesDesc: "First release dates of major large language models, in chronological order.",
    eraLabel: "Era",
  },
  pricing: { free: "Free", freemium: "Freemium", paid: "Paid" },
};

const dictionaries: Record<Lang, Dict> = { zh, en };

type Ctx = { lang: Lang; setLang: (lang: Lang) => void };

const LanguageContext = createContext<Ctx>({ lang: "zh", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("awesomeai-lang");
      if (saved === "zh" || saved === "en") setLang(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    try {
      window.localStorage.setItem("awesomeai-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<Ctx>(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export function useT() {
  const { lang, setLang } = useLang();
  return { lang, setLang, t: dictionaries[lang] };
}

export function getDict(lang: Lang) {
  return dictionaries[lang];
}
