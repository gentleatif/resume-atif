import React from "react";
import List from "./List";

function Navbar() {
  const listArr = [
    "HOME",
    "ABOUT",
    "WORKS",
    "RESUME",
    "TESTIMONIAL",
    "CONTACT",
  ];
  return (
    <div className="">
      <nav class="navbar navbar-light fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler ms-auto nav-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ul-pos ms-auto"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mb-2 mb-lg-0 pos-ul ul-nav rounded">
              {listArr.map((item) => {
                return <List name={item} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
