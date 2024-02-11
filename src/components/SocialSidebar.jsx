import React from 'react';
// import FaFacebook from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialSidebar(params) {
  return (
    <div className={params.customClass}>
      <div>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.linkedin.com/in/gentleatif'
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://github.com/gentleatif?tab=repositories'
        >
          <FaGithub />
        </a>
      </div>

      <div>
        <a href='dd'>
          <FaFacebook />
        </a>
      </div>
      <div>
        <a href='dd'>
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default SocialSidebar;
