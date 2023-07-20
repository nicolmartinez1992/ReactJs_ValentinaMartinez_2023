import { useState } from "react"


const CheckoutForm = ({onConfirm}) => {
    const [name, setName] =useState("")
    const [phone, setPhone] =useState("")
    const [email, setEmail] =useState("")
    
    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form"></form>
            <label className="Label">
            Nombre
            <input type="text" className="Input" value={name} onChange={({target}) => setName(target.value)} />
            </label>
            <label className="Label">
            Télefono
            <input type="text" className="Input" value={phone} onChange={({target}) => setPhone(target.value)} />
            </label>
            <label className="Label">
            Email
            <input type="text" className="Input" value={email} onChange={({target}) => setEmail(target.value)} />
            </label>
        </div>
    )
}

export default CheckoutForm