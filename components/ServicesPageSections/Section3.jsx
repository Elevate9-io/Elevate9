import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Section3() {
  return (
    <Box
      id="section3"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: "url('/images/space_shuttle_launch_realistic_bw.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        marginLeft: { xs: 12},
      }}
    >
      {/* Adds a background overlay for better text visibility */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.6)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          width: '100%',
          py: { xs: 8, md: 12 },
          marginLeft: { xs: 12 }
        }}
      >
        <Typography variant="h4" sx={{ mb: 1 }}>
          Branding
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 6 }}>
          Coaching & mentorship
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24 }}>
          <Box sx={{ width: '100%', maxWidth: 700 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              Shaping Your Brand with Strategy & Vision
            </Typography>
            <Box sx={{ textAlign: 'left' }}>
              <Typography sx={{ mb: 6 }}>
                Building a brand goes beyond aesthetics; it&apos;s about clarity, consistency, and purpose. At Elevate9, we understand this, which is why our Creative Mentorship & Art Direction program is designed to guide you in defining, strengthening, and aligning your brand identity with your vision and business goals.
              </Typography>
              <Box>
                <Typography>Through strategic planning, we help you:</Typography>
                <Typography>Develop an Action Plan &ndash; Define clear steps to implement and evolve your brand.</Typography>
                <Typography>Strengthen Brand Consistency &ndash; Ensure a unified presence across all touchpoints, from digital platforms to physical branding.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
