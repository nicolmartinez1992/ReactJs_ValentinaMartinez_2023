import React from "react"
import "./index.css"
import CartWidget from "../cart-widget"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="list">
                <div className="menuContainer">
                    <li className="brand">
                        <NavLink className="title" to={"/"}>TRACTO</NavLink>
                    </li>
                    <li className="listItem">
                        <NavLink className="itemName" to={"category/Shorts"}>Shorts</NavLink>
                    </li>
                    <li className="listItem">
                        <NavLink className="itemName" to={"category/Bodies"}>Bodies</NavLink>
                    </li>
                    <li className="listItem contact">
                        <NavLink className="itemName" to={"category/Tops"}>Tops</NavLink>
                    </li>
                </div>
                <div className="cartContainer">
                    <li className="cart">
                        <NavLink className="itemName" to="/carrito"><CartWidget /></NavLink>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar 
