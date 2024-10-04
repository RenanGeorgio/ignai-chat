import { forwardRef, createContext, useContext, useMemo, ReactNode, MutableRefObject } from "react";

import MDBox from "../MDBox";
import MDPaginationItemRoot from "./MDPaginationItemRoot";

interface Props {
  item?: boolean
  variant: 'gradient' | 'contained'
  color: 'white' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark'
  size: 'small' | 'medium' | 'large'
  active?: boolean
  children: ReactNode
}

const Context = createContext();

const MDPagination = forwardRef(
  ({ item=false, variant='gradient', color='info', size='medium', active=false, children, ...rest }: Props, ref: MutableRefObject<any>) => {
    const context = useContext(Context);
    const paginationSize = context ? context.size : null;

    const value = useMemo(() => ({ variant, color, size }), [variant, color, size]);

    return (
      <Context.Provider value={value}>
        {item ? (
          <MDPaginationItemRoot
            {...rest}
            ref={ref}
            variant={active ? context.variant : "outlined"}
            color={active ? context.color : "secondary"}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MDPaginationItemRoot>
        ) : (
          <MDBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </MDBox>
        )}
      </Context.Provider>
    );
  }
);

export default MDPagination;