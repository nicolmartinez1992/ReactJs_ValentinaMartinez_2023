import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../item-count';
import { Link } from 'react-router-dom';
import "./index.css"

export default function ItemDetail({ img, title, price, description, category, stock, id }) {
    const product = { img, title, price, description, category, stock, id }
    const [quantityAdded, setQuantityAdded] = React.useState(0)

    const handleOnAdd = (items) => {
        setQuantityAdded(items)
    }

    return (
        <Card className="card" sx={{ maxWidth: 345 }}>
            <div className="imgContainer">
                <CardMedia className="cardMedia"
                    sx={{ height: 200, width: 200, marginTop: "20px" }}
                    image={img}
                />
            </div>
            <CardContent className="cardContent">
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="black">
                    Precio: {price}
                </Typography>
                <Typography variant="body2" color="black">
                    Descripción: {description}
                </Typography>
                <Typography variant="body2" color="black">
                    Categoría: {category}
                </Typography>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "center", marginBottom: "10px"}}>
                {
                    quantityAdded > 0 ? (
                        <Link to="/carrito" className="finishButton">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} product={product} />)
                }
            </CardActions>

        </Card>
    );
}