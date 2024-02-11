import React from "react";

function Progress(props) {
  const progressStyle = {
    transition: "width 5s linear",
    width: props.percent + "%",
    background:
      "linear-gradient(270deg, rgb(242, 112, 156), rgb(255, 148, 114))",
  };
  return (
    <div className="mx-3 my-3">
      <p className="m-0">{props.name}</p>
      <div className="progress roundeds m-0 p-0" style={{ height: "20px" }}>
        <div
          style={progressStyle}
          className="progress-bar roundeds m-0 p-0"
          role="progressbar"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.percent}%
        </div>
      </div>
    </div>
  );
}

export default Progress;
