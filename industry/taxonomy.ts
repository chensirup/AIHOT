// GEO 与 AI 营销分类。key 会进入公开网址，正式上线后保持稳定。
export const CATEGORIES = [
  { key: "platform", label: "平台与入口", section: "平台与入口", guide: "AI 搜索、联网检索、答案引用、品牌推荐、购物和广告入口的真实变化" },
  { key: "geo-practice", label: "GEO 实战", section: "GEO 实战", guide: "用户问题研究、品牌信息、官网、内容策划、媒体与信源布局的可执行方法" },
  { key: "measurement", label: "监测与归因", section: "监测与归因", guide: "展现、提及、引用、推荐、信息准确性及咨询和成交归因的方法" },
  { key: "cases-data", label: "案例与数据", section: "案例与数据", guide: "说明时间、样本、方法和边界的企业案例、行业研究与实验" },
  { key: "opportunities", label: "商机与采购", section: "商机与采购", guide: "GEO、AI 搜索营销、AI 内容和培训等公开采购、招标与成交公告，准确区分阶段" },
  { key: "tools", label: "工具与效率", section: "工具与效率", guide: "能改变营销流程、成本或交付质量的 AI 内容、视频、研究、自动化和数据工具" },
  { key: "policy", label: "规则与合规", section: "规则与合规", guide: "平台内容规则、广告规范、数据与版权要求及相关行业标准" },
] as const;

// 内容类型用于理解和评分；与七个栏目对应，但同一事件只分一个主类。
export const ITEM_TYPES = ["platform_change", "geo_method", "measurement_method", "case_study", "procurement", "marketing_tool", "policy_rule"] as const;

export const CATEGORY_TAGS = ["平台变化", "GEO 方法", "监测归因", "案例研究", "采购商机", "营销工具", "规则合规", "其他"] as const;
export const TOPIC_TAGS = [
  "AI 搜索", "答案引用", "品牌提及", "用户问题", "品牌信息", "官网优化", "内容策划", "媒体信源",
  "效果监测", "咨询归因", "公开招标", "AI 内容", "AI 视频", "营销自动化", "广告营销", "版权数据",
] as const;
export const ENTITY_TAGS = ["豆包", "DeepSeek", "千问", "元宝", "文心", "Kimi", "ChatGPT", "Google", "Bing", "Perplexity"] as const;

export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  "AI搜索": "AI 搜索", "生成式搜索": "AI 搜索", "搜索入口": "AI 搜索", "引用": "答案引用", "被引用": "答案引用",
  "品牌推荐": "品牌提及", "品牌露出": "品牌提及", "问题库": "用户问题", "品牌资产": "品牌信息",
  "内容优化": "内容策划", "信源布局": "媒体信源", "效果评估": "效果监测", "归因": "咨询归因",
  "招标": "公开招标", "政府采购": "公开招标", "工具": "营销工具", "平台": "平台变化",
  "实操": "GEO 方法", "教程": "GEO 方法", "案例": "案例研究", "研究": "案例研究",
  "监测": "监测归因", "采购": "采购商机", "合规": "规则合规", "政策": "规则合规",
  "产品更新": "营销工具", "模型发布": "平台变化", "行业动态": "其他",
};

export const CATEGORY_BY_ITEM_TYPE: Readonly<Record<string, string>> = {
  platform_change: "平台变化", geo_method: "GEO 方法", measurement_method: "监测归因",
  case_study: "案例研究", procurement: "采购商机", marketing_tool: "营销工具", policy_rule: "规则合规",
};

export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[] }> = {
  doubao: { name: "豆包", displayTag: "豆包", aliases: ["豆包", "字节跳动", "Doubao"] },
  deepseek: { name: "DeepSeek", displayTag: "DeepSeek", aliases: ["DeepSeek", "深度求索"] },
  qwen: { name: "千问", displayTag: "千问", aliases: ["千问", "Qwen", "通义"] },
  yuanbao: { name: "元宝", displayTag: "元宝", aliases: ["腾讯元宝", "元宝"] },
  baidu: { name: "百度文心", displayTag: "文心", aliases: ["百度", "文心", "ERNIE"] },
  kimi: { name: "Kimi", displayTag: "Kimi", aliases: ["Kimi", "月之暗面"] },
  openai: { name: "OpenAI / ChatGPT", displayTag: "ChatGPT", aliases: ["OpenAI", "ChatGPT"] },
  google: { name: "Google", displayTag: "Google", aliases: ["Google", "谷歌", "Gemini"] },
  microsoft: { name: "Microsoft / Bing", displayTag: "Bing", aliases: ["Microsoft", "微软", "Bing", "Copilot"] },
  perplexity: { name: "Perplexity", displayTag: "Perplexity", aliases: ["Perplexity"] },
};

// 仅核对会影响 GEO 判断的主要平台，防止标题摘要把没有出现的平台写进去。
export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "doubao", name: "豆包", patterns: [/豆包|doubao|字节跳动|bytedance/i] },
  { id: "deepseek", name: "DeepSeek", patterns: [/deepseek|深度求索/i] },
  { id: "qwen", name: "千问", patterns: [/千问|通义|\bqwen\b/i] },
  { id: "yuanbao", name: "腾讯元宝", patterns: [/腾讯元宝|腾讯.*元宝/i] },
  { id: "baidu", name: "百度文心", patterns: [/百度|文心|\bernie\b/i] },
  { id: "kimi", name: "Kimi", patterns: [/\bkimi\b|月之暗面/i] },
  { id: "openai", name: "OpenAI / ChatGPT", patterns: [/openai|chatgpt/i] },
  { id: "google", name: "Google", patterns: [/google|谷歌|\bgemini\b/i] },
  { id: "microsoft", name: "Microsoft / Bing", patterns: [/microsoft|微软|\bbing\b|\bcopilot\b/i] },
  { id: "perplexity", name: "Perplexity", patterns: [/perplexity/i] },
];

export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [
  { entityId: "deepseek", domains: ["deepseek.com"] },
  { entityId: "openai", domains: ["openai.com"] },
  { entityId: "google", domains: ["google.com", "developers.google.com", "blog.google"] },
  { entityId: "microsoft", domains: ["microsoft.com", "bing.com", "blogs.bing.com"] },
  { entityId: "perplexity", domains: ["perplexity.ai"] },
];

export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [];
