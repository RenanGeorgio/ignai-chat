import { useMemo, useEffect, useState } from "react";
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce, useSortBy } from "react-table";
import { Table, TableBody, TableContainer, TableRow, Icon, Autocomplete } from "@mui/material";

import MDBox from "../MDBox";
import MDTypography from "../Typography";
import MDInput from "../MDInput";
import MDPagination from "../MDPagination";
import DataTableHeadCell from "./DataTableHeadCell";
import DataTableBodyCell from "./DataTableBodyCell";

type Obj = {
  [key: string]: any
};

type Pagination = {
  variant: '"contained' | 'gradient'
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light'
};

type EntriesPerPage = {
  defaultValue?: number
  entries?: number[]
};

interface Props {
  entriesPerPage: EntriesPerPage | boolean
  canSearch?: boolean
  showTotalEntries?: boolean
  table: Obj[] | Obj
  pagination: Pagination
  isSorted?: boolean
  noEndBorder?: boolean
}

function DataTable({
  entriesPerPage={ defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch=false,
  showTotalEntries=true,
  table,
  pagination={ variant: "gradient", color: "info" },
  isSorted=true,
  noEndBorder=false,
}: Props) {
  const currentEntriesPerPage = entriesPerPage as EntriesPerPage;
  const defaultValue = currentEntriesPerPage.defaultValue ? currentEntriesPerPage.defaultValue : 10;

  const entries = currentEntriesPerPage.entries
    ? currentEntriesPerPage?.entries?.map((el: number) => el.toString())
    : ["5", "10", "15", "20", "25"];

  // @ts-ignore
  const columns = useMemo(() => table.columns, [table]);
  // @ts-ignore
  const data = useMemo(() => table.rows, [table]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  const setEntriesPerPage = (value: number) => setPageSize(value);

  const renderPagination = pageOptions.map((option: number) => (
    <MDPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </MDPagination>
  ));

  // @ts-ignore
  const handleInputPagination = ({ target: { value } }) => value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  const customizedPageOptions = pageOptions.map((option: number) => option + 1);

  // @ts-ignore
  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value?.value - 1));

  const [search, setSearch] = useState(globalFilter);

  const onSearchChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 100);

  const setSortedValue = (column: Obj) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {entriesPerPage || canSearch ? (
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <MDBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries}
                onChange={(event: any, newValue: string) => {
                  setEntriesPerPage(parseInt(newValue, 10));
                }}
                size="small"
                sx={{ width: "5rem" }}
                renderInput={(params: any) => <MDInput {...params} />}
              />
              <MDTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </MDTypography>
            </MDBox>
          )}
          {canSearch && (
            <MDBox width="12rem" ml="auto">
              <MDInput
                placeholder="Search..."
                value={search}
                size="small"
                fullWidth
                onChange={({ currentTarget }: Obj) => {
                  setSearch(search);
                  onSearchChange(currentTarget?.value);
                }}
              />
            </MDBox>
          )}
        </MDBox>
      ) : null}
      <Table {...getTableProps()}>
        <MDBox component="thead">
          {headerGroups?.map((headerGroup: Obj, key: string | number) => (
            <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column: Obj, idx: string | number) => (
                <DataTableHeadCell
                  key={idx}
                  {...column.getHeaderProps(isSorted && column?.getSortByToggleProps())}
                  width={column?.width ? column?.width : "auto"}
                  align={column?.align ? column?.align : "left"}
                  sorted={setSortedValue(column)}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </MDBox>
        <TableBody {...getTableBodyProps()}>
          {page?.map((row: Obj, key: string | number) => {
            prepareRow(row);
            return (
              <TableRow key={key} {...row?.getRowProps()}>
                {row?.cells.map((cell: Obj, idx: string | number) => (
                  <DataTableBodyCell
                    key={idx}
                    noBorder={noEndBorder && rows?.length - 1 === key}
                    align={cell?.column?.align ? cell?.column?.align : "left"}
                    {...cell?.getCellProps()}
                  >
                    {cell?.render("Cell")}
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <MDBox
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <MDBox mb={{ xs: 3, sm: 0 }}>
            <MDTypography variant="button" color="secondary" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </MDTypography>
          </MDBox>
        )}
        {pageOptions.length > 1 && (
          <MDPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <MDPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </MDPagination>
            )}
            {renderPagination.length > 6 ? (
              <MDBox width="5rem" mx={1}>
                <MDInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination as any, handleInputPaginationValue)}
                />
              </MDBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <MDPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </MDPagination>
            )}
          </MDPagination>
        )}
      </MDBox>
    </TableContainer>
  );
}

export default DataTable;