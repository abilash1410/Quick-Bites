import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.jsx"
import Cart from "./components/Cart.js"
import ContactUs from "./components/ContactUs.js"
import AboutUs from "./components/AboutUs.js" 
import RestaurantCard from './components/RestaurantCard'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Error from './components/Error'
import { Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu.js"

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet/>
            
        </div>
    )
}
const appRouter = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    errorElement:<Error/>,
    children:[
        {
            path: '/',
            element: <Body/>
        },
        {
            path: '/AboutUs',
            element: <AboutUs/>
        },
        {
            path: '/Contactus',
            element: <ContactUs/>
        }, 
        {
            path: '/Cart',
            element: <Cart/>
        }, 
        {
            path:'/RestaurantMenu/:resId',
            element:<RestaurantMenu/>
        }
        
    ]
   
}, ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

