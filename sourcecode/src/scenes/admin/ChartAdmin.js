import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChartAdmin from "../../components/BarChartAdmin";

const ChartAdmin = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChartAdmin />
      </Box>
    </Box>
  );
};

export default ChartAdmin;