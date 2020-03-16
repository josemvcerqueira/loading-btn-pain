import * as React from "react";

function SvgCircle(props) {
  return (
    <svg
      className="circular-loader"
      viewBox="25 25 50 50"
      {...props}
    >
      <circle
        className="loader-path"
        cx={50}
        cy={50}
        r={24}
        fill="none"
        stroke="#7655E9"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgCircle;
