import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import LayoutOne from './Layouts/LayoutOne';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/"  element={<LayoutOne />}>
    <Route index  element={<Home />}></Route>
    </Route>
    </Route>
  )
);
const App = () => {
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
