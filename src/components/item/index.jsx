import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./index.css"
import { Link } from 'react-router-dom';

export default function MediaCard({ id, img, title, price, stock }) {
    return (
        <Card className="card" sx={{ maxWidth: 345, marginLeft: "10px", marginRight: "20px", marginBottom: "50px" }}>
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
                    Stock: {stock}
                </Typography>
            </CardContent>
            <CardActions>
                <div className="buttonContainer">
                    <Link className="detailButton" to={`/item/${id}`}>Ver detalles</Link>
                </div>
            </CardActions>
        </Card>
    );
}