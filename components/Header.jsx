import React from 'react'


import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className='text-2xl font-semibold'>Vinicius <span className='text-accent'>.</span></h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Button>Hire Me</Button>
                    <Link href='/contact'></Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    mobile nav
                    <Button>Hire Me</Button>
                    <Link href='/contact'></Link>
                </div>
            </div>
        </header>
    )
}

export default Header