import type { CatalogItem, CategoryGroup } from "./types";
import rawData from "./data/data.json";

export const catalogItems: CatalogItem[] = rawData as CatalogItem[];

/**
 * Group all catalog items by their category.
 */
export function getGroupedByCategory(): CategoryGroup[] {
  const map = new Map<string, CatalogItem[]>();

  for (const item of catalogItems) {
    const existing = map.get(item.category);
    if (existing) {
      existing.push(item);
    } else {
      map.set(item.category, [item]);
    }
  }

  return Array.from(map.entries()).map(([category, items]) => ({
    category,
    items,
  }));
}

/**
 * Convert an item name to a URL-safe slug.
 */
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Find a catalog item by its slug.
 */
export function getItemBySlug(slug: string): CatalogItem | undefined {
  return catalogItems.find((item) => toSlug(item.itemname) === slug);
}

/**
 * Category metadata for styling and icons.
 */
export const categoryMeta: Record<
  string,
  { icon: string; color: string; gradient: string }
> = {
  Cars: {
    icon: "DirectionsCar",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
  },
  Bikes: {
    icon: "TwoWheeler",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  },
  Phones: {
    icon: "PhoneIphone",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
  },
  Computers: {
    icon: "LaptopMac",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
  },
};
