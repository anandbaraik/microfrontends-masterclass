import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ProductCatalog from '../../module-federation/product-catalog/src/ProductCatalog';

// Import styles
import '../../module-federation/product-catalog/src/productCatalog.css';

// Create the Single-SPA lifecycle
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ProductCatalog,
  errorBoundary(err, info, props) {
    return <div className="error-boundary">
      <h2>Error in Products MFE</h2>
      <pre>{err.toString()}</pre>
    </div>;
  },
  domElementGetter: (props) => {
    // Get or create container element
    let el = document.getElementById('products-mfe');
    if (!el) {
      el = document.createElement('div');
      el.id = 'products-mfe';
      const container = props.domElementGetter ? props.domElementGetter() : document.getElementById('mfe-container');
      if (container) {
        container.appendChild(el);
      }
    }
    return el;
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
