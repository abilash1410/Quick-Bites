import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.js";
import ContactUs from "./components/ContactUs.js";

import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { lazy } from "react";
import UserContext from "./components/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore.js";

const AboutUss = lazy(() => import("./components/AboutUs.js"));

const AppLayout = () => {
  const [name, setName] = useState("Abilash");
  useEffect(() => {
    const data = {
      name: "Abilash",
    };
    setName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedUser: name, setName }}>
        <div id="app">
          {<Header />}
          {<Outlet />}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/AboutUs",
        element: (
          <Suspense fallback={<h1>"Loading About us.."</h1>}>
            <AboutUss />
          </Suspense>
        ),
      },
      {
        path: "/Contactus",
        element: <ContactUs />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/RestaurantMenu/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
