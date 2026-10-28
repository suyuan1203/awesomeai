import type { Company, AIModel, Tool } from "./types";

/**
 * English overlays for the directory data.
 * Only fields that differ from the Chinese source are listed here.
 */

export const companiesEn: Record<string, Partial<Company>> = {
  openai: {
    country: "United States",
    field: "Foundation Models",
    description:
      "One of the most influential AI companies, behind ChatGPT, the GPT model series, DALL·E and Sora.",
    tags: ["ChatGPT", "GPT-4o", "o series", "Sora"],
  },
  anthropic: {
    country: "United States",
    field: "Foundation Models",
    description:
      "An AI company focused on safety and alignment, creator of the Claude family of chat and reasoning models.",
    tags: ["Claude", "Safety", "Reasoning"],
  },
  "google-deepmind": {
    country: "United States / United Kingdom",
    field: "Foundation Models",
    description:
      "Google's leading AI research lab, behind the Gemini multimodal models and famous for AlphaGo and AlphaFold.",
    tags: ["Gemini", "AlphaFold", "Multimodal"],
  },
  "meta-ai": {
    country: "United States",
    field: "Foundation Models",
    description:
      "Meta's AI division, leading the open-source Llama ecosystem and bringing AI to social products.",
    tags: ["Llama", "Open Source", "Social AI"],
  },
  "microsoft-ai": {
    country: "United States",
    field: "Cloud / AI Applications",
    description:
      "Microsoft embeds AI across its products and cloud, with Copilot assistants, Azure AI and a major investment in OpenAI.",
    tags: ["Copilot", "Azure AI", "Enterprise"],
  },
  xai: {
    country: "United States",
    field: "Foundation Models",
    description:
      "Elon Musk's AI company, creator of the Grok models integrated with X and focused on real-time information.",
    tags: ["Grok", "Real-time"],
  },
  nvidia: {
    country: "United States",
    field: "AI Chips",
    description:
      "The dominant force in AI compute; its GPUs and CUDA platform are the backbone of model training and inference.",
    tags: ["GPU", "CUDA", "Compute"],
  },
  "mistral-ai": {
    country: "France",
    field: "Foundation Models",
    description:
      "Europe's leading AI company, known for high-performance open and commercial models such as Mistral and Codestral.",
    tags: ["Mistral", "Open Source", "Code"],
  },
  "stability-ai": {
    country: "United Kingdom",
    field: "Foundation Models / Image",
    description:
      "A pioneer of open-source image generation and creator of the Stable Diffusion series that popularized AI art.",
    tags: ["Stable Diffusion", "Open Source", "Image Generation"],
  },
  cohere: {
    country: "Canada",
    field: "Foundation Models",
    description:
      "An enterprise-focused LLM company offering the Command models and retrieval-augmented (RAG) solutions.",
    tags: ["Command", "Enterprise", "RAG"],
  },
  perplexity: {
    country: "United States",
    field: "AI Applications / Search",
    description:
      "A leading AI-native search engine that redefines information access with real-time retrieval and generated answers.",
    tags: ["AI Search", "Real-time"],
  },
  midjourney: {
    country: "United States",
    field: "AI Applications / Image",
    description:
      "An AI image company known for artistic quality, consistently leading the aesthetics of AI art.",
    tags: ["Image Generation", "AI Art"],
  },
  "hugging-face": {
    country: "United States",
    field: "Open Source Community",
    description:
      "The world's largest community for open AI models and datasets, offering hosting, inference and collaboration.",
    tags: ["Open Source", "Model Hub", "Community"],
  },
  runway: {
    country: "United States",
    field: "AI Applications / Video",
    description:
      "A pioneer of AI video generation and creation tools, with the Gen series serving film and creative industries.",
    tags: ["Video Generation", "Gen Series"],
  },
  deepseek: {
    name: "DeepSeek",
    country: "China",
    field: "Foundation Models",
    description:
      "A Chinese AI company that stunned the industry with the open DeepSeek-R1 and V3 models, achieving top reasoning at very low cost.",
    tags: ["DeepSeek-R1", "Open Source", "Reasoning"],
  },
  baidu: {
    name: "Baidu",
    country: "China",
    field: "Foundation Models / AI Applications",
    description:
      "China's AI and search giant, creator of ERNIE Bot and the ERNIE models, also investing in autonomous driving.",
    tags: ["ERNIE Bot", "ERNIE", "Autonomous Driving"],
  },
  alibaba: {
    name: "Alibaba",
    country: "China",
    field: "Foundation Models / Cloud",
    description:
      "Developer of the Qwen models spanning text, image, video and code, backed by an active open-source ecosystem.",
    tags: ["Qwen", "Open Source"],
  },
  tencent: {
    name: "Tencent",
    country: "China",
    field: "Foundation Models",
    description:
      "Creator of the Hunyuan models, widely deployed across WeChat, gaming and content products.",
    tags: ["Hunyuan", "Social"],
  },
  bytedance: {
    name: "ByteDance",
    country: "China",
    field: "Foundation Models / AI Applications",
    description:
      "Developer of the Doubao models, strong in chat assistants and consumer video generation (Dreamina).",
    tags: ["Doubao", "Dreamina"],
  },
  zhipu: {
    name: "Zhipu AI",
    country: "China",
    field: "Foundation Models",
    description:
      "Born from Tsinghua University research, creator of the GLM models and the Zhipu Qingyan assistant.",
    tags: ["GLM", "Zhipu Qingyan"],
  },
  moonshot: {
    name: "Moonshot AI",
    country: "China",
    field: "Foundation Models",
    description:
      "Known for long-context capabilities, creator of the Kimi assistant and open models like Kimi K2, popular among Chinese users.",
    tags: ["Kimi", "Long Context"],
  },
  minimax: {
    country: "China",
    field: "Foundation Models / AI Applications",
    description:
      "Creator of Hailuo AI and multimodal models, with work in speech synthesis, video generation and global apps.",
    tags: ["Hailuo AI", "Speech", "Multimodal"],
  },
  iflytek: {
    name: "iFlytek",
    country: "China",
    field: "AI Applications / Speech",
    description:
      "A leader in Chinese speech technology and creator of the Spark model, focused on education, healthcare and vertical scenarios.",
    tags: ["Spark", "Speech", "Education"],
  },
  sensetime: {
    name: "SenseTime",
    country: "China",
    field: "Foundation Models / Computer Vision",
    description:
      "A computer vision and foundation model company, creator of the SenseNova model system for smart cities and industries.",
    tags: ["SenseNova", "Vision"],
  },
  stepfun: {
    name: "StepFun",
    country: "China",
    field: "Foundation Models",
    description:
      "Focused on multimodal foundation models, with the Step series covering text, image and video understanding and generation.",
    tags: ["Step", "Multimodal"],
  },
  lingyi: {
    name: "01.AI",
    country: "China",
    field: "Foundation Models",
    description:
      "Founded by Kai-Fu Lee, creator of the open Yi model series, focused on high performance and global reach.",
    tags: ["Yi", "Open Source", "Kai-Fu Lee"],
  },
};

