import React from 'react';

export default function Section4() {
  return (
    <section
      id="section4"
      className="relative w-full min-h-screen bg-[url('/images/upward_staircase_original.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 px-8 md:px-[233px] py-24 text-white">
        <h3 className="text-gray-300 uppercase mb-4">Branding</h3>
        <h1 className="text-5xl font-bold mb-12">Key benefits of marketing</h1>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-2">Creates Recognition and Memorability</h4>
            <p className="text-gray-300">
              A strong brand strategy and design ensure that your business is easily recognizable. Consistency in visual elements and messaging makes your brand memorable and builds familiarity among your audience.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Build trust and credibility</h4>
            <p className="text-gray-300">
              A professional, cohesive brand design signals reliability and quality. Customers are more likely to trust a brand that appears well-established and consistent in its presentation.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Differentiates you from competitors</h4>
            <p className="text-gray-300">
              In a crowded marketplace, a unique and compelling brand identity helps you stand out. It communicates your value proposition and highlights why customers should choose you over others.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <button className="section1-button">Let&apos;s create together</button>
        </div>
      </div>
    </section>
  );
}
