import React, {useState, useEffect} from 'react';
import { ResponsivePie } from "@nivo/pie";
import url from '../get_php_link';

function PieChart(){

    const [projects, setProjects] = useState([]);
    let data=[];

    useEffect(() => {
      fetch(url+'get_projects_piechart.php')
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error(error));
    }, []);

    for(var i=0; i<projects.length; i++){
        var obj={};
        obj["id"]=projects[i]["project_name"];
        obj["label"]=projects[i]["project_name"];
        obj["value"]=projects[i]["budget"];
        data[i]=obj;
    }

    /*const data=[
        {
          "id": "sass",
          "label": "sass",
          "value": 45,
          "color": "hsl(66, 70%, 50%)"
        },
        {
          "id": "c",
          "label": "c",
          "value": 16,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "make",
          "label": "make",
          "value": 23,
          "color": "hsl(225, 70%, 50%)"
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 428,
          "color": "hsl(283, 70%, 50%)"
        },
        {
          "id": "python",
          "label": "python",
          "value": 179,
          "color": "hsl(120, 70%, 50%)"
        }
      ];*/
    return(
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '0.1'
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}

        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    )
}

export default PieChart;