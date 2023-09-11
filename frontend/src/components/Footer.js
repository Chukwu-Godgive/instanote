import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the currentYear state every year
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <footer>
      <div className="footer-content">
        <p> &copy; {currentYear} InstaNote</p>
      </div>
    </footer>
  );
}

export default Footer;
