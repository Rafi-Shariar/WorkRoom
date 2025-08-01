import React from 'react';
import Navbar from '../components/Navbar';

const Dashboardlayout = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto p-2'>
            <Navbar/>
            <section className='min-h-screen mt-16'>
                {children}
            </section>
            
        </div>
    );
};

export default Dashboardlayout;