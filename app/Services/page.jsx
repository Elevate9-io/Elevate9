import React from 'react';
import Section1 from '../../components/ServicesPageSections/Section1';
import Section2 from '../../components/ServicesPageSections/Section2';
import Section3 from '../../components/ServicesPageSections/Section3';
import Section4 from '../../components/ServicesPageSections/Section4';

export default function BrandingPage() {
  return (
    <main className="relative w-full min-h-screen font-sans">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
