import { seedData } from "./seed";
import type { SiteData } from "@/types";
const KEY = "ahmed-portfolio-content-v1";
export function loadData(): SiteData {
 if (typeof window === "undefined") return seedData;
 try { const raw = window.localStorage.getItem(KEY); return raw ? { ...seedData, ...JSON.parse(raw) } : seedData; } catch { return seedData; }
}
export function saveData(data: SiteData) { if (typeof window !== "undefined") window.localStorage.setItem(KEY, JSON.stringify(data)); }
