import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function SocialSidebar(params) {
  return (
    <div className={params.customClass}>
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/atif-hussain-1734bb188/"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/gentleatif?tab=repositories"
        >
          <GitHubIcon />
        </a>
      </div>

      <div>
        <a href="dd">
          <FacebookIcon />
        </a>
      </div>
      <div>
        <a href="dd">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
}

export default SocialSidebar;
