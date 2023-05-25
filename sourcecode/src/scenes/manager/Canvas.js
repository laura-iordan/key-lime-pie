import React, { useRef } from "react";
import BarChart from "../../components/BarChart";

export default function Canvas() {
  const svgRef = useRef();

  console.log(svgRef.current);
  return <BarChart forwardRef={svgRef} />;
}