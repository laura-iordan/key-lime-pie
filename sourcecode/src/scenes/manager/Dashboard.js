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
import {useParams} from "react-router-dom";
import "./../../index.css";

const Dashboard = () => {
  const { idUser } = useParams();

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
  const [projectsTargetMonth, setProjectsTargetMonth] = useState([{
    projects_target_month: 0
  }]);

  const [teamPerformanceBox, setTeamPerformanceBox] = useState([{
    employee_performance: 0,
    emp_name: ""
  }]);
  const [onTimeTasksBox, setOnTimeTasksBox] = useState({
    on_schedule_tasks: 0
  });
  const [overdueTasksBox, setOverdueTasksBox] = useState([{
    overdue_tasks: 0
  }]);
  const [projectsTargetMonthBox, setProjectsTargetMonthBox] = useState([{
    projects_target_month: 0
  }]);

  useEffect(() => {
    fetch(url+'get_team_performance.php?id_user='+idUser)
      .then(response => response.json())
      .then(data => {setTeamPerformance(data)
      console.log(data)})
      .catch(error => console.error(error));
  }, []);

  let performance = parseFloat(teamPerformance['team_performance']).toFixed(2) + "%";
  console.log(performance);

  useEffect(() => {
    fetch(url+'get_tasks_on_time.php?id_user='+idUser)
      .then(response => response.json())
      .then(data => setOnTimeTasks(data))
      .catch(error => console.error(error));
  }, []);

  let onTime = parseFloat(onTimeTasks['on_schedule_tasks']);

  useEffect(() => {
    fetch(url+'get_overdue_tasks.php?id_user='+idUser)
      .then(response => response.json())
      .then(data => setOverdueTasks(data))
      .catch(error => console.error(error));
  }, []);

  let overdue = parseFloat(overdueTasks['overdue_tasks']);

  useEffect(() => {
    fetch(url+'get_projects_target_month.php?id_user='+idUser)
      .then(response => response.json())
      .then(data => setProjectsTargetMonth(data))
      .catch(error => console.error(error));
  }, []);

  let targetMonth = projectsTargetMonth['projects_target_month'];

  useEffect(() => {
    fetch(url+'get_team_performance_box.php?id_user='+idUser)
      .then(response => response.json())
      .then(teamPerformanceBox => {setTeamPerformanceBox(teamPerformanceBox)
      console.log(teamPerformanceBox)})
      .catch(error => console.error(error));
  }, []);

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
          <DialogTitle>
            <Typography variant="h3" fontStyle={{fontWeight: "bold"}}>
              {"Employees Performance"}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div style = {{
                paddingTop: "20px",
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingBottom: "20px"
              }}>
                <table className="rounded-corners">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Performance</th>
                  </tr>
                  </thead>
                  {teamPerformanceBox.map((val, key) => {
                      return (
                        <tbody>
                            <tr key={key}>
                            <td>{val.emp_name}</td>
                            <td>{val.employee_performance}%</td>
                          </tr>
                        </tbody>
                      )
                  })}
                </table>
              </div>
            </DialogContentText>
          </DialogContent>
        </span>
      );
    }
    if (boxId === "second-box") {
      return (
        <span>
          <DialogTitle>
            <Typography variant="h3" fontStyle={{fontWeight: "bold"}}>
              {"TITLE2"}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span>
                box2
              </span>
            </DialogContentText>
          </DialogContent>
        </span>
      );
    }
    if (boxId === "third-box") {
      return (
        <span>
          <DialogTitle>
            <Typography variant="h3" fontStyle={{fontWeight: "bold"}}>
              {"TITLE3"}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span>
                box3
              </span>
            </DialogContentText>
          </DialogContent>
        </span>
      );
    }
    if (boxId === "fourth-box") {
      return (
        <span>
          <DialogTitle>
            <Typography variant="h3" fontStyle={{fontWeight: "bold"}}>
              {"TITLE4"}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <span>
                box4
              </span>
            </DialogContentText>
          </DialogContent>
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
              progress={parseFloat(performance)/100}
              increase={performance}
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
            progress={parseFloat(onTime)/100}
              increase={onTime}
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
            progress={parseFloat(overdue)/100}
              increase={overdue}
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
            title={targetMonth}
            subtitle="Projects Approaching Deadline"
            progress={parseFloat(targetMonth)/100}
              increase={targetMonth}
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
        <div>
              {handleContent(boxId)}
            </div>

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