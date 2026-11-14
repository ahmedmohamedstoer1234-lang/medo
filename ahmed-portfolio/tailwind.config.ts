import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: {
  colors: { space: "#030014", panel: "#0b0b20" },
  boxShadow: { glow: "0 0 55px rgba(139,92,246,.22)" }
}}, plugins: [] };
export default config;
