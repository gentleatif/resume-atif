import React from "react";
import Progress from "./Progress";
import Icon from "./Icon";
import Button from "./Button";
function About() {
  return (
    <div id="ABOUT" className="container-fluid about-section">
      <div className="">
        <div className="row  about-body pt-4">
          <div className="col-md-4 about-pic">
            <h1 className="aboutme">About Me</h1>
            <img className="avatar mt-3" src="atif4.jpg" alt=""></img>
          </div>

          <div className="col-md-8 mt-5 ">
            {/* row-col inside col 2 */}
            <div className="row bg-light roundeds mb-5 mt-4">
              <div className="col-md-6 roundeds">
                <p id="RESUME" className="my-4 mx-3 mt-5">
                  I am Atif Hussain.An enthusiastic Full Stack Web developer and
                  who works with extreme dedication fulfil exception of client
                  in-order to satisfy client with my expertise. Served many
                  clients Internationally.Enhanced both traffic and revenue with
                  high-quality, user-friendly,responsive, front-end design.
                  Developing scalable backends for web applications using Node
                  JS. Has extensive experience in Javascript. Developing
                  software for the world of intent is something I'm passionate
                  about and I'm dedicated to making the world of intent easy and
                  affordable for everyone.My ultimate goal is to creating impact
                  globally by making awesome apps.
                </p>

                <div className="ms-1 ps-2 text-nowrap">
                  <Button
                    name="Download Resume"
                    size="150"
                    bgcolor="white"
                    download="resume"
                  />
                </div>
              </div>

              <div className="col-md-6 my-4 ">
                <Progress name="Javascript" percent="90" />
                <Progress name="MongoDB" percent="85" />
                <Progress name="Express.js" percent="90" />
                <Progress name="React.js" percent="85" />
                <Progress name="Node.js" percent="90" />
                <Progress name="Frontend Development" percent="95" />
                <Progress name="Fullstack Development" percent="90" />
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      {/* row for adding footer of about */}
      {/* <div className="container"> */}
      <div className="row icons">
        <Icon name="Project Completed" no="67" icon="fas fa-fire fa-3x" />
        <Icon name="Cup of Cofee" no="556" icon="fas fa-mug-hot fa-3x" />
        <Icon
          name="Satisfied Client"
          no="30"
          icon="fas fa-people-carry fa-3x"
        />
        <Icon name="Award Won" no="02" icon="fas fa-award fa-3x" />
      </div>
    </div>
    // </div>
  );
}

export default About;
