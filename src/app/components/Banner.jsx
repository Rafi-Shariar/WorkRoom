"use client"
import React from 'react';
import animation from '../assets/lotties/BannerLottie.json';
import Lottie from 'react-lottie';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation

}
const Banner = () => {
    return (
        <div>
            <section className='flex items-center'>

                <div className='space-y-3 w-1/2'>

                    <h1 className='text-5xl font-semibold'>Organize Work. Empower Teams. Deliver Results.</h1>
                    <h3 className=''>Welcome to WorKRoom — your all-in-one platform to manage workplaces, assign tasks, track progress, and collaborate efficiently. Whether you're leading a team or part of one, WorKRoom keeps everyone aligned and productive.</h3>
    

                    {/* <h1 className='text-2xl'>Create Workspaces ·  Manage Teams ·  Assign Tasks ·  Share Updates</h1> */}
                    <Link href={'as'}>
                      <button className='btn btn-soft btn-info rounded-full px-12 hover:text-white mt-6'>Get Started <MoveRight /></button>
                       
                    </Link>

                </div>

                <div className='w-1/2'>
                    <Lottie options={defaultOptions} height={500} width={500}></Lottie>

                </div>
            </section>
        </div>
    );
};

export default Banner;