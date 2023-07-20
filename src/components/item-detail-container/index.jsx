import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "../item-detail"
import "./index.css"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(0)

    const { itemId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

    return (
        <div className="detailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer