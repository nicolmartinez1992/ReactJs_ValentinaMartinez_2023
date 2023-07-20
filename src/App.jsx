import React from "react"
import NavBar from "./components/nav-bar";
import ItemListContainer from "./components/item-list-container";
import ItemDetailContainer from "./components/item-detail-container"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart-context";
import Carrito from "./components/carrito";
import Checkout from "./components/checkout";

function App() {

    return (
        <div>
            <CartProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer title="PRODUCTOS" />}></Route>
                        <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                        <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
                        <Route path="/carrito" element={<Carrito />}></Route>
                        <Route path="/checkout" element={<Checkout />}></Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;

