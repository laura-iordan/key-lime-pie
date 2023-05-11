import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BumpChart from "../../components/BumpChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";
import BarChart2 from '../../components/BarChart2';
import { mainTheme } from "../../theme";

const Dashboard = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: mainTheme.palette.primary.main,
              color: '#f4ffe9',
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ 
              mr: "10px"
               }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor="#eaf5e8"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: '#5b7a54', fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor='#eaf5e8'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            className="rounded-corners"
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: '#5b7a54', fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor='#eaf5e8'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            className="rounded-corners"
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: "#5b7a54", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor="#eaf5e8"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: "#5b7a54", fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          className="rounded-corners"
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="#eaf5e8"
        >
          <Box  
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color='#839897'
              >
                
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color="#acd5a3"
              >
               Tasks
              </Typography>
            </Box>
            <Box>
              <IconButton>

              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BumpChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          className="rounded-corners"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#eaf5e8"
          overflow="auto"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          
          </Typography>
          <Box height="270px">
          <PieChart />
          </Box>
        </Box>
          
        {/* ROW 3 */}

        <Box
          className="rounded-corners"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#eaf5e8"
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          
          </Typography>
          <Box height="250px">
          <BarChart2 isDashboard={true} />
          </Box>
        </Box>

        <Box
          className="rounded-corners"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#eaf5e8"
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          
          </Typography>
          <Box height="250px">
          <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          className="rounded-corners"
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#eaf5e8"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        </Box>
        </Box>
  );
};

export default Dashboard;