import React from "react";

function List(props) {
  return (
    <li class="nav-item mx-auto">
      <a class="nav-link text-white" href={`#${props.name}`}>
        {props.name}
      </a>
    </li>
  );
}

export default List;
