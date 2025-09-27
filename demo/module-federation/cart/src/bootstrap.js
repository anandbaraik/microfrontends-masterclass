import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './Cart';

// Standalone mode for development
if (process.env.NODE_ENV === 'development' && !window.__FEDERATED__) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Cart />);
}
