import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import earthieFooter from '@/public/images/footerImage.png'
import Link from 'next/link'

function Footer() {
    return (
        <div className=''>
            <div className=" m-2">
                <div className={styles.footer + " row p-3"}>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12 ">
                        <div className=" d-flex flex-column align-items-start">
                            <Image src={earthieFooter} alt='footer logo' />
                            <p className="footText w-75">Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            <Link href={''}>More about Earthie
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg>
                            </Link>
                        </div>

                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12 ">
                        2
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12 ">
                        3
                    </div>
                    <div className="col-12 col-lg-3 col-md-6 col-sm-12 s">
                        4
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer