import { Box } from "@mui/material";
import Header from "../../components/Header";
import CardinalAreaChart from "../../components/CardinalAreaChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <CardinalAreaChart />
      </Box>
    </Box>
  );
};

export default Line;