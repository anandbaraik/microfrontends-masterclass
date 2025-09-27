import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Cart from '../../module-federation/cart/src/Cart';

// Import styles
import '../../module-federation/cart/src/cart.css';

// Create the Single-SPA lifecycle
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Cart,
  errorBoundary(err, info, props) {
    return <div className="error-boundary">
      <h2>Error in Cart MFE</h2>
      <pre>{err.toString()}</pre>
    </div>;
  },
  domElementGetter: (props) => {
    // Get or create container element
    let el = document.getElementById('cart-mfe');
    if (!el) {
      el = document.createElement('div');
      el.id = 'cart-mfe';
      const container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');
      if (container) {
        container.appendChild(el);
      }
    }
    return el;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
