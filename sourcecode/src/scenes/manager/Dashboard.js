import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Header from "../../components/Header";
//import LineChart from "../../components/LineChart";
import BumpChart from "../../components/BumpChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";
import BarChart2 from '../../components/BarChart2';
import { useState, useEffect, useRef } from "react";
import "./../../index.css";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AiFillAlert } from "react-icons/ai";
import { BiTaskX } from "react-icons/bi";
import { BsPersonFillUp } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import CardinalAreaChart from "./../../components/CardinalAreaChart";
import url from '../../get_php_link';
import Canvas1 from "./Canvas";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Canvas } from "@react-pdf/renderer";

const Dashboard = () => {

  const [open, setOpen] = useState(false);
  const [boxId, setBoxId] = useState("");

  const [teamPerformance, setTeamPerformance] = useState([{
    team_performance: 0
  }]);
  const [onTimeTasks, setOnTimeTasks] = useState({
    on_schedule_tasks: 0
  });
  const [overdueTasks, setOverdueTasks] = useState([{
    overdue_tasks: 0
  }]);

  useEffect(() => {
    fetch(url+'get_team_performance.php')
      .then(response => response.json())
      .then(data => {setTeamPerformance(data)
      console.log(data)})
      .catch(error => console.error(error));
  }, []);

  let performance = teamPerformance['team_performance'] + "%";
  console.log(performance);

  useEffect(() => {
    fetch(url+'get_tasks_on_time.php')
      .then(response => response.json())
      .then(data => setOnTimeTasks(data))
      .catch(error => console.error(error));
  }, []);

  let onTime = onTimeTasks['on_schedule_tasks'] + "%";
  console.log(onTime);

  useEffect(() => {
    fetch(url+'get_overdue_tasks.php')
      .then(response => response.json())
      .then(data => setOverdueTasks(data))
      .catch(error => console.error(error));
  }, []);

  let overdue = overdueTasks['overdue_tasks'] + "%";
  console.log(overdue);

  //performance.push(teamPerformance[0]["team_performance"]);
  //onTime.push(onTimeTasks[0]["on_schedule_tasks"]);
  //overdue.push(overdueTasks[0]["overdue_tasks"]);

  const ref = useRef(null);

  const handleClickOpen = (event) => {
    setOpen(true);
    setBoxId(event.currentTarget.id);
  };

  function download(){
      
  }

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
              title={performance}
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
            title={onTime}
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
            title={overdue}
            subtitle="Overdue tasks"
            progress="0.30"
            increase="+5%"
            icon={
              <BiTaskX
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
          <CardinalAreaChart />
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
          <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "#5b7a54"}}
                  onclick={() => download()}
                />
              </IconButton>
            </Box>
          <Box height="250px" mt="-20px">
            <Canvas1 isDashboard={true} />
          </Box>
        </Box>
        </Box>
        </Box>
   
  );
};

export default Dashboard;