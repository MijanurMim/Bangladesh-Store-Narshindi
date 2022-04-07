import React from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../NavBar/NavBar';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductShow = () => {

    return (
        <div>
            <NavBar></NavBar>

            <div style={{ width: "90%" }} className='row mb-5 body mx-auto'>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
                <ProductDetail></ProductDetail>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductShow;