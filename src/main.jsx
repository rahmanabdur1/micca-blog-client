import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { ThemeProvider} from './ThemeContext/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider>
      <RouterProvider   router={router}></RouterProvider>
    </ThemeProvider>

  </React.StrictMode>,
);
