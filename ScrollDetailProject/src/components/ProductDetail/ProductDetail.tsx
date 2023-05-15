import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../redux/store';
import { Container, Grid, Typography } from '@mui/material';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: detail, isLoading, isError } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (!isLoading && !isError && detail) {
      console.log(detail);
    }
  }, [detail, isLoading, isError]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching product details.</div>;
  }

  return (
    <div id="productDetail">
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item lg={6}>
            <div className="mainImage">
              {detail && <img src={detail.thumbnail} alt="" />}
            </div>
          </Grid>
          <Grid item lg={6}>
            {detail && (
              <>
                <Typography variant="h4" gutterBottom>
                  Product name: {detail.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Info: {detail.description}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Category: {detail.category}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Brand: "{detail.brand}"
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Stock quantity: {detail.stock}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Product Rating: {detail.rating}
                </Typography>
                <Typography variant="h6">Price: {detail.price} $</Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetail;
