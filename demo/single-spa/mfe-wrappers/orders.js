import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Orders from '../../module-federation/orders/src/Orders';

// Create the Single-SPA lifecycle
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Orders,
  errorBoundary(err, info, props) {
    return <div className="error-boundary">
      <h2>Error in Orders MFE</h2>
      <pre>{err.toString()}</pre>
    </div>;
  },
  domElementGetter: (props) => {
    // Get or create container element
    let el = document.getElementById('orders-mfe');
    if (!el) {
      el = document.createElement('div');
      el.id = 'orders-mfe';
      const container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');
      if (container) {
        container.appendChild(el);
      }
    }
    return el;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
