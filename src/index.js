import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@mantine/core/styles.css';
import reportWebVitals from './reportWebVitals';
import { createTheme, MantineProvider } from '@mantine/core';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Auth from './pages/auth/auth';
import SignIn from './pages/auth/signIn';
import SignUp from './pages/auth/signUp';
import Main from './pages/main/main';
import Home from './pages/main/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  /** Put your mantine theme override here */
  colors:{
   
  }
});

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Auth />,
        children: [
          {
            path: "",
            element: <SignIn />,
          },
          {
            path: "signUp",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/main",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Home />,
          }
        ],
      },
    ]
    
  },
 
])

root.render(
  <React.StrictMode>
      <MantineProvider theme={theme}>
          {/* <App /> */}
          <RouterProvider router={router} />
      </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
