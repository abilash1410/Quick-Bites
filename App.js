import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.jsx"
import RestaurantCard from './components/RestaurantCard'

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

