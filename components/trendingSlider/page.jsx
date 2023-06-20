"use client"
import React from 'react'
import styles from './page.module.css'
import Products from '../product/page'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
async function Trendingslider() {
    var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const data = await axios.get(process.env.NEXT_PUBLIC_HOST + '/products')
    const res = data.data
    
    return (
        <Slider {...settings1} >
            {res.map((prod) => {
                return (
                    <div key={prod.id}>
                        <Products prodName={prod.productName} prodPrice={prod.productPrice} prodImage={prod.product_image} />
                    </div>
                )
            })}
            {/* <div className="">1</div>
            <div className="">2</div>
            <div className="">3</div>
            <div className="">4</div>
            <div className="">5</div> */}
        </Slider>

    )
}

export default Trendingslider