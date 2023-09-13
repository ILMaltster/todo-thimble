import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import ThemeProvider from "./providers/theme-provider";
import DataProvider from "./providers/data-provider/data-provider";
import TableSelectionProvider from "./providers/table-selection-provider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <DataProvider>
                <TableSelectionProvider>
                    <App />
                </TableSelectionProvider>
            </DataProvider>
        </ThemeProvider>
    </React.StrictMode>
);
