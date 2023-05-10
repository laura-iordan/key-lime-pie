import React, {useState, useEffect} from 'react';
import { ResponsiveLine } from "@nivo/line";
import url from '../get_php_link';

function LineChart(){
  const [tasks, setTasks] = useState([]);
    const data=[];

    useEffect(() => {
      fetch(url+'get_tasks.php')
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
      <ResponsiveLine

      animate
      data={data}
  margin={{
    bottom: 60,
    left: 80,
    right: 20,
    top: 20
  }}
  yFormat={function noRefCheck(){}}
  yScale={{
    type: 'linear'
  }}
      xScale={{ type: 'point' }}
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Projects',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Tasks',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      enablePointLabel={true}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}

  />

       
    )
}

export default LineChart;