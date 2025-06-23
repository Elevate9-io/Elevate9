import React from 'react';

export default function Section2() {
  return (
    <section
      id="section2"
      className="relative w-full min-h-screen bg-[url('/images/modern_architecture_variant.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 px-8 md:px-[233px] py-24 text-white flex flex-col justify-center gap-24">
        <div className="text-left">
          <h3 className="uppercase text-gray-300 mb-6">Branding</h3>
          <h1 className="text-5xl font-bold mb-6">Branded content for social media</h1>
          <h4 className="text-xl mb-6">Stand out. Connect. Inspire.</h4>
          <p className="text-lg ml-auto">
            We create and manage high impact content tailored for Instagram, TikTok, and other platforms. Designed to captivate, engage, and grow your audience.
          </p>
        </div>
        <div className="flex flex-col self-center md:grid-cols-3 gap-10">
          <div className='flex flex-col md:flex-row md:items-start md:gap-6'>
            <h4 className="text-xl font-semibold mb-2 md:mb-0 md:w-1/3">Reels & Posts Creation</h4>
            <p className="text-gray-300 md:w-2/3">Strategic, visually stunning content that tells your brand&apos;s story.</p>
          </div>
          <div className='flex flex-col md:flex-row md:items-start md:gap-6'>
            <h4 className="text-xl font-semibold mb-2 md:mb-0 md:w-1/3">Social Media Management</h4>
            <p className="text-gray-300 md:w-2/3">Seamless execution to keep your brand active and relevant.</p>
          </div>
          <div className='flex flex-col md:flex-row md:items-start md:gap-6'>
            <h4 className="text-xl font-semibold mb-2 md:mb-0 md:w-1/3">Multi-Platform Adaptation</h4>
            <p className="text-gray-300 md:w-2/3">Optimized designs and formats for Instagram, TikTok, and beyond.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
