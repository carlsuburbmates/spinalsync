/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          300: "#CBD5E1",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          DEFAULT: "#0F172A",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "#0F766E",
          light: "#99F6E4",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          dark: "#4338CA",
          light: "#E0E7FF",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: "#059669",
        warning: "#F59E0B",
        critical: "#DC2626",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["DM Sans", "Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(2, 6, 23, 0.06), 0 6px 16px rgba(2, 6, 23, 0.06)",
      },
      backgroundImage: {
        "teal-mist":
          "linear-gradient(135deg, rgba(20,184,166,0.12), rgba(99,102,241,0.08))",
        "indigo-haze":
          "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(203,213,225,0.08))",
        "card-glow":
          "radial-gradient(circle, rgba(20,184,166,0.10) 0%, rgba(20,184,166,0) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
