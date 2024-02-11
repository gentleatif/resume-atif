import React from "react";

function Icon(props) {
  return (
    <div className="margin mt-0 pb-2 col-lg-3 col-md-5 icon d-flex">
      {/* icon */}
      <div className="mt-1">
        <i class={props.icon}></i>
      </div>
      {/* passage and no. */}
      <div className="ms-2 ">
        <h1 className="m-0 p-0">{props.no}</h1>
        <p className="m-0 p-0 mb-2">{props.name}</p>
      </div>
    </div>
  );
}

export default Icon;
