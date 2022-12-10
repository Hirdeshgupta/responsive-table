import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "first_name", headerName: "First name", width: 130 },
  { field: "last_name", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "gender",
    headerName: "Gender",
  },
  {
    field: "ip_address",
    headerName: "IP Address",
    width: 150,
  },
  {
    field: "airport code",
    headerName: "Airport Code",
    width: 150,
  },
  {
    field: "time",
    headerName: "Time",
    width: 90,
  },
  {
    field: "status",
    headerName: "Status",
    width: 90,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 150,
  },
  {
    field: "area",
    headerName: "Area",
    width: 200,
  },
  {
    field: "show",
    headerName: "Show",
    width: 90,
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 90,
  },
];

export default function DataTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await axios({
        method: "get",
        url: "http://localhost:4000/data",
        withCredentials: false,
      });
      console.log(data.data);
      setData(data.data);
    }
    getData();
  }, []);
  return (
    <Box
      sx={{
        height: 1000,
        width: "100%",
        "& .cold": {
          backgroundColor: "#8be78b",
          color: "#1a3e72",
        },
        "& .hot": {
          backgroundColor: "#f76f72",
          color: "#1a3e72",
        },
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        getRowClassName={(params) => {
          return params.row.status === true ? "cold" : "hot";
        }}
      />
    </Box>
  );
}
