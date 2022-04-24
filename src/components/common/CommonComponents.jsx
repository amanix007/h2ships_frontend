import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, FormGroup, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export function RadioInputs({ value, handleChange, list }) {
  return (
    <div>
      <FormControl>
        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          {list.map((v) => (
            <FormControlLabel
              value={v.value}
              key={v.value}
              control={<Radio />}
              label={v.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

const TagButton = styled(Button)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  backgroundColor: "#EDEDF0",
  borderRadius: 22,
  marginRight: 12,
  marginBottom: 12,
  boxShadow: "none",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#0B4DA2;",
  },
  "&.selected": {
    color: "#fff",
    backgroundColor: "#0B4DA2;",
  },
}));

export function Tags({ value, handleChange, list }) {
  return (
    <div className="Tags">
      {list.map((v) => (
        <TagButton
          key={v.value}
          variant="contained"
          className={value === v ? "selected" : ""}
          onClick={(e) => handleChange(v)}
        >
          {v.label}
        </TagButton>
      ))}
    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#74AAF1",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    // color: 'green',
  },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'green',
  // },
  "& .MuiOutlinedInput-root": {
    // '& fieldset': {
    //   borderColor: 'red',
    // },
    // '&:hover fieldset': {
    //   borderColor: 'yellow',
    // },
    // '&.Mui-focused fieldset': {
    //   borderColor: 'green',
    // },
  },
});

export default function SearchOption() {
  return (
    <div className="SearchOption">
      <FormGroup row>
        <TextField
          label="Search by keyword"
          type="search"
          variant="outlined"
          placeholder="Search by keyword"
        />
        {/* <TextField variant="outlined" placeholder="Search by keyword" /> */}
        <Button variant="contained" disableElevation>
          Search
        </Button>
      </FormGroup>
    </div>
  );
}

export function GenericTables({ rows, cellTitles }) {
  return (
    <div className="GenericTables">
      <div className="table-title-search">
        <h4 className="title">Reports</h4>
        <div className="search">
          <SearchOption />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {cellTitles.map((ct, i) => (
                <StyledTableCell
                  align={i === 0 ? "left" : "right"}
                  className="text-start"
                >
                  {ct}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.title}>
                <StyledTableCell
                  style={{ width: "40%" }}
                  component="th"
                  scope="row"
                >
                  {row.title}
                </StyledTableCell>
                <StyledTableCell style={{ width: "12%" }} align="left">
                  {row.author}
                </StyledTableCell>
                <StyledTableCell style={{ width: "12%" }} align="left">
                  {row.category}
                </StyledTableCell>
                <StyledTableCell style={{ width: "12%" }} align="left">
                  {row.tag}
                </StyledTableCell>
                <StyledTableCell style={{ width: "12%" }} align="left">
                  {row.publishDate}
                </StyledTableCell>
                <StyledTableCell style={{ width: "12%" }} align="left">
                  <Link to="/reports/report-details">
                    <Button
                      variant="contained"
                      disableElevation
                      size="large"
                      // href={row.url}
                    >
                      <span style={{ whiteSpace: "nowrap" }}>Read More</span>
                    </Button>
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
