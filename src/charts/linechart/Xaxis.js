import React from "react";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";

function Xaxis(props) {
  const data = props.params.data;
  return (
    <Stack direction="row" justifyContent="space-around" spacing={2}>
      {props.params.data.map((d) => (
        <Typography variant="h6" gutterBottom component="div">
          {d.name}
        </Typography>
      ))}
    </Stack>
  );
}

export default Xaxis;
