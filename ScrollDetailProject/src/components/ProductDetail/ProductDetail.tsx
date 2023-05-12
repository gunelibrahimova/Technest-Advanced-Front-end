import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productDetail.scss';

interface Product {
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  price: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Product | null>(null);

  console.log(detail);

  const getProductById = async () => {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div id="productDetail">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="mainImage">
              {detail && <img src={detail.thumbnail} alt="" />}
            </div>
          </div>
          <div className="col-lg-6">
            {detail && (
              <>
                <h2>Product name: {detail.title}</h2>
                <p>Info: {detail.description}</p>
                <p>Category: {detail.category}</p>
                <p>Brand: "{detail.brand}"</p>
                <p>Stock quantity: {detail.stock}</p>
                <p>Product Rating: {detail.rating}</p>
                <h5>Price: {detail.price} $</h5>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
