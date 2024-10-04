import { forwardRef, ReactNode, MutableRefObject } from "react";

import { useMaterialUIController } from "../../contexts";
import MDButtonRoot from "./MDButtonRoot";


interface Props {
  size: 'small' | 'medium' | 'large'
  variant: 'text' | 'contained' | 'outlined' | 'gradient'
  color: 'white' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark'
  circular?: boolean
  iconOnly?: boolean
  children: ReactNode
}

const MDButton = forwardRef(
  ({ color='white', variant='contained', size='medium', circular=false, iconOnly=false, children, ...rest }: Props, ref: MutableRefObject<any>) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    return (
      <MDButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
      >
        {children}
      </MDButtonRoot>
    );
  }
);

export default MDButton;