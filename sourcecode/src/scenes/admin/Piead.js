import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChartAdmin from "../../components/PieChartAdmin";

const Piead = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart Activ Employee" subtitle="Activity" />
      <Box height="75vh">
        <PieChartAdmin />
      </Box>
    </Box>
  );
};

export default Piead;