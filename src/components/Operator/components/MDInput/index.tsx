import { forwardRef, MutableRefObject } from "react";

import MDInputRoot from "./MDInputRoot";

interface Props {
  error?: boolean
  success?: boolean
  disabled?: boolean
}

const MDInput = forwardRef(({ error=false, success=false, disabled=false, ...rest }: Props, ref: MutableRefObject<any>) => (
  <MDInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

export default MDInput;