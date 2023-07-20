import React from "react";
import { useState, useEffect } from "react"
import ItemList from "../item-list";
import Title from "../title";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    // useEffect(() => {
    //     const asyncFunction = categoryId ? getProductsByCategory : getProducts

    //     asyncFunction(categoryId)
    //     .then(response=> {
    //         setProducts(response)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // },[categoryId])
    
    useEffect(() => {
        const collectionRef = categoryId 
        ? query(collection(db, "productos"), where('category', '==', categoryId))
        : collection(db, 'productos')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return{id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <div>
            <Title greeting="Bienvenidos a TRACTO!" />
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;