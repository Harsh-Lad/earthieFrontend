"use client"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import styles from './page.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";

async function Homeslider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // const data = await fetch(process.env.NEXT_PUBLIC_HOST + '/homeSlider')
    const data = await (await axios.get(process.env.NEXT_PUBLIC_HOST + '/homeSlider')).data


    return (
        <div className="">
            <Slider {...settings} className={styles.mobileSlide}>
                {data.map((slide) => {
                    if (slide.isMobile == true) {
                        return (
                            <div className=" keen-slider__slide number-slide1" key={slide.slideName}>
                                <Image className={styles.slideImg + ' w-100'} width={1920} height={1080} src={process.env.NEXT_PUBLIC_HOST + slide.slide} alt={slide.slideName} />
                            </div>)
                    }
                })}
            </Slider>

            <Slider {...settings} className={styles.desktopSlide}>
                {data.map((slide) => {
                    {
                        if (slide.isMobile == false) {

                            return (
                                <div className=" keen-slider__slide number-slide1" key={slide.slideName}>
                                    <Image className={styles.slideImg + ' w-100'} width={1080} height={1080} src={process.env.NEXT_PUBLIC_HOST + slide.slide} alt={slide.slideName} />
                                </div>)
                        }
                    }

                })}
            </Slider>

        </div>

    )
}

export default Homeslider