export const modelsEn: Record<string, Partial<AIModel>> = {
  "gpt-4o": {
    type: "Multimodal",
    description:
      "OpenAI's flagship multimodal model with text, image and audio input/output, fast and widely used for chat and creation.",
    tags: ["Multimodal", "Flagship", "ChatGPT"],
  },
  o3: {
    type: "Reasoning",
    description:
      "OpenAI's reasoning model series that greatly improves math, coding and science problem solving through deeper thinking.",
    tags: ["Reasoning", "Deep Thinking", "Agent"],
  },
  "gpt-6-1-terra": {
    type: "Reasoning / Multimodal",
    description:
      "OpenAI's cost-effective model for everyday computer work, supporting image input and multi-step reasoning, strong at visual understanding, precise computer use and natural writing, with a 1.05M-token context window.",
    tags: ["Reasoning", "Multimodal", "Computer Use", "Cost-effective"],
  },
  "claude-3-7-sonnet": {
    type: "Reasoning",
    description:
      "Anthropic's first hybrid reasoning model, switching between fast answers and deep thinking, strong at coding and long context.",
    tags: ["Reasoning", "Coding", "Hybrid Reasoning"],
  },
  "claude-opus-4": {
    type: "Text / Reasoning",
    description:
      "Anthropic's flagship model, top-tier on complex reasoning, coding and long-context tasks, and the benchmark of the Claude series.",
    tags: ["Flagship", "Long Context", "Coding"],
  },
  "gemini-4-argon": {
    type: "Reasoning / Multimodal",
    description:
      "Google DeepMind's next-generation natively multimodal reasoning model for complex workflows, with frontier ability in software engineering, legal and finance knowledge work, and cybersecurity defense.",
    tags: ["Reasoning", "Multimodal", "Flagship", "Frontier"],
  },
  "gemini-2-5-pro": {
    type: "Multimodal",
    description:
      "Google's flagship multimodal model with a huge context window, combining reasoning and multimodal understanding.",
    tags: ["Multimodal", "Long Context", "Flagship"],
  },
  "gemini-2-5-flash": {
    type: "Multimodal",
    description:
      "The efficient version of Gemini, balancing speed and cost for large-scale online applications.",
    tags: ["Multimodal", "Efficient", "Low Cost"],
  },
  "llama-3-3": {
    type: "Text",
    description:
      "A classic Meta open-source model, delivering near-larger-model performance with 70B parameters and a cornerstone of the open ecosystem.",
    tags: ["Open Source", "Text", "Llama"],
  },
  "llama-4": {
    type: "Multimodal",
    description:
      "Meta's natively multimodal open model with a huge context and MoE architecture, aimed at reasoning and agent scenarios.",
    tags: ["Open Source", "Multimodal", "MoE"],
  },
  "deepseek-r1": {
    developer: "DeepSeek",
    type: "Reasoning",
    description:
      "A milestone in open reasoning models, approaching top closed-model reasoning at very low cost and sparking global attention.",
    tags: ["Open Source", "Reasoning", "Low Cost"],
  },
  "deepseek-v3": {
    developer: "DeepSeek",
    type: "Text",
    description:
      "DeepSeek's flagship general model, using a MoE architecture with low training cost and strong performance, a benchmark in open source.",
    tags: ["Open Source", "Text", "MoE"],
  },
  "qwen2-5-max": {
    developer: "Alibaba",
    name: "Qwen2.5-Max / Qwen Series",
    type: "Text",
    description:
      "Alibaba's open Qwen model family across multiple sizes, strong at coding and multilingual tasks with an active ecosystem.",
    tags: ["Open Source", "Qwen", "Coding"],
  },
  "doubao-1-5-pro": {
    name: "Doubao 1.5 Pro",
    developer: "ByteDance",
    type: "Multimodal",
    description:
      "ByteDance's multimodal model supporting text, image and speech, powering consumer products such as Doubao.",
    tags: ["Multimodal", "Doubao", "Speech"],
  },
  "kimi-k31-pro": {
    developer: "Moonshot AI",
    type: "Text / Reasoning",
    description:
      "Moonshot AI's next-generation 3T-class open-weight model with a 1M-token context, greatly improved in coding, 3D creation, financial research and agentic tasks. Full weights release on Nov 4.",
    tags: ["Open Source", "Long Context", "Coding", "Agent"],
  },
  "kimi-k2": {
    developer: "Moonshot AI",
    type: "Text / Reasoning",
    description:
      "Moonshot AI's open model continuing Kimi's long-context strengths, excelling at Chinese and coding tasks.",
    tags: ["Open Source", "Long Context", "Chinese"],
  },
  "glm-4": {
    name: "GLM-4 Series",
    developer: "Zhipu AI",
    type: "Text",
    description:
      "Zhipu AI's self-developed open model family covering general, coding and multimodal versions, a key force in China's open source.",
    tags: ["Open Source", "Self-developed", "GLM"],
  },
  "minimax-m31-flash": {
    developer: "MiniMax",
    type: "Text",
    description:
      "MiniMax's new efficient Flash model with generational gains in agentic tasks, coding, computer use and cybersecurity, ~3x faster inference and 70% lower cost.",
    tags: ["Agent", "Coding", "Cost-effective", "Flash"],
  },
  "ernie-4-5": {
    name: "ERNIE 4.5",
    developer: "Baidu",
    type: "Multimodal",
    description:
      "The latest flagship of Baidu's ERNIE models, strengthening multimodal understanding and Chinese capability for the Chinese internet ecosystem.",
    tags: ["Multimodal", "ERNIE Bot", "Chinese"],
  },
  hunyuan: {
    name: "Hunyuan-Large",
    developer: "Tencent",
    type: "Text",
    description:
      "Tencent's Hunyuan model, whose open version excels at Chinese understanding and generation and is widely used across Tencent products.",
    tags: ["Open Source", "Chinese", "Hunyuan"],
  },
  "grok-3": {
    type: "Reasoning / Multimodal",
    description:
      "xAI's flagship model with real-time information from X, offering strong reasoning and multimodal capabilities.",
    tags: ["Reasoning", "Multimodal", "Real-time"],
  },
  "mistral-large": {
    type: "Text",
    description:
      "Europe's flagship model with strong multilingual and reasoning ability, available as open weights and via API.",
    tags: ["Open Source", "Multilingual", "Europe"],
  },
  "stable-diffusion-3-5": {
    type: "Image Generation",
    description:
      "A representative open image-generation model that turns text into high-quality images and can be self-hosted and customized.",
    tags: ["Open Source", "Image Generation", "Self-hosted"],
  },
  "flux-1": {
    type: "Image Generation",
    description:
      "A new-generation image model from the original Stable Diffusion team, with clear gains in detail and text rendering.",
    tags: ["Image Generation", "Open Source", "Text Rendering"],
  },
  sora: {
    type: "Video Generation",
    description:
      "OpenAI's video generation model that creates realistic, coherent clips from text, opening a new era of AI video.",
    tags: ["Video Generation", "Text-to-Video"],
  },
  "genie-4": {
    type: "World Model",
    description:
      "Google DeepMind's next-generation real-time interactive world model, generating 3D worlds with realistic physics and humans and adding audio plus real-time steering, aimed at robotics and film production.",
    tags: ["World Model", "Real-time", "Robotics", "Film"],
  },
  "runway-gen-4": {
    type: "Video Generation",
    description:
      "Runway's new-generation video model, strong at character consistency, camera control and visual quality.",
    tags: ["Video Generation", "Character Consistency"],
  },
  "midjourney-v7": {
    type: "Image Generation",
    description:
      "An image model known for artistic aesthetics and outstanding texture, a favorite of designers and creators.",
    tags: ["Image Generation", "Artistic"],
  },
  suno: {
    type: "Audio / Music",
    description:
      "An AI music model that generates complete songs with vocals from lyrics and style descriptions, lowering the barrier to music creation.",
    tags: ["Music Generation", "Text-to-Music"],
  },
  whisper: {
    type: "Audio / Speech",
    description:
      "An open speech recognition model supporting multilingual transcription and translation, a common foundation for speech-to-text.",
    tags: ["Open Source", "Speech Recognition", "Transcription"],
  },
};

