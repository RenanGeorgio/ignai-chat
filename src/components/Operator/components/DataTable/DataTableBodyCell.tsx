import { ReactNode } from "react";
import MDBox from "../MDBox";

interface Props {
  noBorder?: boolean
  align: 'left' | 'right' | 'center'
  children: ReactNode
}

function DataTableBodyCell({ noBorder=false, align='left', children }: Props) {
  return (
    <MDBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm,
        borderBottom: noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <MDBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </MDBox>
    </MDBox>
  );
}

export default DataTableBodyCell;