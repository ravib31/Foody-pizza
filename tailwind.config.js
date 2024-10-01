/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], // Replace default sans with 'Roboto'
      serif: [],  // Set empty array if you want to remove the serif font family
      mono: [],   // Set empty array if you want to remove the mono font family
    },
    // fontWeight: {
    //   normal: 400,   // Define your preferred weights
    //   medium: 500,
    //   bold: 700,
    // },
  },
  plugins: [],
};
