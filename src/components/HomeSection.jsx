import React, { useState, useEffect } from "react";
import SocialSidebar from "./SocialSidebar";
import Navbar from "./Navbar";
function Home() {
  // window size

  const size = useWindowSize();

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <div id="HOME">
      <Navbar />

      <section className="home-section">
        <div className="typewriter home-content">
          <h1 className="name">I'm Atif Hussain</h1>
          <h4 className="short-intro mx-auto text-center">
            Based In India. Passionate Programmer. Technical Thinker
          </h4>
        </div>

        <div className="smoothscroll ">
          <a href="#ABOUT">
            <img className="scroll " src="scroll-down.gif" alt="" />
          </a>
        </div>
        {size.width > 768 ? (
          <SocialSidebar customClass="sidebar-div" />
        ) : (
          <SocialSidebar customClass="footersidebar social-iconTop" />
        )}
      </section>
    </div>
  );
}

export default Home;
