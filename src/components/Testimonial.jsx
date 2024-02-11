import React from "react";

function Testimonial() {
  return (
    <div id="TESTIMONIAL" className="testimonial">
      <div className="row  about-body pt-4">
        <div className="col-md-4 about-pic">
          <h1 className="aboutme">Testimonial</h1>
        </div>
      </div>

      <div className="d-flex flex-column">
        <h5 className="fst-italic m-2 review text-danger">
          "Atif is an excellent resource and a master at full-stack development.
          He makes sure all the deadlines meet and that also with the highest
          standards. He is a hardworking and dedicated person who will complete
          your project in a given time frame. I would recommend and endorse
          Atif."
        </h5>
        <p className="align-self-end me-2">
          Pranshu Sharma(Director at Synpulse)
        </p>
        <h5 className="fst-italic m-2 review text-danger mt-2">
          "Atif is one of the best developers we have worked with so far. He is
          diligent, responsive, and smart and always goes above and beyond to
          make sure the work is completed with the best possible quality. We
          highly recommend hiring Atif to anyone looking for a great full-stack
          developer!"
        </h5>
        <p className="align-self-end me-2">Hamlit Pvt ltd. -Singapore</p>
      </div>
    </div>
  );
}

export default Testimonial;
