import React from "react";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";

function Legend(props) {
  return (
    <div>
      {props.params.data.map((d) => (
        <Stack alignItems="center" direction="row" spacing={2}>
          <div
            style={{ width: "20px", height: "20px", backgroundColor: d.color }}
          ></div>
          <Typography variant="h6" gutterBottom component="div">
            {d.name}
          </Typography>
        </Stack>
      ))}
    </div>
  );
}

export default Legend;
