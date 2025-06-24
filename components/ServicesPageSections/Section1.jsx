import React from 'react';
import { Box, Typography } from '@mui/material';


const TextLine = (title, text) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'center', md: 'flex-start' },
      gap: 4,
      mb: 6
    }}
  >
    <Typography
      variant="h5"
      sx={{
        fontWeight: 600,
        minWidth: { md: 220 },
        maxWidth: { md: 220 },
        flexShrink: 0,
        textAlign: { xs: 'center', md: 'left' },
        mb: { xs: 1, md: 0 }
      }}
    >
      {title}
    </Typography>
    <Typography variant="body2" sx={{ flex: 1 }}>
      {text}
    </Typography>
  </Box>
);


export default function Section1() {
  return (
    <Box
      id="section1"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: "url('/images/futuristic_cityscape_bw.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.5)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '112rem',
          px: { xs: 2, md: 12 },
        }}
      >
        <Box sx={{ mb: { xs: 8, md: 28 } }}>
          <Typography variant="h6" sx={{ fontWeight: 300, textTransform: 'uppercase', letterSpacing: 2, mb: 2 }}>
            Branding
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: { xs: 6, md: 12 }, lineHeight: 1.1 }}>
            Graphic and Strategic design
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, marginLeft: { xs: 24 } }}>
          {TextLine('Brand identity', `Beyond the logo, we build your brand. We create a unique visual identity, from concept to execution.
              Together, we'll bring your vision to life through a logo that embodies its essence, a color
              palette that resonates with your audience, and all the visual elements needed to make your brand
              stand out. Our mission is to ensure your brand is not only seen, but understood, leaving a lasting
              impression.`)
          }
          {TextLine('Editorial services', `We complement your brand identity with high-quality editorial design. From corporate stationery to
              printed materials, we ensure every piece reinforces your brand's personality, maintaining
              consistency and professionalism in every detail.`)
          }
          {TextLine('Packaging & Merchandising', `Your Brand, Designed to Be Seen & Remembered. We craft strategic, story-driven packaging and
              merchandise that elevate your brand beyond the digital space, turning every product into a powerful
              branding tool.`)
          }
          {TextLine('Branding kit', `In this kit, all the essential information is organized in one place, providing you with all the
              tools necessary to succeed and strengthen your brand's presence. A guide with everything you
              need to maintain a consistent and powerful image across all platforms.`)
          }
        </Box>
      </Box>
    </Box>
  );
}
