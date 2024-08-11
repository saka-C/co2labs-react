/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    options: {
      safelist: [
        'bg-accent-100',
        'bg-secondary-200',
        'bg-primary-100',
        'bg-purple-200',
      ],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        generalsans: ['generalsans-medium', 'generalsans-semibold', 'generalsans-bold', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#d0d6da",
          200: "#a1adb5",
          300: "#738391",
          400: "#445a6c",
          500: "#153147",
          600: "#112739",
          700: "#0d1d2b",
          800: "#08141c",
          900: "#040a0e"
        },
        secondary: {
          100: "#fbfbf9",
          200: "#f8f7f4",
          300: "#f4f2ee",
          400: "#f1eee9",
          500: "#edeae3",
          600: "#bebbb6",
          700: "#8e8c88",
          800: "#5f5e5b",
          900: "#2f2f2d"
        },
        accent: {
          100: "#eff1f1",
          200: "#dee3e3",
          300: "#ced4d6",
          400: "#bdc6c8",
          500: "#adb8ba",
          600: "#8a9395",
          700: "#686e70",
          800: "#454a4a",
          900: "#232525"
        },

        dark: {
          100: "#d3d3d3",
          200: "#a7a7a8",
          300: "#7a7b7c",
          400: "#4e4f51",
          500: "#222325",
          600: "#1b1c1e",
          700: "#141516",
          800: "#0e0e0f",
          900: "#070707"
        },
        bgbase: "#F9F8F6",
        yel: "#FFD757"

      }
    },
  },
  plugins: [],
}

