'use client';

import { Box, Button, Typography } from '@mui/material';

export default function BrandingServicesSection() {
  return (
    <Box className="bg-black text-white font-sans">
      <Box className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* Branding Section */}
        <Box className="space-y-10">
          <Typography variant="subtitle2" className="text-sm font-light uppercase">Branding</Typography>
          <Typography variant="h4" className="text-3xl md:text-5xl font-bold">Graphic and Strategic design</Typography>
          <Box className="md:grid-cols-2 gap-10 max-w-4xl flex-row">
            {[
              {
                title: 'Brand identity',
                text: 'Beyond the logo, we build your brand. We create a unique visual identity, from concept to execution. Together, we’ll bring your vision to life through a logo that embodies its essence, a color palette that resonates with your audience, and all the visual elements needed to make your brand stand out. Our mission is to ensure your brand is not only seen, but understood, leaving a lasting impression.'
              },
              {
                title: 'Editorial services',
                text: 'We complement your brand identity with high-quality editorial design. From corporate stationery to printed materials, we ensure every piece reinforces your brand’s personality, maintaining consistency and professionalism in every detail.'
              },
              {
                title: 'Packaging & Merchandising',
                text: 'Your Brand, Designed to Be Seen & Remembered. We craft strategic, story-driven packaging and merchandise that elevate your brand beyond the digital space, turning every product into a powerful branding tool.'
              },
              {
                title: 'Branding kit',
                text: 'In this kit, all the essential information is organized in one place, providing you with all the tools necessary to succeed and strengthen your brand’s presence. A guide with everything you need to maintain a consistent and powerful image across all platforms.'
              }
            ].map((item, idx) => (
              <Box key={idx}>
                <Typography variant="h6" className="text-xl font-semibold">{item.title}</Typography>
                <Typography variant="body2" className="text-gray-400 text-sm">{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Social Media Branding Section */}
        <Box className="space-y-10">
          <Typography variant="subtitle2" className="text-sm font-light uppercase">Branding</Typography>
          <Typography variant="h4" className="text-3xl md:text-5xl font-bold">Branded content for social media</Typography>
          <Box className="flex-row md:grid-cols-2 gap-10 max-w-4xl">
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
              <Box key={idx}>
                <Typography variant="h6" className="text-xl font-semibold">{item.title}</Typography>
                <Typography variant="body2" className="text-gray-400 text-sm">{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Coaching & Mentorship Section */}
        <Box className="space-y-10">
          <Typography variant="subtitle2" className="text-sm font-light uppercase">Branding</Typography>
          <Typography variant="h4" className="text-3xl md:text-5xl font-bold">Coaching & mentorship</Typography>
          <Typography variant="h6" className="text-xl font-semibold">
            Shaping Your Brand with Strategy & Vision
          </Typography>
          <Typography variant="body2" className="text-gray-300 max-w-3xl">
            Building a brand goes beyond aesthetics; it’s about clarity, consistency, and purpose. At Elevate9, we understand this, which is why our Creative Mentorship & Art Direction program is designed to guide you in defining, strengthening, and aligning your brand identity with your vision and business goals.
          </Typography>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Develop an Action Plan – Define clear steps to implement and evolve your brand.</li>
            <li>Strengthen Brand Consistency – Ensure a unified presence across all touchpoints, from digital platforms to physical branding.</li>
          </ul>
        </Box>

        {/* Key Benefits Section */}
        <Box className="space-y-10">
          <Typography variant="subtitle2" className="text-sm font-light uppercase">Branding</Typography>
          <Typography variant="h4" className="text-3xl md:text-5xl font-bold">Key benefits of marketing</Typography>
          <Box className="flex-row md:grid-cols-2 gap-10 max-w-4xl">
            {[
              {
                title: 'Creates Recognition and Memorability',
                text: 'A strong brand strategy and design ensure that your business is easily recognizable. Consistency in visual elements and messaging makes your brand memorable and builds familiarity among your audience.'
              },
              {
                title: 'Build trust and credibility',
                text: 'A professional, cohesive brand design signals reliability and quality. Customers are more likely to trust a brand that appears well-established and consistent in its presentation.'
              },
              {
                title: 'Differentiates You from Competitors',
                text: 'In a crowded marketplace, a unique and compelling brand identity helps you stand out. It communicates your value proposition and highlights why customers should choose you over others.'
              }
            ].map((item, idx) => (
              <Box key={idx}>
                <Typography variant="h6" className="text-xl font-semibold">{item.title}</Typography>
                <Typography variant="body2" className="text-gray-400 text-sm">{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>


        {/* Call to Action Button */}
        <Box className="text-center pt-10">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: '30px', textTransform: 'none', px: 4 }}
          >
            Lets create together
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
