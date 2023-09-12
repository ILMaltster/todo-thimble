import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import ThemeProvider from "./providers/theme-provider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
