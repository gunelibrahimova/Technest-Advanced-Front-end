import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useGetProductsQuery } from '../../redux/store';
import {Product}  from '../../Interface/ProductInfo'

const Products: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  useEffect(() => {
    if (isError) {
      console.log('Error occurred while fetching products.');
    }
  }, [isError]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="products">
      <div className="container">
        <div className="row">
          {
            products.products &&
            products.products.map((product: Product) => (
              <div className="col-lg-4 mb-3" key={product.id}>
                <Card sx={{ maxWidth: 345, height: 350 }}>
                  <CardActionArea>
                    <Link to={`/products/${product.id}`}>
                      <CardMedia component="img" height="200" image={product.thumbnail} alt={product.title} />
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
