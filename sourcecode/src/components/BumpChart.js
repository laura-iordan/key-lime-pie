import React, {useState, useEffect} from 'react';
import { ResponsiveBump } from "@nivo/bump";
import url from '../get_php_link';
import { useParams } from "react-router-dom";

function BumpChart(){
  const { idUser } = useParams();
  const [tasks, setTasks] = useState([]);
    const data=[];

    useEffect(() => {
      fetch(url+'get_tasks_bar.php?id_user='+idUser)
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(error => console.error(error));
    }, []);

    for(var i=0; i<tasks.length; i++){
      let ok=0;
      for(var j=0; j<data.length; j++){
        if(data[j]["id"] === tasks[i]["emp_name"]){
          ok=1;
          let obj={}
          obj["x"]=tasks[i]["project_name"];
          obj["y"]=tasks[i]["task_no"];
          data[j]["data"].push(obj);
        } 
      }
      if(ok===0){
        let obj={};
        obj["id"]=tasks[i]["emp_name"];
        obj["data"]=[];
        data[data.length]=obj;
        let obj1={}
        obj1["x"]=tasks[i]["project_name"];
        obj1["y"]=tasks[i]["task_no"];
        data[j]["data"].push(obj1);
        
      } 
    }

    console.log(data);

    
    return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: 'spectral' }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      startLabelTextColor={{ from: 'color', modifiers: [] }}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: 'serie.color' }}
      enableGridX={false}
      enableGridY={false}
      axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36
      }}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'tasks',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
  />

       
    )
}

export default BumpChart;