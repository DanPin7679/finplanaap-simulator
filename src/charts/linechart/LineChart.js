import React from "react";
function LineChart(props) {
  const data = props.params.data;
  const width = props.params.width;
  const height = props.params.height;
  const bandSpace = 10;
  const bandWidth = (width - (data.length - 1) * bandSpace) / data.length;

  const handleShowValue = (e) => {
    console.log(e.target.dataset.value);
  };
  return (
    <>
      <svg width={width} height={height}>
        {data.map((d, i) => (
          <rect
            x={i * (bandWidth + bandSpace)}
            y={height - d.value}
            width={bandWidth}
            height={d.value}
            fill="blue"
            data-value={d.value}
            onMouseOver={(e) => handleShowValue(e)}
          />
        ))}
      </svg>
    </>
  );
}

export default LineChart;
