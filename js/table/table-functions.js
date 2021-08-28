import { updateTableFooter } from "./table.js";
function addRow(rowData) {
    sessionStorage.setItem("rows", JSON.stringify([...getRows(), rowData]));
}

function setRows(rows) {
    sessionStorage.setItem("rows", JSON.stringify(rows));
}

function getRows() {
    return JSON.parse(sessionStorage.getItem("rows"));
}

function getStartRow() {
    return parseInt(sessionStorage.getItem("startRow"));
}

function setStartRow(i) {
    sessionStorage.setItem("startRow", i);
}

function getEndRow() {
    return parseInt(sessionStorage.getItem("endRow"));
}

function setEndRow(i) {
    sessionStorage.setItem("endRow", i);
}

function getNumRows() {
    return parseInt(sessionStorage.getItem("numRows"));
}

function setNumRows(i) {
    sessionStorage.setItem("numRows", i);
}

function getRowsPerPage() {
    return parseInt(sessionStorage.getItem("rowsPerPage"));
}

function setRowsPerPage(i) {
    sessionStorage.setItem("rowsPerPage", i);
}

function getHeaderRow() {
    var l = [];
    d3.select("#shot-table")
        .select("thead")
        .selectAll("th")
        .each(function() {
            let dataId = d3.select(this).attr("data-id");
            let dataType = d3.select(this).attr("data-type");
            l.push({ id: dataId, type: dataType });
        });
    return l;
}

function clearTable() {
    sessionStorage.setItem("rows", JSON.stringify([]));
    setStartRow(0);
    setEndRow(0);
    setNumRows(0);
    updateTableFooter();

    d3.select("#shot-table-body")
        .selectAll("tr")
        .remove();

    var dots = d3.select("#hockey-rink-svg").select("#dots");

    dots.select("#normal")
        .selectAll("*")
        .remove();
    dots.select("#selected")
        .selectAll("*")
        .remove();
}

export {
    setRows,
    getRows,
    getHeaderRow,
    clearTable,
    getStartRow,
    getEndRow,
    setStartRow,
    setEndRow,
    getNumRows,
    setNumRows,
    getRowsPerPage,
    setRowsPerPage,
};