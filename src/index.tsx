import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/style.scss";
import NavigationProvider from "./layout/Navigation/NavigationContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <NavigationProvider>
            <App/>
        </NavigationProvider>
    </React.StrictMode>
);
