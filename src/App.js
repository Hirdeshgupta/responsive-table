import "./App.css";
import DataTable from "./components/DataTable";
import { StyledEngineProvider } from "@mui/material/styles";
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <DataTable />
    </StyledEngineProvider>
  );
}

export default App;
