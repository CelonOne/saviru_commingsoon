import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container: {
      center: true,
      padding: '1rem',
    },

    fontFamily: {
      'body': ['Be Vietnam Pro', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;