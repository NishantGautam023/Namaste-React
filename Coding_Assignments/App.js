import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from './components/Body'
import Footer from "./components/Footer"
import About from "./components/About"
import Pricing  from "./components/Pricing";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter  = createBrowserRouter([
  {
      path: "/",
      element: <AppLayout/>
  }, 
  {
      path: "/about",
      element: <About/>


  },
  {
      path: "/pricing",
      element: <Pricing />
  }

]
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
