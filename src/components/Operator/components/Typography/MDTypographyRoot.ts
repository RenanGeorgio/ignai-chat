import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

type Obj = {
  [key: string]: any
};

type PaletteTypes = {
  gradients: Obj
  transparent: Obj
  white: Obj
};

type TypographyTypes = {
  fontWeightLight: string
  fontWeightRegular: string
  fontWeightMedium: string
  fontWeightBold: string
};

type ThemeTypes = {
  palette: PaletteTypes
  typography: TypographyTypes
  functions: any
};

type OwnerTypes = {
  color: string
  textTransform: any
  verticalAlign: any
  fontWeight: string
  opacity: number 
  textGradient: any
  darkMode: boolean
};

interface Props {
  theme: ThemeTypes
  ownerState: OwnerTypes
}

export default styled(Typography)(({ theme, ownerState }: Props) => {
  const { palette, typography, functions } = theme;
  const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient, darkMode } = ownerState;

  const { gradients, transparent, white } = palette;
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
  const { linearGradient } = functions;

  // fontWeight styles
  const fontWeights: Obj = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  };

  // styles for the typography with textGradient={true}
  const gradientStyles = () => ({
    backgroundImage:
      color !== "inherit" && color !== "text" && color !== "white" && gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    position: "relative",
    zIndex: 1,
  });

  // @ts-ignore
  let colorValue = color === "inherit" || !palette[color] ? "inherit" : palette[color].main;

  // @ts-ignore
  if (darkMode && (color === "inherit" || !palette[color])) {
    colorValue = "inherit";
  } else if (darkMode && color === "dark") {
    colorValue = white.main;
  }

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: colorValue,
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
    ...(textGradient && gradientStyles()),
  };
});