export const toolsEn: Record<string, Partial<Tool>> = {
  chatgpt: {
    category: "Chat Assistant",
    description:
      "The world's most popular AI chat assistant, supporting Q&A, writing, coding, image generation and web search.",
    tags: ["Chat", "Multimodal", "Web Search"],
  },
  claude: {
    category: "Chat Assistant",
    description:
      "Anthropic's chat assistant, known for long-text handling, coding and deep-thinking ability.",
    tags: ["Chat", "Long Text", "Coding"],
  },
  gemini: {
    category: "Chat Assistant",
    description:
      "Google's multimodal AI assistant, deeply integrated with Search, Workspace and the Android ecosystem.",
    tags: ["Chat", "Multimodal", "Search"],
  },
  doubao: {
    name: "Doubao",
    category: "Chat Assistant",
    description:
      "ByteDance's AI assistant supporting chat, image and speech, with a large user base in China and a simple onboarding.",
    tags: ["Chat", "Speech", "Chinese"],
  },
  kimi: {
    category: "Chat Assistant",
    description:
      "Moonshot AI's assistant, excelling at long-document reading, web search and file parsing.",
    tags: ["Chat", "Long Text", "File Parsing"],
  },
  yiyan: {
    name: "ERNIE Bot",
    category: "Chat Assistant",
    description:
      "Baidu's AI assistant combining search and a Chinese knowledge base, supporting chat, drawing and writing.",
    tags: ["Chat", "Chinese", "Drawing"],
  },
  tongyi: {
    name: "Qwen",
    category: "Chat Assistant",
    description:
      "Alibaba's AI assistant covering chat, productivity, coding and multimodal abilities with a rich ecosystem.",
    tags: ["Chat", "Productivity", "Multimodal"],
  },
  "zhipu-qingyan": {
    name: "Zhipu Qingyan",
    category: "Chat Assistant",
    description:
      "Zhipu AI's chat assistant based on the GLM models, supporting agents and knowledge bases.",
    tags: ["Chat", "Agent", "GLM"],
  },
  perplexity: {
    name: "Perplexity",
    category: "Search",
    description:
      "An AI-native search engine that retrieves in real time and cites sources, making answers verifiable.",
    tags: ["Search", "Citations", "Real-time"],
  },
  "github-copilot": {
    category: "Coding",
    description:
      "GitHub's AI coding assistant for code completion, chat and refactoring, deeply integrated into the development flow.",
    tags: ["Coding", "Code Completion", "IDE"],
  },
  cursor: {
    category: "Coding",
    description:
      "An AI-native code editor with whole-repo understanding, conversational programming and multi-file editing.",
    tags: ["Coding", "Editor", "Agent"],
  },
  "claude-code": {
    category: "Coding",
    description:
      "Anthropic's command-line AI coding agent that can directly read, modify and execute tasks in your codebase.",
    tags: ["Coding", "Agent", "CLI"],
  },
  "tongyi-lingma": {
    name: "Tongyi Lingma",
    category: "Coding",
    description:
      "Alibaba Cloud's free AI coding assistant with code completion, Q&A and multilingual development.",
    tags: ["Coding", "Free", "Chinese"],
  },
  midjourney: {
    category: "Image",
    description:
      "An AI art tool known for artistic aesthetics, generating high-quality images from text prompts.",
    tags: ["Image Generation", "AI Art"],
  },
  dalle: {
    category: "Image",
    description:
      "OpenAI's image generation tool, deeply integrated with ChatGPT and skilled at following prompts precisely.",
    tags: ["Image Generation", "Prompting"],
  },
  jimeng: {
    name: "Dreamina",
    category: "Image / Video",
    description:
      "ByteDance's AI image and video creation platform supporting text-to-image and image-to-video.",
    tags: ["Image Generation", "Video Generation"],
  },
  kling: {
    name: "Kling",
    category: "Video",
    description:
      "Kuaishou's AI video generation tool, known for high quality, long durations and smooth motion.",
    tags: ["Video Generation", "High Quality"],
  },
  runway: {
    category: "Video",
    description:
      "A professional AI video creation platform supporting text-to-video, image-to-video and multiple camera controls.",
    tags: ["Video Generation", "Camera Control"],
  },
  sora: {
    category: "Video",
    description:
      "OpenAI's video generation tool that creates realistic, narrative video clips.",
    tags: ["Video Generation", "Realistic"],
  },
  suno: {
    category: "Audio",
    description:
      "An AI music creation tool that generates complete songs with vocals from lyrics or descriptions.",
    tags: ["Music Generation", "Composition"],
  },
  elevenlabs: {
    category: "Audio",
    description:
      "A leading AI voice synthesis tool with realistic multilingual dubbing, voice cloning and audio content generation.",
    tags: ["Voice Synthesis", "Dubbing", "Cloning"],
  },
  "fish-audio": {
    category: "Audio",
    description:
      "An AI speech synthesis and voice cloning platform with a huge library of realistic voices and multilingual dubbing, supporting TTS, cloning and voice conversion.",
    tags: ["Voice Synthesis", "Voice Cloning", "TTS"],
  },
  jianying: {
    name: "CapCut",
    category: "Video",
    description:
      "ByteDance's video editing tool with many built-in AI features such as auto captions, cutout and dubbing.",
    tags: ["Video Editing", "Captions", "Free"],
  },
  "notion-ai": {
    category: "Productivity",
    description:
      "An AI assistant inside Notion supporting writing, summarizing, translation and knowledge-base Q&A.",
    tags: ["Productivity", "Writing", "Knowledge Base"],
  },
  gamma: {
    category: "Productivity",
    description:
      "An AI presentation and document generator that turns a topic into polished slides and web pages.",
    tags: ["Presentation", "PPT", "Document"],
  },
  "canva-magic": {
    category: "Design",
    description:
      "Canva's built-in AI design suite for generating images, copy and one-click layouts.",
    tags: ["Design", "Poster", "Generation"],
  },
  "adobe-firefly": {
    category: "Image",
    description:
      "Adobe's generative AI tool focused on commercially safe image generation, deeply integrated with its creative apps.",
    tags: ["Image Generation", "Commercial Safety", "Creative"],
  },
  heygen: {
    category: "Video",
    description:
      "An AI digital-human video tool for quickly creating multilingual talking-head videos, widely used in marketing and training.",
    tags: ["Digital Human", "Talking Head", "Multilingual"],
  },
  poe: {
    category: "Chat Assistant",
    description:
      "A chat platform aggregating multiple AI models, letting you switch between models and agents in one interface.",
    tags: ["Aggregation", "Multi-model", "Agent"],
  },
  "hugging-face": {
    category: "Coding",
    description:
      "An open model and dataset community offering model hosting, online inference and Spaces demo apps.",
    tags: ["Open Source", "Model Hub", "Community"],
  },
  zapier: {
    category: "Productivity",
    description:
      "An automation workflow platform that connects thousands of apps with AI to automate repetitive tasks.",
    tags: ["Automation", "Workflow", "Integration"],
  },
};
