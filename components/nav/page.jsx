'use client'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/EarthieLogo.png'
import { Icon } from '@iconify/react';

function Nav() {
    return (
        <>
            <nav className={styles.navWrapper}>
                <div className="left">
                    <Link href={'/'}>
                        <Image src={logo} alt='logo' />
                    </Link>
                </div>

                <div className={"align-items-center " + styles.center}>
                    <Link href={''} className={styles.link + ' mx-3'}>
                        <p className={styles.navLink + " mb-0"}>Home</p>
                    </Link>
                    <Link href={''} className={styles.link + ' mx-3'}>
                        <p className={styles.navLink + " mb-0"}>Collection</p>
                    </Link>
                    <Link href={''} className={styles.link + ' mx-3'}>
                        <p className={styles.navLink + " mb-0"}>Offers</p>
                    </Link>
                    <Link href={''} className={styles.link + ' mx-3'}>
                        <p className={styles.navLink + " mb-0"}>New Arrival</p>
                    </Link>
                </div>

                <div className="right d-flex align-items-center">
                    <Link href={''} className={' mx-2'}>
                        <Icon icon="eva:search-outline" className={styles.navIcon + ' d-flex'} />
                    </Link>
                    <Link href={''} className={styles.rightIcons + ' mx-2'}>
                        <Icon icon="ph:heart" className={styles.navIcon + ' '} />
                    </Link>
                    <Link href={''} className={styles.rightIcons + ' mx-2'}>
                        <Icon icon="ant-design:shopping-cart-outlined" className={styles.navIcon + ' '} />
                    </Link>
                    <Link href={''} className={styles.rightIcons + ' justify-content-center align-items-center'}>
                        <p className={styles.profile + " mb-0 d-flex justify-content-center align-items-center"}>H</p>
                    </Link>
                    <div onClick={(()=>{
                        let nav = document.getElementById('smallNav')
                        if (nav.classList.contains('opacity-0')){
                            nav.classList.remove('opacity-0')
                            nav.classList.add('opacity-1')
                        }
                        else{
                            nav.classList.remove('opacity-1')
                            nav.classList.add('opacity-0')
                        }
                    })} className={styles.menuBtn + ' mx-2'}>
                        <Icon icon="ri:menu-5-fill" className={styles.navIcon + ' d-flex'} />
                    </div>
                </div>
            </nav>

            <div id="smallNav" className={styles.phoneMenu + " p-4 px-4 opacity-0"}>
                <Link href={''} className={styles.phoneLink + " px-3 py-3 my-2 d-flex align-items-center"}>
                    <Icon icon="bx:home-alt-2" className={styles.phoneIcon + ' d-flex'} />
                    <p className={styles.phoneNavName + " mb-0 mx-2"}>Home</p>
                </Link>

                <Link href={''} className={styles.phoneLink + " px-3 py-3 my-2 d-flex align-items-center"}>
                    <Icon icon="heroicons-outline:fire" className={styles.phoneIcon + ' d-flex'} />
                    <p className={styles.phoneNavName + " mb-0 mx-2"}>Collection</p>
                </Link>

                <Link href={''} className={styles.phoneLink + " px-3 py-3 my-2 d-flex align-items-center"}>
                    <Icon icon="mingcute:t-shirt-line" className={styles.phoneIcon + ' d-flex'} />
                    <p className={styles.phoneNavName + " mb-0 mx-2"}>Offer</p>
                </Link>

                <Link href={''} className={styles.phoneLink + " px-3 py-3 my-2 d-flex align-items-center"}>
                    <Icon icon="ant-design:bell-outlined" className={styles.phoneIcon + ' d-flex'} />
                    <p className={styles.phoneNavName + " mb-0 mx-2"}>New Arrivals</p>
                </Link>

                <Link href={''} className={styles.phoneLink + " px-3 py-3 my-2 d-flex align-items-center"}>
                    <Icon icon="heroicons-outline:logout" className={styles.phoneIcon + ' d-flex'} />
                    <p className={styles.phoneNavName + " mb-0 mx-2"}>Sign out</p>
                </Link>
            </div>
        </>
    )
}

export default Nav