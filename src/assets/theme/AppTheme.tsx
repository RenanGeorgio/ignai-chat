import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { colorSchemes, typography, shadows, shape } from "./primitives";

interface AppThemeProps {
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
  children: React.ReactNode;
}

const AppTheme: React.FC<AppThemeProps> = ({
  disableCustomTheme,
  themeComponents,
  children
}: AppThemeProps) => {
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {} 
      : createTheme({
          // @ts-ignore
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'template',
          },
          colorSchemes,
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          }
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }

  return (
    // @ts-ignore
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;