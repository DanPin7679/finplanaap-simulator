import React from "react";
import { arc, pie } from "d3";

function PieChart(props) {
  const data = props.params.data;
  const width = props.params.width;
  const height = props.params.height;
  const margin = props.params.margin;
  const centerX = width / 2;
  const centerY = height / 2;
  var radius = Math.min(width, height) / 2 - margin;

  const pieArc = arc().innerRadius(0).outerRadius(radius);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {pie()
          .value(function (d) {
            return d.value;
          })(data)
          .map((d) => (
            <path
              strokeWidth="5px"
              stroke="white"
              fill={d.data.color}
              d={pieArc(d)}
            />
          ))}
      </g>
    </svg>
  );
}

export default PieChart;
