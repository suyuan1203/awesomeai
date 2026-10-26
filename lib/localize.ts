import type { Company, AIModel, Tool } from "./types";
import { companiesEn, modelsEn, toolsEn } from "./data.en";
import type { Lang } from "./i18n";

export type DirectoryVariant = "company" | "model" | "tool";
export type DirectoryItem = Company | AIModel | Tool;

/** Return items with English fields applied when `lang === "en"`. */
export function localizeItems(
  items: DirectoryItem[],
  variant: DirectoryVariant,
  lang: Lang
): DirectoryItem[] {
  if (lang === "zh") return items;

  return items.map((item) => {
    if (variant === "company") {
      return { ...(item as Company), ...(companiesEn[item.id] ?? {}) };
    }
    if (variant === "model") {
      return { ...(item as AIModel), ...(modelsEn[item.id] ?? {}) };
    }
    return { ...(item as Tool), ...(toolsEn[item.id] ?? {}) };
  });
}

export function localizeCompanies(list: Company[], lang: Lang): Company[] {
  if (lang === "zh") return list;
  return list.map((c) => ({ ...c, ...(companiesEn[c.id] ?? {}) }));
}

export function localizeModels(list: AIModel[], lang: Lang): AIModel[] {
  if (lang === "zh") return list;
  return list.map((m) => ({ ...m, ...(modelsEn[m.id] ?? {}) }));
}

export function localizeTools(list: Tool[], lang: Lang): Tool[] {
  if (lang === "zh") return list;
  return list.map((t) => ({ ...t, ...(toolsEn[t.id] ?? {}) }));
}

export function filterValue(item: DirectoryItem, variant: DirectoryVariant) {
  if (variant === "company") return (item as Company).field;
  if (variant === "model") return (item as AIModel).type;
  return (item as Tool).category;
}

export function searchText(item: DirectoryItem, variant: DirectoryVariant) {
  if (variant === "company") {
    const c = item as Company;
    return [c.name, c.country, c.field, c.description, ...c.tags].join(" ");
  }
  if (variant === "model") {
    const m = item as AIModel;
    return [
      m.name,
      m.developer,
      m.type,
      m.openSource ? "open" : "closed",
      m.description,
      ...m.tags,
    ].join(" ");
  }
  const t = item as Tool;
  return [t.name, t.company, t.category, t.description, ...t.tags].join(" ");
}
