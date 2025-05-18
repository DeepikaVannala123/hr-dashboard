// Import React core library
import React from 'react';
// Import ReactDOM for rendering React components to the DOM
import ReactDOM from 'react-dom/client';
// Import the main App component
import App from './App';
// Import the AppProvider for global context/state management
import { AppProvider } from './context/AppContext';

// Create a root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Render the App component wrapped with AppProvider and React.StrictMode
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);