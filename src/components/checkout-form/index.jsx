import { useState } from "react"
import "./index.css"


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleConfirm} className="form">
                <label className="label">
                    Nombre
                    <input type="text" className="input" value={name} onChange={({ target }) => setName(target.value)} />
                </label>
                <label className="label">
                    Télefono
                    <input type="text" className="input" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className="label">
                    Email
                    <input type="text" className="input" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <button className="sendForm">Finalizar compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm