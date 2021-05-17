// React
import React, { useEffect, useRef } from "react";
// Child components
import SearchAutocomplete from "../../components/SearchAutocomplete";
import TableToolbar from "../../components/TableToolbar";
// Material Design 
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
// Table Pagination
import PropTypes from "prop-types";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableFooter from "@material-ui/core/TableFooter";
// CSS
import "./style.css";
// Moment.js
import moment from "moment";
// number-abbreviate
import abbreviate from "number-abbreviate";

// Material Design table pagination
const useStylesPagination = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

// Class styles
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: 950,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderStyle: "solid",
    margin: "0 auto",
    marginBottom: "50px",
  },
  cell: {
    textAlign: "center"
  },
  cellHeight: {
    maxHeight: 80,
  },
  addressInput: {
    height: 40,
  },
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
  noteBtn: {
    background: "none",
    border: "none",
    textDecoration: "underline",
    cursor: "pointer",
    fontSize: 12
  }
});

// Tooltip text
const tooltipTitles = {
  guide: "The price guide of the property",
  sold: "The sold price of the property",
  auction: "Did you attend the auction? Or was there no auction?",
  notes: "Create a note OR click on a note title to view it"
};

function TablePaginationActions(props) {
  const classes = useStylesPagination();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  )
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
}; 

function createData(date, address, type, bed, bath, car, land, guide, sold, auction, notes, id) {
  return { date, address, type, bed, bath, car, land, guide, sold, auction, notes, id };
};

// const rows = [
//   createData("21/04/21", "4/3 Barr Pl Waverley", "Townhouse", 3, 2, 2, 220, "$2.5m", "$2.6m", "-", "21/04/21"),
//   createData("17/04/21", "53 Bore St Greenwood", "House", 5, 3, 2, 450, "$3.2m", "$3.3m", "24/04/21", "18/04/21"),
//   createData("17/04/21", "3/35 Star Rd Starville", "Apartment", 2, 2, 1, 97, "$2.2m", "$2.76m", "24/04/21", "-"),
//   createData("17/04/21", "54 Michael St Beverley", "House", 4, 3, 1, 650, "$2.2m", "$2.29m", "-", "18/04/21"),
//   createData("10/04/21", "131 Euroka St Boxley", "House", 3, 2, 1, 180, "$2.2m", "$2.32m", "-", "-"),
//   createData("10/04/21", "29 Euroka St Boxley", "House", 5, 2, 3, 980, "$4.2m","$4.175m", "-", "10/04/21"),
//   createData("10/04/21", "7/63 Bomson Ave Boxley", "Apartment", 4, 2, 2, 203, "$3.65m","4.0m", "-", "-"),
//   createData("3/04/21", "9 Samson Rd Bondi", "House", 4, 3, 3, 267, "$2.9m", "$3.21m", "-", "-"),
//   createData("3/04/21", "2/85 Samson Dr Bondi", "Townhouse", 3, 2, 1, 216, "$1.8m", "$1.891m", "-", "6/04/21"),
//   createData("3/04/21", "42 Billy Ave Cronolla", "House", 3, 2, 1, 390, "$2.8m", "$2.6m", "-", "-"),

// ];

export default function PropertyTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    getAndSetProperties();
  }, [props.modifiedProperties]);

  const getAndSetProperties = () => {
    let rowsToRender = [];
    props.modifiedProperties.forEach(property => {
      rowsToRender.push(createData(
        moment(property.dateInspected).format("YYYY-MM-DD"),
        property.propertyAddress,
        property.propertyType,
        property.bedrooms,
        property.bathrooms,
        property.carSpaces,
        property.landSize,
        property.priceGuide,
        property.soldPrice,
        property.attendedAuction === true ? "Yes" : 
        property.attendedAuction === false ? "No":
        "N/A",
        property.notes,
        property.id
      ))
    });    
    setRows(rowsToRender);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableData = (row) => {
    return (
      <TableRow className={classes.cellHeight} key={row.address}>
        <TableCell className="date-cell">
          {
            props.editMode && props.propertyToEditId === row.id ? 
              <input type="date" ref={props.editDateRef} defaultValue={moment(row.date).format("YYYY-MM-DD")}
                style={{ width: "90px", height: "30px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "2px" }}
              /> 
            : row.date 
          }
        </TableCell>
        <TableCell>{row.address}</TableCell>
        <TableCell>{row.type}</TableCell>
        <TableCell>{row.bed}</TableCell>
        <TableCell>{row.bath}</TableCell>
        <TableCell>{row.car}</TableCell>
        <TableCell>{row.land}</TableCell>
        <TableCell>
          {
            props.editMode && props.propertyToEditId === row.id ? 
              <input type="number" ref={props.editGuideRef} defaultValue={row.guide}
                style={{ width: "65px", height: "30px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "2px" }}
              /> 
            : `$${abbreviate(row.guide, 3)}` 
          }
        </TableCell>
        <TableCell>
          {
            props.editMode && props.propertyToEditId === row.id ?
              <input type="number" ref={props.editSoldRef} defaultValue={row.sold}
                style={{ width: "65px", height: "30px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "2px" }}
              /> 
            : `$${abbreviate(row.sold, 3)}`
          }              
        </TableCell>
        <TableCell className={classes.cell}>
          {
            props.editMode && props.propertyToEditId === row.id ?
              <select ref={props.editAuctionRef} style={{ height: "30px" }}>
                {row.auction === "true" ? 
                  <>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                    <option value={null}>No auction</option>
                  </> : 
                  row.auction === "false" ?
                  <>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                    <option value={null}>No auction</option>
                  </> : 
                  <>
                  <option value={null}>No auction</option>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </>
                }
              </select>
              : row.auction 
          }
        </TableCell>
        <TableCell className={`${classes.cell} note-cell`}>
          <ul>
            {row.notes.length > 0 ? 
              row.notes.map(note => (
                <li key={note.id} className="property-note-title">
                  <button className={classes.noteBtn} onClick={props.handleViewNoteButtonClick} id={`viewnote-${note.id}`} 
                    data-address={row.address}
                    data-beds={row.bed}
                    data-baths={row.bath}
                    data-cars={row.car}
                    data-land={row.land}
                    data-text={note.text}
                    data-title={note.title}
                  >
                    "{note.title}"
                  </button>
                </li>
              )) : 
              <li className="no-property-notes">
                <button onClick={props.handleCreateNoteClick} id={`createnote-${row.id}`} 
                  style={{ height: 30, width: 70, fontWeight: "bold" }}
                  data-address={row.address}
                  data-beds={row.bed}
                  data-baths={row.bath}
                  data-cars={row.car}
                  data-land={row.land}
                >
                  Create
                </button>
              </li>
            }
          </ul>
        </TableCell>
        <TableCell style={{ paddingLeft: "30px" }}>
          {props.editMode && props.propertyToEditId === row.id ? 
            <button id={`savePropertyBtn-${row.id}`} className="property-action-btn" onClick={props.handleSaveButtonClick}>
              <i id={`saveProperty-${row.id}`} className="fas fa-save" style={{ color: "black"}}></i>
            </button> :
            <button id={`editPropertyBtn-${row.id}`} className="property-action-btn" onClick={props.handleEditButtonClick}>
              <i id={`editProperty-${row.id}`} className="fas fa-edit" style={{ color: "grey"}}></i>
            </button> 
          }
          <button id={`deletePropertyBtn-${row.id}`} className="property-action-btn" onClick={props.handleDeleteButtonClick}>
            <i id={`deleteProperty-${row.id}`} className="fas fa-trash" style={{ color: "grey"}}></i>
          </button>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <>
    <TableToolbar
      searchRef={props.searchRef}
      sortCriteria={props.sortCriteria}
      handleSortChange={props.handleSortChange}
      sortOptions={props.sortOptions}
      filterCriteria={props.filterCriteria}
      handleFilterChange={props.handleFilterChange}
      filterOptions={props.filterOptions}
      handleClearButtonClick={props.handleClearButtonClick}
      handleSearchChange={props.handleSearchChange}
    />
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Bed</TableCell>
            <TableCell>Bath</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Land</TableCell>
            <TableCell>
              <Tooltip title={tooltipTitles.guide}>
                <div className="tooltip">
                  Guide
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title={tooltipTitles.sold}>
                <div className="tooltip">
                  Sold
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title={tooltipTitles.auction}>
                <div className="tooltip">
                  Auction
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <Tooltip title={tooltipTitles.notes}>
                <div className="tooltip">
                  Notes
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <input type="date" ref={props.dateRef} defaultValue={moment().format("DD/MM/YY")}
                style={{ width: "90px", height: "56px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "4px" }}
              />
            </TableCell>
            <TableCell>
              <SearchAutocomplete
                id="search-autocomplete-inspected"
                className="inspected-search-address"
                // style={{ position: "fixed" }}
                addressRef={props.addressRef}
                onInputChange={props.handleAddressInputChange}
                suggestions={props.addressSuggestions}
                onChange={props.handleSuggestionClick}
                smallInput={true}
              />
            </TableCell>
            <TableCell>
              {/* <input type="text" ref={props.typeRef}
                style={{ width: "80px", height: "30px", border: "1px solid rgb(228, 228, 228)", borderRadius: "2px" }}
              /> */}
              <div className="no-input-cell">-</div>
            </TableCell>
            <TableCell>
              {/* <input type="text" ref={props.bedRef}
                style={{ width: "30px", height: "30px", border: "1px solid rgb(228, 228, 228)", borderRadius: "2px" }}
              /> */}
              <div className="no-input-cell">-</div>
            </TableCell>
            <TableCell>
              {/* <input type="text" ref={props.bathRef}
                style={{ width: "30px", height: "30px", border: "1px solid rgb(228, 228, 228)", borderRadius: "2px" }}
              /> */}
              <div className="no-input-cell">-</div>
            </TableCell>
            <TableCell>
              {/* <input type="text" ref={props.carRef}
                style={{ width: "30px", height: "30px", border: "1px solid rgb(228, 228, 228)", borderRadius: "2px" }}
              /> */}
              <div className="no-input-cell">-</div>
            </TableCell>
            <TableCell>
              {/* <input type="text" ref={props.landRef}
                style={{ width: "30px", height: "30px", border: "1px solid rgb(228, 228, 228)", borderRadius: "2px" }}
              /> */}
              <div className="no-input-cell">-</div>
            </TableCell>
            <TableCell>
              <input type="number" ref={props.guideRef} placeholder="1500000"
                style={{ width: "75px", height: "56px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "4px" }}
              />
            </TableCell>
            <TableCell>
              <input type="number" ref={props.soldRef} placeholder="1750000"
                style={{ width: "75px", height: "56px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "4px" }}
              />
            </TableCell>
            <TableCell>
              <select ref={props.auctionRef}
                style={{ width: "45px", height: "56px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "4px" }}
              >
                <option value={false}>No</option>
                <option value={true}>Yes</option>
                <option value={null}>No auction</option>
              </select>
              {/* <input type="text" ref={props.auctionRef} placeholder="Required"
                style={{ width: "60px", height: "20px", border: "1px solid rgb(0, 0, 0, 0.23)", borderRadius: "4px" }}
              /> */}
            </TableCell>
            <TableCell>
              {/* <button
                style={{
                  background: "rgb(258, 258, 258)",
                  padding: "5px",
                  border: "1px solid rgb(208, 208, 208)",
                  borderRadius: "2px",
                  width: "60px",
                  color: "grey"
                }}
              >Create</button> */}
              <div className="no-input-cell">-</div>
            </TableCell>
            <TableCell>
              <button className="property-action-btn" type="submit" onClick={props.handleNewEntryButtonClick}>
                <i className="fas fa-plus-circle" style={{ color: "rgb(102, 185, 106)", fontSize: "20px" }}></i>
              </button>
            </TableCell>
          </TableRow>
          {(rowsPerPage > 0 
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            props.propertyToEditId === row.id ? 
              <ClickAwayListener onClickAway={props.handleInputClickAway} key={row.address}>
                {tableData(row)}
              </ClickAwayListener> : 
              tableData(row)
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={10} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 30, { label: "All", value: -1 }]}
              colSpan={12}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "row per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </>
  )
}

