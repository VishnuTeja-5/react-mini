import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './Layout.jsx';
import {Currency,Todo,PasswordGenerator, Home} from "./components/Component.jsx"
import './index.css'
import App from './App.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='todo' element = {<Todo />} />
      <Route path='currency' element = {<Currency />} />
      <Route path='password-gen' element ={<PasswordGenerator />} />
      <Route path='theme-switch' element = {<App />} />
      <Route path='*' element = {<div>Page Not Found</div>} />
    </Route>
  )  
);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
