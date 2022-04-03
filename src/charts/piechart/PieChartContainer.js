import React from "react";
import Legend from "./Legend";
import PieChart from "./PieChart";
import Stack from "@mui/material/Stack";

function PieChartContainer(props) {
  return (
    <div style={{ padding: "10px" }}>
      <Stack alignItems="center" direction="row" spacing={2}>
        <Legend params={props} />
        <PieChart params={props} />
      </Stack>
    </div>
  );
}

export default PieChartContainer;
