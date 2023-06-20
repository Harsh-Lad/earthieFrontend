import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import axios from 'axios'
async function Homeblock() {
    const data = (await axios.get(process.env.NEXT_PUBLIC_HOST + '/homeBlock')).data
    return (
        <div className="row">
            {data.map((slide) => {
                return(
                <div key={slide.blockName} className="col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-0">
                    <Image className={styles.slideImg + ' w-100 px-1'} width={1080} height={1080} src={process.env.NEXT_PUBLIC_HOST + slide.offerImage} alt={slide.blockName} />
                </div>)
            })}
        </div>
    )
}

export default Homeblock