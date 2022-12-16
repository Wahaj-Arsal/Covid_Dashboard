/** @format */

import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Barchart from "../../components/barchart/Barchart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <Barchart />
      </Box>
    </Box>
  );
};

export default Bar;
