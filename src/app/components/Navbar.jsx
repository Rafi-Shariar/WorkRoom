import React from 'react';
import logo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return (
  
            <nav className='flex justify-between items-center mt-6'>
                <section className='flex items-center gap-3'>
                    <Image src={logo} alt='logo' width={52} height={52}></Image>
                    <Link href={'/'}><h1 className='text-3xl font-semibold'>WorK <span className='font-light -ml-1'>Room</span></h1></Link>
                </section>

                <section>
                    <Link href={'/login'}><button className='btn mr-3 rounded-full btn-info px-6'>Login</button></Link>
                    <button className='btn btn-outline btn-success rounded-full hidden md:inline'>Register</button>
                </section>
            </nav>
    
    );
};

export default Navbar;