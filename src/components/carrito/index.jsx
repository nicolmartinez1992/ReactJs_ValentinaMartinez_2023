import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }

    const handleSubmit = () => {
        alert("Formulario enviado")

    }

    return (
        < div className="container" >
            <h1>Carrito</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h2>{prod.title}</h2>
                        <img width="200px" src={prod.img} alt="" />
                        <p>Precio unitario: ${prod.price}</p>
                        <p>Precio total: ${prod.price*prod.items}</p>
                        <p>Cantidad: {prod.items}</p>
                    </div>
                ))
            }

            <h2>Precio total: ${precioTotal()} </h2>
            <button onClick={handleVaciar}>Vaciar</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div >
    )
}

export default Carrito