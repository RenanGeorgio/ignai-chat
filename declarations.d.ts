declare module '*.module.css' {
    const content: any;
    export default content;
}

declare module '*.css' {
    const content: any;
    export default content;
}

declare module '*.scss' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    export const content: any;
}

declare module '*.css' {
    export const content: any;
}

declare module '*.mp4' {
    export const content: any;
}

declare module '*.png' {
    export const content: any;
}

declare module '*.mjs' {
    export const content: any;
}

declare module "@mui/material/Paper" {
    interface PaperPropsVariantOverrides {
      highlighted: true;
    }
  }
  declare module "@mui/material/styles/createPalette" {
    interface ColorRange {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    }
  
    interface PaletteColor extends ColorRange {}
  
    interface Palette {
      baseShadow: string;
    }
  }