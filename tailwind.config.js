/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#202226",
        "neutral-03-100": "#e8ecef",
        white: "#fff",
        line: "#f3f3f3",
        silver: {
          "100": "#c0c0c8",
          "200": "#c0bfc8",
        },
        ghostwhite: "#fafaff",
        "neutral-06-100": "#232627",
        "neutral-04-50": "rgba(108, 114, 117, 0.5)",
        darkslategray: {
          "100": "#3e4249",
          "200": "#34373c",
          "300": "#33373d",
        },
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#eaeaea",
        },
        "gray-2": "#a2a5b1",
        gray: {
          "100": "#fcfcfd",
          "200": "rgba(20, 23, 24, 0.2)",
          "300": "rgba(20, 23, 24, 0.1)",
        },
        "neutral-07-100": "#141718",
        "gray-1": "#93989a",
        background: "#242627",
        secondary: "#babcbd",
        mediumslateblue: "rgba(54, 94, 255, 0.05)",
        primary: "#3a9bfe",
      },
      spacing: {},
      fontFamily: {
        "body-regular": "Poppins",
        "caption-1": "Inter",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        "341xl": "360px",
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xl: "1.25rem",
      base: "1rem",
      xs: "0.75rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};