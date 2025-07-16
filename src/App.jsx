import React from 'react';

import {Route , createBrowserRouter, createRoutesFromElements , RouterProvider} from 'react-router-dom'; 
import HomePages from './pages/HomePages';   
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';  
import JobPage , {JobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJob from './pages/EditJob';
import { ToastContainer } from 'react-toastify';



const App = () => {
  const addJob = async (newJob) => {
  const res  = await fetch(`/api/jobs`, {
    method : "POST",
    headers:  {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(newJob)
  });
  return ;
}

  const deleteJob = async (id) => {
    const res  = await fetch(`/api/jobs/${id}`, {
    method : "DELETE",
   });
  return;
}

const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  

const router  = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element = {<MainLayout/>}>
    <Route index element =  {<HomePages/>}/> 
  <Route
          path='/edit-job/:id'
          element={<EditJob updateJobSubmit={updateJob} />}
          loader={JobLoader}
        />
     <Route path = "/jobs/:id" element =  {<JobPage deleteJob = {deleteJob}/>} loader = {JobLoader}/> 
    <Route path = "/jobs" element =  {<JobsPage/>}/> 
    < Route path = "/add-job" element =  {<AddJobPage addjobssubmit = {addJob}/>}/> 
    <Route path = "*" element =  {<NotFound/>}/> 

    </Route>
  ) ) ; 
  return <RouterProvider router = {router}/> ; 
  

};

export default App;
