import React from 'react';

export default function Section1() {
  return (
    <section
      id="section1"
      className="relative w-full min-h-screen bg-[url('https://elevate9.io/wp-content/uploads/2025/03/elevate9.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 h-full px-8 md:px-[233px] flex items-center justify-center text-white">
        <div className="w-full max-w-7xl">
          <div className="mb-28">
            <h3 className="text-xl font-light uppercase tracking-wide mb-8">Branding</h3>
            <h1 className="text-5xl font-bold leading-tight mb-24">Graphic and Strategic design</h1>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <h4 className="text-xl font-semibold mb-2 md:mb-0 md:w-1/3">Brand identity</h4>
              <p className="text-gray-300 md:w-2/3">
                Beyond the logo, we build your brand. We create a unique visual identity, from concept to execution.
                Together, we&apos;ll bring your vision to life through a logo that embodies its essence, a color
                palette that resonates with your audience, and all the visual elements needed to make your brand
                stand out. Our mission is to ensure your brand is not only seen, but understood, leaving a lasting
                impression.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <h4 className="text-xl font-semibold mb-2 md:mb-0 md:w-1/3">Editorial services</h4>
              <p className="text-gray-300 md:w-2/3">
                We complement your brand identity with high-quality editorial design. From corporate stationery to
                printed materials, we ensure every piece reinforces your brand&apos;s personality, maintaining
                consistency and professionalism in every detail.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <h4 className="text-xl font-semibold mb-2 md:mb-0 md:w-1/3">Packaging & Merchandising</h4>
              <p className="text-gray-300 md:w-2/3">
                Your Brand, Designed to Be Seen & Remembered. We craft strategic, story-driven packaging and
                merchandise that elevate your brand beyond the digital space, turning every product into a powerful
                branding tool.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <h4 className="text-xl font-semibold mb-2 md:mb-0 md:w-1/3">Branding kit</h4>
              <p className="text-gray-300 md:w-2/3">
                In this kit, all the essential information is organized in one place, providing you with all the
                tools necessary to succeed and strengthen your brand&apos;s presence. A guide with everything you
                need to maintain a consistent and powerful image across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
