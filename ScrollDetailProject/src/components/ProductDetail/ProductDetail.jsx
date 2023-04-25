import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './productDetail.scss'

const ProductDetail = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState([])

    const getProductById = async () => {
        await fetch("https://dummyjson.com/products/" + id)
            .then((res) => res.json())
            .then((data) => setDetail(data));
    }


    useEffect(() => {
        getProductById()
    }, [])

    console.log(detail);

    return (
        <div id='productDetail'>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="mainImage">
                            <img src={detail.thumbnail} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2>Product name : {detail.title}</h2>
                        <p> Info : {detail.description}</p>
                            <p>Category : {detail.category}</p> 
                            <p>Brand : "{detail.brand}"</p>
                        <p>stock quantity : {detail.stock}</p>
                        <p>Product Rating : {detail.rating}</p>
                        <h5>Price : {detail.price} $</h5>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail