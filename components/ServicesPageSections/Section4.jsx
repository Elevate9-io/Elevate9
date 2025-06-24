import React from 'react';
import { Box, Typography, Button } from '@mui/material';


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


export default function Section4() {
  return (
    <Box
      id="section4"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: "url('/images/upward_staircase_original.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        marginLeft: {xs: 12 }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.2)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          py: { xs: 8, md: 12 },
          marginLeft: { xs: 12 }
        }}
      >
        <Typography variant="h5" sx={{ color: 'grey.300', textTransform: 'uppercase', mb: 2 }}>
          Branding
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 12 }}>
          Key benefits of marketing
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, marginLeft: { xs: 36 }, marginRight: { xs: 84 }, maxWidth: { xs: '100%' } }}>
          {TextLine(
            'Creates Recognition and Memorability',
            'A strong brand strategy and design ensure that your business is easily recognizable. Consistency in visual elements and messaging makes your brand memorable and builds familiarity among your audience.'
          )}
          {TextLine(
            'Build trust and credibility',
            'A professional, cohesive brand design signals reliability and quality. Customers are more likely to trust a brand that appears well-established and consistent in its presentation.'
          )}
          {TextLine(
            'Differentiates you from competitors',
            'In a crowded marketplace, a unique and compelling brand identity helps you stand out. It communicates your value proposition and highlights why customers should choose you over others.'
          )}
        </Box>
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large" sx={{ fontWeight: 600 }}>
            Let&apos;s create together
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
