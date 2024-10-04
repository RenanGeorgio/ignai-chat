import { forwardRef, MutableRefObject } from "react";

import MDTypography from "../Typography";
import MDProgressRoot from "./MDProgressRoot";


interface Props {
  variant: 'contained' | 'gradient'
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark'
  value?: number
  label?: boolean
}

const MDProgress = forwardRef(({ variant='contained', color='info', value=0, label=false, ...rest }: Props, ref: MutableRefObject<any>) => (
  <>
    {label && (
      <MDTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </MDTypography>
    )}
    <MDProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

export default MDProgress;