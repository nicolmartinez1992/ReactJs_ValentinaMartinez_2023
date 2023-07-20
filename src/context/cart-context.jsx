import React, { useState } from "react"
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
const [carrito, setCarrito] = useState ([]);

const onAddProduct = (products, items) => {
    const itemAgregado = {...products, items}
    
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto)=>producto.id === itemAgregado.id)

    if(estaEnElCarrito) {
        estaEnElCarrito.items = estaEnElCarrito.items + items
        setCarrito(nuevoCarrito)
    } else {
        setCarrito([...carrito, itemAgregado])
    }
  }

  const cantidadEnCarrito = () => { 
    return carrito.reduce((acc, prod) => acc  + prod.items, 0)
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price*prod.items, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <CartContext.Provider value={{carrito, onAddProduct, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
        {children}
    </CartContext.Provider>
  )
}

