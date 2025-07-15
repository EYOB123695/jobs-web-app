import React from 'react';

import {Route , createBrowserRouter, createRoutesFromElements , RouterProvider} from 'react-router-dom'; 
import HomePages from './pages/HomePages';   
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';  
import JobPage , {JobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';



const App = () => {
  const addJob = async (newJob) => {
  console.log(newJob);
}

const router  = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element = {<MainLayout/>}>
    <Route index element =  {<HomePages/>}/> 
    <Route path = "/jobs/:id" element =  {<JobPage/>} loader = {JobLoader}/> 
    <Route path = "/jobs" element =  {<JobsPage/>}/> 
    < Route path = "/add-job" element =  {<AddJobPage addjobssubmit = {addJob}/>}/> 
    <Route path = "*" element =  {<NotFound/>}/> 

    </Route>
  ) ) ; 
  return <RouterProvider router = {router}/> ; 
  

};

export default App;
