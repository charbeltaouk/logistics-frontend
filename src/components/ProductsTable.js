import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function ProductsTable({ setRows, setAllItems, columns, rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRemoveProduct = (id) => {
    setAllItems((prev) => prev.filter((p) => p.id !== id));
    setRows((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, j) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={j}>
                    {columns.map((column, i) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={i} align={column.align}>
                          <span
                            className={`${
                              column.id === "remove"
                                ? "tableDeleteBtn"
                                : column.id === "edit"
                                ? "tableEditBtn"
                                : ""
                            } 
                            ${column.id !== "code" ? "text-capitalize" : ""}
                            ${
                              column.id === "status" && value === "visible"
                                ? "statusCellVisible"
                                : value === "hidden"
                                ? "statusCellHidden"
                                : ""
                            }
                            `}
                            onClick={() =>
                              column.id === "remove" &&
                              handleRemoveProduct(row["id"])
                            }
                          >
                            {column.id === "price" ? `$ ${value}` : value}
                          </span>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="tablePagination"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}