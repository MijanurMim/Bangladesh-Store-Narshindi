import React from 'react';
import css from './Catagories.css'
import item1 from '../../../images/iteam1.jpg'
import { Container } from 'react-bootstrap';

const Catagories = () => {
    return (
        <Container>
            <h1 style={{ fontFamily: 'Dancing Scripts,cursive', marginBottom: 100, marginTop: 100 }}>Top Catagories</h1>

            <div className=' item-container    mx-auto'>


                {/* div1 for tems */}
                <div className='d-flex' id="item-one">

                    <div className='item'>
                        <img className='item-img' src={item1} alt="" />
                        <h6 className='item-text'>RING</h6>
                    </div>
                    <div className='item' >
                        <img className='item-img' src={item1} alt="" />
                        <h6 className='item-text'>NECKLACES</h6>
                    </div>

                </div>

                {/* div2 for items */}

                <div className='d-flex d-inline-block'>
                    <div className='item'>
                        <img className='item-img' src={item1} alt="" />
                        <h6 className='item-text'>EARRING</h6>
                    </div>
                    <div className='item'>
                        <img className='item-img' src={item1} alt="" />
                        <h6 className='item-text'>BRACLET</h6>
                    </div>
                </div>





            </div>
        </Container>
    );
};

export default Catagories;