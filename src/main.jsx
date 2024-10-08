import React from 'react';  
import { createRoot } from 'react-dom/client';  
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";

import Errorpage from './components/Errorpage/Errorpage';


import './index.css';  
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    errorpage: <Errorpage />,  
    children: [
      {
        path: '/',  
        element: <Home />,  
      },
      {
        path: '/applied',  
        element: <AppliedJobs />, 
        loader: () =>fetch('/jobs.json')
      },
      {
        path: '/job/:id',  
        element: <JobDetails />, 
        loader:() =>fetch('/jobs.json')
      }
    ],
  },
]);
;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);