import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import "./index.css"

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    // const handleSubmit = () => {
    //     alert("Formulario enviado")

    // }

    return (
        < div>
            <h1 className="cartTitle">Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id} className="cartContainer">
                        <h2>{prod.title}</h2>
                        <img width="200px" src={prod.img} alt="" />
                        <p>Precio unitario: ${prod.price}</p>
                        <p>Precio total: ${prod.price*prod.items}</p>
                        <p>Cantidad: {prod.items}</p>
                    </div>
                ))
            }

            <h2 className="totalPrice">Precio total: ${precioTotal()} </h2>
            <div className="buttonsContainer">
            <button className="clearButton" onClick={handleVaciar}>Vaciar</button>
            <Link className="orderButton" to="/checkout">Crear orden</Link>
            </div>
        </div >
    )
}

export default Carrito