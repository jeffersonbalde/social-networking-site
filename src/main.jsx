import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />} />
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)