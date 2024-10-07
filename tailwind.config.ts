import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom':'0 4px 15px rgba(255, 255, 255, 0.05)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        terminal: '#252A33',
        text_terminal: "#979798",
        gl: "#00FF00",
        dark:"#070606",
      },
    },
  },
  plugins: [],
};
export default config;


