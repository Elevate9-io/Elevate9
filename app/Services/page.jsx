'use client';

import { Button } from '@mui/material';

export default function BrandingServicesSection() {
  return (
    <section className="bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        <div className="space-y-10">
          <h2 className="text-sm font-light uppercase">Branding</h2>
          <h1 className="text-3xl md:text-5xl font-bold">Graphic and Strategic design</h1>
          <p className="text-gray-300 max-w-3xl">
            Beyond the logo, we build your brand... (trimmed for brevity)
          </p>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
            {[
              {
                title: 'Brand identity',
                text: 'We’ll bring your vision to life through...'
              },
              {
                title: 'Editorial services',
                text: 'We complement your brand identity with...'
              },
              {
                title: 'Packaging & Merchandising',
                text: 'Your brand, designed to be seen & remembered...'
              },
              {
                title: 'Branding kit',
                text: 'All the essential brand info in one place...'
              }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-sm font-light uppercase">Branding</h2>
          <h1 className="text-3xl md:text-5xl font-bold">Branded content for social media</h1>
          <p className="text-gray-300 max-w-3xl">
            We create and manage high impact content tailored for Instagram, TikTok...
          </p>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
            {[
              {
                title: 'Reels & Posts Creation',
                text: 'Strategic, visually stunning content that tells your brand’s story.'
              },
              {
                title: 'Social Media Management',
                text: 'Seamless execution to keep your brand active and relevant.'
              },
              {
                title: 'Multi-Platform Adaptation',
                text: 'Optimized designs and formats for all platforms.'
              }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-sm font-light uppercase">Branding</h2>
          <h1 className="text-3xl md:text-5xl font-bold">Coaching & mentorship</h1>
          <h3 className="text-xl font-semibold">
            Shaping Your Brand with Strategy & Vision
          </h3>
          <p className="text-gray-300 max-w-3xl">
            Building a brand goes beyond aesthetics... (trimmed for brevity)
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Develop an Action Plan – Define clear steps...</li>
            <li>Consistency – Ensure a unified presence...</li>
          </ul>
        </div>

        <div className="space-y-10">
          <h2 className="text-sm font-light uppercase">Branding</h2>
          <h1 className="text-3xl md:text-5xl font-bold">Key benefits of marketing</h1>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
            {[
              {
                title: 'Creates Recognition and Memorability',
                text: 'Strong brand design ensures your business is easily recognizable...'
              },
              {
                title: 'Build trust and credibility',
                text: 'Customers are more likely to trust a brand that appears...'
              },
              {
                title: 'Differentiates You from Competitors',
                text: 'Helps you stand out in a crowded marketplace...'
              }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-10">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: '30px', textTransform: 'none', px: 4 }}
          >
            Lets create together
          </Button>
        </div>
      </div>
    </section>
  );
}
