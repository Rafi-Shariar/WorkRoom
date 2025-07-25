
'use client';

import React from 'react';
import picture from '../assets/whyChooseUs.png';
import Image from 'next/image';
import { Pin } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    'Multi-Workspace Support',
    'Hierarchical Team Management',
    'Task Assignment & Progress Tracking',
    '100% Free to Use',
  ];

  return (
    <div className="mt-16 bg-gradient-to-br from-sky-50 to-sky-100 p-6 sm:p-10 rounded-3xl container mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-8">
        Why Choose Us
      </h1>

      <section className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 h-16  text-sky-500 p-3 rounded-lg px-6 hover:bg-sky-300 transition-colors duration-200"
                aria-label={`Feature: ${feature}`}
              >
                <Pin size={20} className="text-sky-700" />
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                  {feature}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={picture}
            alt="Why Choose Us illustration"
            width={400}
            height={400}
            className="object-contain max-w-full h-auto rounded-2xl"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, 400px"
            priority={false}
            placeholder="blur"
          />
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;