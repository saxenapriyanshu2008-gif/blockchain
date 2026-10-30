import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#07060F", volt: "#4D7CFF", violet: "#8B5CF6", ember: "#FFA62B" },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] },
  } },
} satisfies Config;
