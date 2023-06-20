import Image from 'next/image'
import styles from './page.module.css'
import Homeslider from '@/components/homeslider/page'
import Homeblock from '@/components/homeblock/page'
import Link from 'next/link'
import Products from '@/components/product/page'
import Productslider from '@/components/productslider/page'
import Trendingslider from '@/components/trendingSlider/page'


export default function Home() {

  return (
    <>
      <Homeslider />
      <div className="secondSec">
        <Homeblock />
      </div>

      <div className="recommendedSec my-5 mx-3 pt-2">
        <div className="topDiv d-flex align-items-center flex-wrap mb-4">
          <h1 className={styles.recommendedText + " mb-0"}>Recommended by Earthie </h1>
          <Link href={'/'} className={styles.viewBtn + " mx-3 px-4 py-2"}>View All</Link>
        </div>

        <div className="">
          <Productslider />
        </div>
      </div>

      <div className="recommendedSec my-5 mx-3 pt-2">
        <div className="topDiv d-flex align-items-center flex-wrap mb-4">
          <h1 className={styles.recommendedText + " mb-0"}>Treding now on Earthie </h1>
          <Link href={'/'} className={styles.viewBtn + " mx-3 px-4 py-2"}>View All</Link>
        </div>

        <div className="">
          <Trendingslider />
        </div>
      </div>
    </>
  )
}
