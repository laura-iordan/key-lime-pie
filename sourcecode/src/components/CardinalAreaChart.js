import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip, 
  ResponsiveContainer
} from "recharts";
import { curveCardinal } from "d3-shape";
import "./../index.css";
import url from "../get_php_link";
import {useParams } from "react-router-dom";

function CardinalAreaChart() {
  const { idUser } = useParams();

  const [performance, setPerformance] = React.useState([]);
  const data = [];

  console.log(performance);

  React.useEffect(() => {
    fetch(url+'get_employees_performance.php?id_user='+idUser)
    .then(response => response.json())
    .then(data => setPerformance(data))
    .catch(error => console.error(error));
  }, []);

  for (var i = 0; i < performance.length; i++) {
    var obj = {}
    obj["name"] = performance[i]["emp_name"];
    obj["target"] = 90;
    obj["randament"] = performance[i]["employee_performance"];
    data.push(obj);
  }

  const cardinal = curveCardinal.tension(0.2);

  return (
    <ResponsiveContainer width="95%" height="90%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 0,
            bottom: 40
          }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 100]} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="target"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0}
        />
        <Area
          type={cardinal}
          dataKey="randament"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.1}
        />
      </AreaChart>
    </ResponsiveContainer>

  );

}

export default CardinalAreaChart;
