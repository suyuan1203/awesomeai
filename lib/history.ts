import type { Lang } from "./i18n";

type LocalizedText = { zh: string; en: string };

export type Milestone = {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
};

export type Era = {
  id: string;
  title: LocalizedText;
  range: LocalizedText;
  emoji: string;
  accent: string;
  milestones: Milestone[];
};

export type ModelRelease = {
  date: string;
  name: string;
  developer: LocalizedText;
  open: boolean;
};

export function pick(text: LocalizedText, lang: Lang) {
  return text[lang];
}

export const eras: Era[] = [
  {
    id: "birth",
    title: { zh: "奠基与诞生", en: "Foundations & Birth" },
    range: { zh: "1950 – 1969", en: "1950 – 1969" },
    emoji: "🌱",
    accent: "from-emerald-500 to-teal-500",
    milestones: [
      {
        year: "1950",
        title: { zh: "图灵测试", en: "The Turing Test" },
        description: {
          zh: "艾伦·图灵发表《Computing Machinery and Intelligence》，提出「机器能思考吗」的著名问题，并设计了以对话判断机器智能的图灵测试。",
          en: "Alan Turing publishes “Computing Machinery and Intelligence”, asking whether machines can think and proposing the Turing Test to judge machine intelligence through conversation.",
        },
      },
      {
        year: "1956",
        title: { zh: "达特茅斯会议", en: "The Dartmouth Workshop" },
        description: {
          zh: "John McCarthy 等人组织召开达特茅斯夏季研讨会，首次正式提出「人工智能（Artificial Intelligence）」一词，标志 AI 成为一门独立学科。",
          en: "John McCarthy and colleagues organize the Dartmouth Summer Research Project, coining the term “Artificial Intelligence” and establishing AI as a distinct field.",
        },
      },
      {
        year: "1958",
        title: { zh: "感知机诞生", en: "The Perceptron" },
        description: {
          zh: "Frank Rosenblatt 提出感知机（Perceptron），这是最早的神经网络模型之一，能够通过调整权重进行简单的模式识别。",
          en: "Frank Rosenblatt introduces the Perceptron, one of the earliest neural network models, capable of simple pattern recognition by adjusting weights.",
        },
      },
      {
        year: "1966",
        title: { zh: "第一个聊天机器人 ELIZA", en: "The First Chatbot, ELIZA" },
        description: {
          zh: "Joseph Weizenbaum 开发出 ELIZA，用模式匹配模拟心理治疗师的对话，让人们第一次感受到「与机器聊天」的可能。",
          en: "Joseph Weizenbaum develops ELIZA, which mimics a psychotherapist through pattern matching, giving people a first taste of chatting with a machine.",
        },
      },
      {
        year: "1969",
        title: { zh: "《Perceptrons》与第一次低谷", en: "“Perceptrons” and the First Winter" },
        description: {
          zh: "Minsky 与 Papert 出版《Perceptrons》，指出单层感知机无法解决异或等非线性问题，神经网络研究随之进入低谷。",
          en: "Minsky and Papert publish “Perceptrons”, showing that single-layer perceptrons cannot solve non-linear problems like XOR; neural network research enters a downturn.",
        },
      },
    ],
  },
  {
    id: "winter",
    title: { zh: "寒冬与专家系统", en: "AI Winters & Expert Systems" },
    range: { zh: "1970 – 1993", en: "1970 – 1993" },
    emoji: "❄️",
    accent: "from-sky-500 to-blue-500",
    milestones: [
      {
        year: "1974",
        title: { zh: "第一次 AI 寒冬", en: "First AI Winter" },
        description: {
          zh: "受限于算力与过高的预期，各国政府大幅削减 AI 研究经费，AI 研究进入第一次寒冬。",
          en: "Limited compute and inflated expectations lead governments to cut AI funding sharply, beginning the first AI winter.",
        },
      },
      {
        year: "1980",
        title: { zh: "专家系统兴起", en: "Expert Systems Rise" },
        description: {
          zh: "以规则为基础的专家系统（如 XCON）在工业配置等商业场景取得成功，带动 AI 迎来短暂繁荣。",
          en: "Rule-based expert systems such as XCON succeed in industrial configuration and other commercial settings, bringing a brief AI boom.",
        },
      },
      {
        year: "1986",
        title: { zh: "反向传播复兴神经网络", en: "Backpropagation Revives Neural Nets" },
        description: {
          zh: "Rumelhart、Hinton 与 Williams 推广了反向传播算法，使多层神经网络重新变得可训练，连接主义研究迎来复兴。",
          en: "Rumelhart, Hinton and Williams popularize backpropagation, making multi-layer neural networks trainable again and reviving connectionism.",
        },
      },
      {
        year: "1987",
        title: { zh: "第二次 AI 寒冬", en: "Second AI Winter" },
        description: {
          zh: "专家系统成本高、难以维护，Lisp 机器市场崩溃，AI 产业再次陷入低谷。",
          en: "Expert systems prove costly and hard to maintain and the Lisp machine market collapses, sending the AI industry into another trough.",
        },
      },
    ],
  },
  {
    id: "ml",
    title: { zh: "机器学习与深度学习", en: "Machine Learning & Deep Learning" },
    range: { zh: "1997 – 2011", en: "1997 – 2011" },
    emoji: "📚",
    accent: "from-violet-500 to-purple-500",
    milestones: [
      {
        year: "1997",
        title: { zh: "深蓝战胜卡斯帕罗夫", en: "Deep Blue Beats Kasparov" },
        description: {
          zh: "IBM 深蓝击败国际象棋世界冠军卡斯帕罗夫，展示了大规模计算与搜索结合的力量，也让 AI 重新回到公众视野。",
          en: "IBM Deep Blue defeats world chess champion Garry Kasparov, showing the power of large-scale compute plus search and returning AI to the public eye.",
        },
      },
      {
        year: "2006",
        title: { zh: "「深度学习」概念提出", en: "“Deep Learning” Coined" },
        description: {
          zh: "Geoffrey Hinton 等人提出深度信念网络，正式提出「深度学习」概念，为后续的深度学习浪潮奠定理论基础。",
          en: "Geoffrey Hinton and colleagues introduce deep belief networks and the term “deep learning”, laying the groundwork for the coming deep learning wave.",
        },
      },
      {
        year: "2011",
        title: { zh: "Watson 赢得 Jeopardy!", en: "Watson Wins Jeopardy!" },
        description: {
          zh: "IBM Watson 在美国智力问答节目 Jeopardy! 中战胜人类冠军，展示了自然语言理解与知识检索的能力。",
          en: "IBM Watson beats human champions on the quiz show Jeopardy!, demonstrating natural language understanding and knowledge retrieval.",
        },
      },
    ],
  },
  {
    id: "deep-learning",
    title: { zh: "深度学习爆发", en: "The Deep Learning Boom" },
    range: { zh: "2012 – 2016", en: "2012 – 2016" },
    emoji: "🚀",
    accent: "from-orange-500 to-amber-500",
    milestones: [
      {
        year: "2012",
        title: { zh: "AlexNet 引爆深度学习", en: "AlexNet Ignites Deep Learning" },
        description: {
          zh: "AlexNet 在 ImageNet 图像识别竞赛中以巨大优势夺冠，GPU 加速的深度卷积网络让全世界看到了深度学习的威力。",
          en: "AlexNet wins the ImageNet image recognition challenge by a wide margin, and GPU-accelerated deep convolutional networks show the world the power of deep learning.",
        },
      },
      {
        year: "2014",
        title: { zh: "生成对抗网络 GAN", en: "Generative Adversarial Networks" },
        description: {
          zh: "Ian Goodfellow 提出生成对抗网络（GAN），通过生成器与判别器的博弈生成逼真数据，开启生成式 AI 的新方向。",
          en: "Ian Goodfellow introduces Generative Adversarial Networks (GANs), generating realistic data through a generator-discriminator game and opening a new direction for generative AI.",
        },
      },
      {
        year: "2016",
        title: { zh: "AlphaGo 战胜李世石", en: "AlphaGo Beats Lee Sedol" },
        description: {
          zh: "DeepMind 的 AlphaGo 以 4:1 战胜围棋世界冠军李世石，深度强化学习震惊世界，AI 再次成为全球焦点。",
          en: "DeepMind's AlphaGo defeats Go world champion Lee Sedol 4–1, stunning the world with deep reinforcement learning and putting AI back in the global spotlight.",
        },
      },
    ],
  },
  {
    id: "transformer",
    title: { zh: "Transformer 与 GPT 时代", en: "Transformer & GPT Era" },
    range: { zh: "2017 – 2021", en: "2017 – 2021" },
    emoji: "⚡",
    accent: "from-indigo-500 to-blue-500",
    milestones: [
      {
        year: "2017",
        title: { zh: "Transformer 架构", en: "The Transformer Architecture" },
        description: {
          zh: "Google 发表《Attention Is All You Need》，提出完全基于注意力机制的 Transformer 架构，成为此后几乎所有大语言模型的基础。",
          en: "Google publishes “Attention Is All You Need”, introducing the attention-only Transformer architecture that underpins nearly all later large language models.",
        },
      },
      {
        year: "2018",
        title: { zh: "GPT-1 与 BERT", en: "GPT-1 and BERT" },
        description: {
          zh: "OpenAI 发布 GPT-1，Google 发布 BERT，预训练 + 微调的范式被确立，NLP 进入预训练模型时代。",
          en: "OpenAI releases GPT-1 and Google releases BERT, establishing the pre-train + fine-tune paradigm and bringing NLP into the pretrained-model era.",
        },
      },
      {
        year: "2020",
        title: { zh: "GPT-3 开启大模型时代", en: "GPT-3 and the LLM Era" },
        description: {
          zh: "GPT-3 拥有 1750 亿参数，展现出强大的少样本学习与通用生成能力，「大模型」成为 AI 的核心关键词。",
          en: "With 175 billion parameters, GPT-3 shows powerful few-shot learning and general generation, making “large model” a core keyword of AI.",
        },
      },
      {
        year: "2021",
        title: { zh: "多模态与 AI for Science", en: "Multimodality & AI for Science" },
        description: {
          zh: "DALL·E 与 CLIP 展示了文本与图像之间的跨模态能力；AlphaFold 2 高精度预测蛋白质结构，AI 开始深刻改变科学研究。",
          en: "DALL·E and CLIP demonstrate cross-modal text-image ability; AlphaFold 2 predicts protein structures with high accuracy, and AI begins to transform scientific research.",
        },
      },
    ],
  },
  {
    id: "generative",
    title: { zh: "生成式 AI 与前沿模型", en: "Generative AI & Frontier Models" },
    range: { zh: "2022 – 至今", en: "2022 – Present" },
    emoji: "🌟",
    accent: "from-fuchsia-500 to-pink-500",
    milestones: [
      {
        year: "2022",
        title: { zh: "ChatGPT 发布", en: "ChatGPT Launches" },
        description: {
          zh: "OpenAI 发布 ChatGPT，两个月内用户破亿，生成式 AI 第一次真正走进大众生活，也掀起了全球大模型竞赛。",
          en: "OpenAI launches ChatGPT, which passes 100 million users in two months, bringing generative AI into everyday life and sparking a global LLM race.",
        },
      },
      {
        year: "2023",
        title: { zh: "大模型群雄逐鹿", en: "The LLM Race Heats Up" },
        description: {
          zh: "GPT-4、Claude、Gemini 等闭源模型与 Llama 系列开源模型相继发布，多模态能力成为标配，开源生态迅速壮大。",
          en: "Closed models such as GPT-4, Claude and Gemini and open models such as the Llama series launch in succession; multimodality becomes standard and the open ecosystem grows fast.",
        },
      },
      {
        year: "2024",
        title: { zh: "视频生成与推理模型", en: "Video Generation & Reasoning Models" },
        description: {
          zh: "Sora 展示了高质量文生视频能力；OpenAI o1 系列开启「推理模型」新范式，让模型在回答前进行深度思考。",
          en: "Sora shows high-quality text-to-video generation; OpenAI's o1 series opens the “reasoning model” paradigm, letting models think deeply before answering.",
        },
      },
      {
        year: "2025",
        title: { zh: "开源推理与高效模型", en: "Open Reasoning & Efficient Models" },
        description: {
          zh: "DeepSeek-R1 以极低成本实现强推理能力，Gemini 2.5、Claude 等持续迭代，开源与闭源模型并进，推理与智能体成为重点。",
          en: "DeepSeek-R1 delivers strong reasoning at very low cost, Gemini 2.5 and Claude keep iterating, and open and closed models advance together, with reasoning and agents as the focus.",
        },
      },
      {
        year: "2026",
        title: { zh: "新一代前沿模型涌现", en: "A New Wave of Frontier Models" },
        description: {
          zh: "Gemini 4 Argon、MiniMax M3.1 Flash、Kimi K3.1 Pro 等新一代模型出现，在智能体任务、编程、计算机操作与多模态理解上持续突破。",
          en: "A new generation including Gemini 4 Argon, MiniMax M3.1 Flash and Kimi K3.1 Pro arrives, pushing forward in agentic tasks, coding, computer use and multimodal understanding.",
        },
      },
    ],
  },
];

