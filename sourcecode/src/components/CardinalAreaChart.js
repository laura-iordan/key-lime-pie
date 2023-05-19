import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";
import "./../index.css";

const data = [
  {
    name: "Angajat 1",
    target: 90,
    randament: 99
  },
  {
    name: "Angajat 2",
    target: 90,
    randament: 78
  },
  {
    name: "Angajat 3",
    target: 90,
    randament: 92
  },
  {
    name: "Angajat 4",
    target: 90,
    randament: 95
  },
  {
    name: "Angajat 5",
    target: 90,
    randament: 90
  },
  {
    name: "Angajat 6",
    target: 90,
    randament: 100
  }
  
];
const cardinal = curveCardinal.tension(0.2);

export default function App() {
  return (
    <AreaChart
      width={900}
      height={250}
      data={data}
      margin={{
        top: 50,
        right: 10,
        left: 0,
        bottom: 10
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
  );
}
