import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


import "./header.css"


export function Header() {
  return (
    <header className='header'>
        <h1 className='headerLogo'>PIKUSERU</h1>
        <nav className='headerNav'>
            <Link href="/">Home</Link>
            <Link href="/Shop">Shop</Link>
            <Link href="/About">About</Link>
            <div className='headerNavSearch'>
                <Image src="./Search.svg" height={20} width={20} alt="Shoping Cart"/>
                <input type="text" placeholder='Search'/>
            </div>
        </nav>
        <div className='headerBag'>
            <Image src="./Bag.svg" height={25} width={25} alt="Shoping Cart"/>
            <p>0</p>
        </div>
        <Link href="/" className='headerLogin'>Login</Link>
        <div className='headerBurger'></div>
    </header>
  )
}
