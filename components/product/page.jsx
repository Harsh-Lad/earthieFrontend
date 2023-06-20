import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import arrowRight from '@/public/images/arrow-right.svg'
function Products(props) {
    return (
        <div className={styles.productWrapper + " mx-2"}>
            <Image width={720} height={1080} alt='' className={styles.prodImage + ' w-100 '} src={process.env.NEXT_PUBLIC_HOST + props.prodImage} />
            <div className={styles.desc + " row mb-1"}>
                <div className={styles.nameContainer + " col-9  py-3"}>
                    {props.prodName}
                </div>
                <div className={styles.priceContainer + " col-3 py-3 text-center"}>
                    ₹{props.prodPrice}
                </div>
            </div>
            <div className={styles.addToCartBtn + " p-3"}>
                <p className={styles.addToCartText + " mb-0 "}>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg></p>
            </div>
            <div className={styles.wishListBtn +" "}>
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z" /></svg>
            </div>
        </div>
    )
}

export default Products