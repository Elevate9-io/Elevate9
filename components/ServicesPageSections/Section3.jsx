import React from 'react';

export default function Section3() {
  return (
    <section
      id="section3"
      className="relative w-full min-h-screen bg-[url('https://elevate9.io/wp-content/uploads/2025/03/pexels-reynaldoyodia-31036787-1-scaled.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 px-8 md:px-[233px] py-24 text-white">
        <h3 className="text-gray-300 uppercase mb-4">Branding</h3>
        <h1 className="text-5xl font-bold mb-12">Coaching & mentorship</h1>
        <h4 className="text-xl font-semibold mb-6">Shaping Your Brand with Strategy & Vision</h4>
        <p className="mb-4">
          Building a brand goes beyond aesthetics; it&apos;s about clarity, consistency, and purpose. At Elevate9, we understand this, which is why our Creative Mentorship & Art Direction program is designed to guide you in defining, strengthening, and aligning your brand identity with your vision and business goals.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Develop an Action Plan &ndash; Define clear steps to implement and evolve your brand.</li>
          <li>Strengthen Brand Consistency &ndash; Ensure a unified presence across all touchpoints, from digital platforms to physical branding.</li>
        </ul>
      </div>
    </section>
  );
}
