import React from "react";
import items from "./ProjectDetails";
import Item from "./projectItem";
function Project() {
  return (
    <div id="WORKS" className="four my-5 py-2">
      <h3 className="text-center">Checkout Some Of My Works</h3>

      <div className="row mx-3 my-2">
        {items.map((item) => {
          return (
            <Item key={item.id} id={item.id} href={item.href} src={item.src} />
          );
        })}
      </div>
    </div>
  );
}

export default Project;
