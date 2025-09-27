import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from '../../module-federation/home/src/Home';

// Import styles
import '../../module-federation/home/src/home.css';

// Create the Single-SPA lifecycle
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Home,
  errorBoundary(err, info, props) {
    return <div className="error-boundary">
      <h2>Error in Home MFE</h2>
      <pre>{err.toString()}</pre>
    </div>;
  },
  domElementGetter: (props) => {
    // Get or create container element
    let el = document.getElementById('home-mfe');
    if (!el) {
      el = document.createElement('div');
      el.id = 'home-mfe';
      const container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');
      if (container) {
        container.appendChild(el);
      }
    }
    return el;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
