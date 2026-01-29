import React from 'react';
import Home from './Component/Home/Home';
import Packages from './Component/Packages/Packages';
import FromContact from './Component/FromContact/FromContact';
// import Contact from './Component/Services/Services';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import FAQ from './Component/FAQ/FAQ';
let rouyter = createBrowserRouter(
  [
    { path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'packages', element: <Packages /> },
        { path: 'FromContact', element: <FromContact /> },
        { path: 'FAQ', element: <FAQ /> }
    ]}
  ],
  { basename: "/strategia.site" } 
);
const App = () => {
  return (
    <RouterProvider router={rouyter}></RouterProvider>
  );
}
export default App;