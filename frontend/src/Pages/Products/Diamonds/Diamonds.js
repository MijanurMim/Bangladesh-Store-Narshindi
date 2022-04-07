import React from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import Diamond from '../Diamond/Diamond';
const Diamonds = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1>Our Diamond Products</h1>

            <div style={{ width: "90%" }} className='row mb-5 body mx-auto'>

                <Diamond></Diamond>
                <Diamond></Diamond>
                <Diamond></Diamond>
                <Diamond></Diamond>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Diamonds;