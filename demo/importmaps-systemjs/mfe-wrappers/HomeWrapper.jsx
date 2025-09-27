import React, { useEffect } from 'react';
import Home from '../../module-federation/home/src/Home.jsx';
import homeStyles from '../../module-federation/home/src/home.css';

const HomeWrapper = () => {
  useEffect(() => {
    // Inject styles if not already present
    const styleId = 'mfe-home-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = homeStyles;
      document.head.appendChild(style);
    }
    
    // Cleanup on unmount
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, []);

  return <Home />;
};

export default HomeWrapper;
