import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from './components/Body'
import Footer from "./components/Footer"
import About from "./components/About"
import Pricing  from "./components/Pricing";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter  = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error />,
      children: [
        {
          path:"/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About/>
    
    
      },
      {
          path:     "/pricing",
          element: <Pricing />
       }, 
       {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
       }
      ]
  }, 

])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
