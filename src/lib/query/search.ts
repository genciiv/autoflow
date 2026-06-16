export function normalizeSearchQuery(query?: string | null) {
  return query?.trim() || "";
}