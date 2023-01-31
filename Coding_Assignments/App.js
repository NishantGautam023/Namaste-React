import React, {lazy, Suspense,useEffect,useState} from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from './components/Body'
import Footer from "./components/Footer"
// import About from "./components/About"
import Pricing  from "./components/Pricing";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

import Shimmer from "./components/Shimmer";

const Faq = lazy(() => import("./components/Faq"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }

    }, [isDarkMode]);
    const toggleDarkMode = () => {
        setIsDarkMode((currentMode) => !currentMode);
    };

  return (
    <>
      <Header isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}  />
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
              path: "/faq",
              element: (
                  <Suspense fallback={<h1>Loading....</h1>}>
                      <Faq />
                  </Suspense>
              )


          },
          {
          path: "/about",
          element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                  <About />
              </Suspense>
          )
    
    
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
