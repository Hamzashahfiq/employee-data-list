import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditOffIcon from '@mui/icons-material/EditOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PreviewIcon from '@mui/icons-material/Preview';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Button } from '@mui/material';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// for tool tip
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

export default function CustomizedTables(props) {
  const rows = props.tableData
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ backgroundColor: "#ad1457" }}>Sr#</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#ad1457" }}>First Name</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#ad1457" }}>Last Name</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#ad1457" }}>Email</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#ad1457" }}>Phone_No</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#ad1457" }}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.uuid}>
              <StyledTableCell component="th" scope="row" style={{padding:'5px 16px'}}>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" style={{padding:'5px 16px'}}>
                {row.First_Name}
              </StyledTableCell>
              <StyledTableCell style={{padding:'5px 16px'}}>{row.Last_Name}</StyledTableCell >
              <StyledTableCell style={{padding:'5px 16px'}}>{row.Email}</StyledTableCell>
              <StyledTableCell style={{padding:'5px 16px'}}>{row.Phone_No}</StyledTableCell>
              <StyledTableCell style={{padding:'5px 16px'}}>
                <Stack direction="row" spacing={1}>
                  <BootstrapTooltip title="Update">
                    <IconButton  onClick={() => props.updateHandlerProp(row)} aria-label="Edit" color="primary">
                      <EditOffIcon style={{ color: "#004d40" }} />
                    </IconButton>
                  </BootstrapTooltip>
                  <BootstrapTooltip title="Delete">
                  <IconButton onClick={() => props.deleteHandlerProp (row.uuid)} color="secondary" aria-label="Delete">
                    <DeleteForeverIcon style={{ color: "red" }} />
                  </IconButton>
                </BootstrapTooltip>
                <BootstrapTooltip title="View">
                <IconButton onClick={() => props.viewHandlerprop(row)} color="primary" aria-label="View">
                  <PreviewIcon style={{ color: "orange" }} />
                </IconButton>
              </BootstrapTooltip>
            </Stack>
              </StyledTableCell>
      </StyledTableRow>
          ))}
    </TableBody>
      </Table >
    </TableContainer >
  );
}
