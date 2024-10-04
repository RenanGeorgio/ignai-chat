import { forwardRef, MutableRefObject } from "react";

import * as MDBoxRoot from "./MDBoxRoot";

interface Props {
  variant: 'contained' | 'gradient'
  bgColor?: string
  color?: string
  opacity?: number
  borderRadius?: string
  shadow?: string
  coloredShadow: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark' | 'none'
}

const MDBox = forwardRef(
  ({ variant='contained', bgColor='transparent', color='dark', opacity=1, borderRadius='none', shadow='none', coloredShadow='none', ...rest }: Props, ref: MutableRefObject<any>) => (
    <MDBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

export default MDBox;