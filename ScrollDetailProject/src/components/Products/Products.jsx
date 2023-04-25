import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './products.scss'
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = useState("")
    const [visibleProducts, setVisibleProducts] = useState([]);


    const getProducts = async () => {
        await fetch("https://dummyjson.com/products")
            .then((a) => a.json())
            .then((data) => {
                setProducts(data.products);
                setVisibleProducts(data.products.slice(0, 6));
            })
    };

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if (scrollTop + clientHeight === scrollHeight) {
            const startIndex = visibleProducts.length;
            const endIndex = startIndex + 6;
            setVisibleProducts([...visibleProducts, ...products.slice(startIndex, endIndex)]);
        }
    };

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div id='products'>
            <div onScroll={handleScroll} style={{ height: "620px", overflow: "auto" }}>
                <div class="container">
                    <div class="row">
                        {
                            visibleProducts &&
                            visibleProducts.map((product) => (
                                <div class="col-lg-4 mb-3">
                                    <Card sx={{ maxWidth: 345, height: 350 }}>
                                        <CardActionArea>
                                            <Link to={"/products/" + product.id}>
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={product.thumbnail}
                                                    alt={product.title}
                                                />
                                            </Link>

                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {product.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {product.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products