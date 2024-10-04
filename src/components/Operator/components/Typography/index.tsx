import { forwardRef, ReactNode, MutableRefObject } from "react";

import { useMaterialUIController } from "../../contexts";
import MDTypographyRoot from "./MDTypographyRoot";

interface Props {
  color: 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark' | 'text' | 'white'
  fontWeight: false | 'light' | 'regular' | 'medium' | 'bold'
  textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  verticalAlign: 'unset' | 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom'
  textGradient?: boolean
  children: ReactNode
  opacity?: number
}

const MDTypography = forwardRef((
    { color='dark', fontWeight=false, textTransform='none', verticalAlign='unset', textGradient=false, opacity=1, children, ...rest }: Props,
    ref: MutableRefObject<any>
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDTypographyRoot
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode,
        }}
      >
        {children}
      </MDTypographyRoot>
    );
  }
);

export default MDTypography;