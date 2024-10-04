import { forwardRef, MutableRefObject } from "react";

import MDAvatarRoot from "./MDAvatarRoot";

interface Props {
  bgColor: 'transparent' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  shadow: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inset'
}

const MDAvatar = forwardRef(({ bgColor='transparent', size='md', shadow='none', ...rest }: Props, ref: MutableRefObject<any>) => (
  <MDAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
));

export default MDAvatar;