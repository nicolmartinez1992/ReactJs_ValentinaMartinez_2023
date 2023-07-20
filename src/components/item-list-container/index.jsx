import React from "react";
import { useState, useEffect } from "react"
import ItemList from "../item-list";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ title }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, "productos"), where('category', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 className="productsTitle" style={{
                textAlign: "center", marginBottom: "50px"
            }}>{title}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;