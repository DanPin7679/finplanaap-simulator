import React from "react";
import LineChartContainer from "./linechart/LineChartContainer";
import PieChartContainer from "./piechart/PieChartContainer";

function ChartManager() {
  const dataPie = [
    { name: "Item 1", value: 0.5, color: "red" },
    { name: "Item 2", value: 0.5, color: "blue" },
    { name: "Item 3", value: 0.25, color: "green" },
  ];
  const dataLine = [
    { name: "2017", value: 240 },
    { name: "2018", value: 250 },
    { name: "2019", value: 250 },
    { name: "2020", value: 275 },
    { name: "2021", value: 325 },
  ];
  const width = 400;
  const height = 400;
  const margin = 40;
  return (
    <div>
      <PieChartContainer
        width={width}
        height={height}
        margin={margin}
        data={dataPie}
      />
      <LineChartContainer data={dataLine} width={width} height={height} />
    </div>
  );
}

export default ChartManager;