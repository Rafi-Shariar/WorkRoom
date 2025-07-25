import React from 'react';
import logo from '../assets/logo.png';
import Image from 'next/image';
const Navbar = () => {
    return (
  
            <nav className='flex justify-between items-center mt-6'>
                <section className='flex items-center gap-3'>
                    <Image src={logo} alt='logo' width={52} height={52}></Image>
                    <h1 className='text-3xl font-semibold'>WorK <span className='font-light -ml-1'>Room</span></h1>
                </section>

                <section>
                    <button className='btn mr-3 rounded-full btn-info px-6'>Login</button>
                    <button className='btn btn-soft btn-info rounded-full hidden md:in'>Register</button>
                </section>
            </nav>
    
    );
};

export default Navbar;