import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sparkBlue: {
          50: '#f0f6fc',
          100: '#e0edfa',
          200: '#bad9f4',
          300: '#86baeb',
          400: '#4e99de',
          500: '#2b7cc9',
          600: '#1d60a5',
          700: '#174d85',
          800: '#15416f',
          900: '#003366', // Logo dark blue
          950: '#0c223c',
        },
        sparkGold: {
          50: '#fffdf0',
          100: '#fffad1',
          200: '#fff2a3',
          300: '#ffe566',
          400: '#ffd633',
          500: '#ffc100', // Logo gold
          600: '#e69f00',
          700: '#bf7600',
          800: '#995a00',
          900: '#7d4800',
          950: '#482500',
        },
      },
    },
  },
  plugins: [],
};
export default config;
