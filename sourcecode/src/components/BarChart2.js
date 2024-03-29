import React, {useState, useEffect} from 'react';
import {ResponsiveBar} from '@nivo/bar';
import url from '../get_php_link';
import { useParams } from "react-router-dom";

function BarChart2(){
    const { idUser } = useParams();
    const [tasks, setTasks] = useState([]);
    const data=[];
    const keys = [];

    useEffect(() => {
      fetch(url+'get_tasks_bar.php?id_user='+idUser)
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(error => console.error(error));
    }, []);

    for(var i=0; i<tasks.length; i++){
        let ok=0;
        for(var j=0; j<data.length; j++){
            if(data[j]["project"]===tasks[i]["project_name"]){
                data[j][tasks[i]["emp_name"]]=tasks[i]["task_no"];
                if(!keys.includes(tasks[i]["emp_name"])){
                    keys.push(tasks[i]["emp_name"]);
                }
                ok=1;
            }
            
        }
        if(ok===0){
            var obj={};
            obj["project"]=tasks[i]["project_name"];
            obj[tasks[i]["emp_name"]]=tasks[i]["task_no"];
            data.push(obj);
            if(!keys.includes(tasks[i]["emp_name"])){
                keys.push(tasks[i]["emp_name"]);
            }
            
        }
    }


    console.log(data);
    console.log(keys);

    
return(
    <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="project"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'paired' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}

        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.4'
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'project',
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
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        isFocusable={true}
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)
}

export default BarChart2;