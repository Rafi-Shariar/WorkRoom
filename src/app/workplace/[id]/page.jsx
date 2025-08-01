import Navbar from '@/app/components/Navbar';
import React from 'react';

const WorkPlaceDetailsPage = async ({params}) => {
    
    const p = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/workplace/${p.id}`)
    const data = await res.json();

    return (
        <div className='max-w-7xl mx-auto min-h-screen'>
            <Navbar/>
            
            <section className='mt-16'>
                <h1>{data?.workplaceName}</h1>
            </section>
        </div>
    );
};

export default WorkPlaceDetailsPage;