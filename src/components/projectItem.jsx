import React, { useState } from "react";
function Item(props) {
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseEnter() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  const customStyle = {
    position: "relative",
    bottom: "2px",
    opacity: "0.5",
    transition:
      "position 3s ease-in-out bottom 3s ease-in-out opacity 3s ease-in-out",
  };

  return (
    <div id={props.id} className=" col-md-4 my-4 text-center ">
      <a target="_blank" rel="noreferrer" href={props.href}>
        <img
          style={isMouseOver ? customStyle : null}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseOut}
          className="img-project"
          src={props.src}
          alt=""
        />
      </a>
    </div>
  );
}
export default Item;
