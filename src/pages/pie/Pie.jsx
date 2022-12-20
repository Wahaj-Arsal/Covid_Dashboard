/** @format */

import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Piechart from "../../components/piechart/Piechart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <Piechart />
      </Box>
    </Box>
  );
};

export default Pie;
