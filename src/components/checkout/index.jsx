import { useContext, useState } from "react"
import { CartContext } from "../../context/cart-context"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../checkout-form"


const Checkout = () => {
const [loading, setLoading] = useState(false)
const [orderId, setOrderId] = useState ("")

const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

const createOrder = async ({names, phone, email}) => {
setLoading(true)

try {
    const objOrder = {
        buyer: {
            names, 
            phone, 
            email,
        },
        items: carrito,
        total: precioTotal,
        date: Timestamp.fromDate(new Date()),
    }

    const batch = writeBatch(db)
    const outOfStock = []

    const ids = carrito.map(prod => prod.id)

    const productsRef = collection(db, "productos")

    const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))

    const {docs} = productsAddedFromFirestore

    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stockDb
        const productsAddedToCart = carrito.find(prod=> prod.id === doc.id)
        const prodQuantity = productsAddedToCart?.quantity 
            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
    })

    if(outOfStock.length === 0){
        await batch.commit()

        const orderRef = collection(db, "órdenes")
        const orderAdded = await addDoc(orderRef, objOrder)

        setOrderId(orderAdded.id)
        vaciarCarrito()
    } else {
        console.error("Hay productos fuera de stock")
    }

} catch(error){
    console.log(error)
} finally {
    setLoading(false)
}
}

if(loading) {
    return <h1>Se está generando su orden...</h1>
}

if(orderId) {
    return <h1>El id de su orden es: {orderId}</h1>
}

return (
    <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder}/>
        <button>Finalizar compra</button>
    </div>
)
}

export default Checkout