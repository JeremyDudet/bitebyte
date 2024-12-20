/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import animate from "tailwindcss-animate";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  darkMode: ["class"],
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens,
      fontSize,
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "pulse-shadow": {
          "0%": {
            boxShadow: "inset 0 0 10px rgba(99, 102, 241, 0.6)",
          },
          "50%": {
            boxShadow: "inset 0 0 30px rgba(79, 70, 229, 0.7)",
          },
          "100%": {
            boxShadow: "inset 0 0 10px rgba(99, 102, 241, 0.6)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-shadow": "pulse-shadow 4s ease-in-out infinite",
      },
      screens: {
        xs: "20 rem",
      },
    },
  },
  plugins: [forms, animate, fluid],
};
