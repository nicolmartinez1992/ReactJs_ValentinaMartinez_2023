import React, { useContext } from "react";
import "./index.css"
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    return (
        <div>
            <Link to="/carrito">
                <i className="bi bi-cart-fill cart"></i>
            </Link>
            <span>{cantidadEnCarrito()}</span>
        </div>
    )
}

export default CartWidget

