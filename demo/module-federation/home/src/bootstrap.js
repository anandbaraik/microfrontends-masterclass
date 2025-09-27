import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';

// Standalone mode for development
if (process.env.NODE_ENV === 'development' && !window.__FEDERATED__) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Home />);
}
