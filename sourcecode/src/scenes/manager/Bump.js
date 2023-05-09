import { Box } from "@mui/material";
import Header from "../../components/Header";
import BumpChart from "../../components/BumpChart";

const Chart = () => {
  return (
    <Box m="20px">
      <Header title="Bump Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BumpChart />
      </Box>
    </Box>
  );
};

export default Chart;