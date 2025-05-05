import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright" align="center">
          &copy; {currentYear} Ashutosh Patil. All Rights Reserved.
        </div>
        {/* <div className="social-links" align="center">
          <a href="https://github.com/AshutoshPatil14" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ashutosh-patil-556518191" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
