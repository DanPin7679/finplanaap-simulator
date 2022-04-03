import React from "react";
import LineChart from "./LineChart";
import Stack from "@mui/material/Stack";
import Xaxis from "./Xaxis";

function LineChartContainer(props) {
  return (
    <div style={{ padding: "10px", width: props.width, height: props.height }}>
      <Stack alignItems="left" direction="column" spacing={2}>
        <LineChart params={props} />
        <Xaxis params={props} />
      </Stack>
    </div>
  );
}

export default LineChartContainer;
