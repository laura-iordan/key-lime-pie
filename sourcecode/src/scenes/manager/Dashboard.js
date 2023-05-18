import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BumpChart from "../../components/BumpChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";
import BarChart2 from '../../components/BarChart2';
import { useState, useRef } from "react";
import "./../../index.css";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AiFillAlert } from "react-icons/ai";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BsPersonFillUp } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import CardinalAreaChart from "./../../components/CardinalAreaChart";

const Dashboard = () => {

  const [open, setOpen] = useState(false);
  const[boxId, setBoxId] =useState("");

  const ref = useRef(null);

  const handleClickOpen = (event) => {
    setOpen(true);
    setBoxId(event.currentTarget.id);
  };

  function handleContent(boxId) {
    if (boxId === "first-box") {
      return (
        <span>
          box1
        </span>
      );
    }
    if (boxId === "second-box") {
      return (
        <span>
          box2
        </span>
      );
    }
    if (boxId === "third-box") {
      return (
        <span>
          box3
        </span>
      );
    }
    if (boxId === "fourth-box") {
      return (
        <span>
          box4
        </span>
      );
    }
  }

  const handleClose = () => {
    setOpen(false);
  };


  return (
        <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        <Box
          id="first-box"
          ref={ref}
          onClick={handleClickOpen}
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor="#eaf5e8"
          display="flex"
          alignItems="center"
          justifyContent="center"
          >

          <StatBox
              title="89%"
              subtitle="Employees Performance"
              progress="0.75"
              increase="+14%"
              icon={
                <BsPersonFillUp
                  style = {{ color: '#5b7a54', fontSize: "26px" }}
                />
              }/>
        </Box>

        <Box
          id="second-box"
          ref={ref}
          onClick={handleClickOpen}
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor='#eaf5e8'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            className="rounded-corners"
            title="431"
            subtitle="Tasks on time"
            progress="0.50"
            increase="+21%"
            icon={
              <FaTasks
                style = {{ color: '#5b7a54', fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          id="third-box"
          ref={ref}
          onClick={handleClickOpen}
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor='#eaf5e8'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            className="rounded-corners"
            title="5"
            subtitle="New Projects"
            progress="0.30"
            increase="+5%"
            icon={
              <MdOutlineWorkHistory
                style ={{ color: "#5b7a54", fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          id="fourth-box"
          ref={ref}
          onClick={handleClickOpen}
          className="rounded-corners"
          gridColumn="span 3"
          backgroundColor="#eaf5e8"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2"
            subtitle="Projects Approaching Deadline"
            progress="0.80"
            increase="+23%"
            icon={
              <AiFillAlert
                style = {{
                  color: "#5b7a54", fontSize: "26px" 
                }}
              />
            }
          >
          </StatBox>
        </Box>

        <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogActions>
        <CloseIcon
              onClick={handleClose} autoFocus>
              </CloseIcon>
        </DialogActions>
        <DialogTitle>
          <Typography variant="h3" fontStyle={{fontWeight: "bold"}}>
          {"TITLE"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div>
              {handleContent(boxId)}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>


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
            <CardinalAreaChart/>
            
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
          <BumpChart isDashboard={true} />
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