export const modelReleases: ModelRelease[] = [
  { date: "2018.06.11", name: "GPT-1", developer: { zh: "OpenAI", en: "OpenAI" }, open: false },
  { date: "2018.10.11", name: "BERT", developer: { zh: "Google", en: "Google" }, open: true },
  { date: "2020.05.28", name: "GPT-3", developer: { zh: "OpenAI", en: "OpenAI" }, open: false },
  { date: "2022.11.30", name: "ChatGPT", developer: { zh: "OpenAI", en: "OpenAI" }, open: false },
  { date: "2023.03.14", name: "GPT-4", developer: { zh: "OpenAI", en: "OpenAI" }, open: false },
  { date: "2023.03.14", name: "Claude", developer: { zh: "Anthropic", en: "Anthropic" }, open: false },
  { date: "2023.12.06", name: "Gemini", developer: { zh: "Google", en: "Google" }, open: false },
  { date: "2024.05.13", name: "GPT-4o", developer: { zh: "OpenAI", en: "OpenAI" }, open: false },
  { date: "2024.09.12", name: "o1", developer: { zh: "OpenAI", en: "OpenAI" }, open: false },
  { date: "2025.01.20", name: "DeepSeek-R1", developer: { zh: "深度求索", en: "DeepSeek" }, open: true },
  { date: "2025.03.25", name: "Gemini 2.5 Pro", developer: { zh: "Google", en: "Google" }, open: false },
  { date: "2025.04.05", name: "Llama 4", developer: { zh: "Meta", en: "Meta" }, open: true },
  { date: "2025.05.22", name: "Claude 4", developer: { zh: "Anthropic", en: "Anthropic" }, open: false },
  { date: "2025.07.11", name: "Kimi K2", developer: { zh: "月之暗面", en: "Moonshot AI" }, open: true },
  { date: "2026.10.13", name: "Gemini 4 Argon", developer: { zh: "Google DeepMind", en: "Google DeepMind" }, open: false },
  { date: "2026.10.19", name: "MiniMax M3.1 Flash", developer: { zh: "MiniMax", en: "MiniMax" }, open: false },
  { date: "2026.10.23", name: "Kimi K3.1 Pro", developer: { zh: "月之暗面", en: "Moonshot AI" }, open: true },
];
