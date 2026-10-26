import { companies, models, tools } from "./data";

/** 合并 className 的小工具 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** 公司行业筛选选项（去重并按数据顺序） */
export const companyFields = Array.from(
  new Set(companies.map((c) => c.field))
);

/** 模型类型筛选选项 */
export const modelTypes = Array.from(new Set(models.map((m) => m.type)));

/** 工具分类筛选选项 */
export const toolCategories = Array.from(
  new Set(tools.map((t) => t.category))
);

/** 统计信息 */
export const stats = {
  companies: companies.length,
  models: models.length,
  tools: tools.length,
  countries: new Set(companies.map((c) => c.country)).size,
  openSourceModels: models.filter((m) => m.openSource).length,
};
