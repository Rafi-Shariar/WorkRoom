'use client';

import React from 'react';
import Image from 'next/image';
import teamworkImage from '../assets/teamworkImage.jpg';
import { MoveRight } from 'lucide-react';
const GetStarted = () => {
  return (
    <div className=" mt-16">
      <section className="relative flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px] bg-cover bg-center text-white rounded-2xl overflow-hidden">
        <Image
          src={teamworkImage}
          alt="Teamwork background"
          fill
          className="object-cover opacity-65"
          priority
          quality={50}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

        {/* Content */}
        <div className=" z-10 text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-6">
            Ready to supercharge your team's productivity?
          </h1>
          <button
            className="btn bg-blue-400 text-sky-900 px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            aria-label="Create a new workspace"
          >
            Create Workspaces <MoveRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;