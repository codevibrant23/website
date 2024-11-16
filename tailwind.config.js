/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'orange-glow': '0px 8px 0px rgba(255, 102, 0, 0.9), 0px 0px 4px rgba(255, 102, 0, 0.3)',
      },
      fontSize: {
        h1: "3rem", // Customize as desired
        h2: "2.5rem",
        h3: "2rem",
        h4: "1.75rem",
        h5: "1.5rem",
        h6: "1.25rem",
        p: "1rem", // Paragraph font size
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
