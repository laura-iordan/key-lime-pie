import React, {useState, useEffect} from 'react';
import {ResponsiveBar} from '@nivo/bar';
import url from '../get_php_link';
import {useParams} from "react-router-dom";

function BarChart({forwardRef}){
    const { idUser } = useParams();
    const [tasks, setTasks] = useState([]);
    const data=[];

    useEffect(() => {
      fetch(url+'get_tasks_overdue.php?id_user='+idUser)
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch(error => console.error(error));
    }, []);

    for(var i=0; i<tasks.length; i++){
        var obj = {}
        obj["employee"]=tasks[i]["emp_name"];
        obj["total tasks"]=tasks[i]["total_tasks"];
        obj["total tasksColor"] = "hsl(50, 70%, 50%)";
        obj["in schedule tasks"]=tasks[i]["on_schedule_tasks"];
        obj["in schedule tasksColor"]="hsl(168, 70%, 50%)";
        obj["overdue tasks"]=tasks[i]["overdue_tasks"];
        obj["overdue tasksColor"]="hsl(79, 70%, 50%)";
        data.push(obj);
    }
    console.log(data);

    
return(
    <ResponsiveBar
        ref={forwardRef}
        data={data}
        groupMode="grouped"
        keys={[
            'total tasks',
            'in schedule tasks',
            'overdue tasks'
        ]}
        indexBy="employee"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'purpleRed_green' }}
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
            legend: 'employees',
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
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)
}

export default BarChart;