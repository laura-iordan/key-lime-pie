import React, {useState, useEffect} from 'react';
import {ResponsiveBar} from '@nivo/bar';
import url from '../get_php_link';

function BarChartAdmin(){
    const [projects, setProjects] = useState([]);
    const data=[];
    const keys = ['budget'];

    useEffect(() => {
      fetch(url+'get_projects_piechart.php')
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error(error));
    }, []);

    for(var i=0; i<projects.length; i++){
        var obj={};
        obj["project_name"]=projects[i]["project_name"];
        obj["budget"]=projects[i]["budget"];
        data.push(obj);
    }

    console.log(data);
    
    return(
        <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="project_name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear', max: 50000 }}
        indexScale={{ type: 'band', round: true }}
        colors={['#339966', '#8BC34A']}
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
            legend: 'projects',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'budget',
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
            barAriaLabel={e=>e.id+": "+e.formattedValue+" in project: "+e.indexValue}
        />
    )
}

export default BarChartAdmin;
