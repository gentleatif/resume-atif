import React from "react";
import Home from "./HomeSection";
import About from "./About";
import Project from "./Project";
import Form from "./form";
import Footer from "./footer";
import Testimonial from "./Testimonial";
function Body() {
  return (
    <div className="main-body">
      <Home />
      <About />
      <Project />
      <Testimonial />
      <Form />
      <Footer />
    </div>
  );
}

export default Body;
