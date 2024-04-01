import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

function GoToAppButton() {
  const handleClick = () => {
    window.location.href = '/App.js'; // Directs the user to App.js
  };

  return (
    <button onClick={handleClick}>Go to App</button>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <GoToAppButton />
  </React.StrictMode>,
  document.getElementById('root') // Ensure the button is rendered in the same container as App component
);

reportWebVitals();
