import { Box, Typography, Container } from '@mui/material';


// Vertically center-align items in row layout, top-align in column layout
const TextLine = (title, text) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'center', md: 'center' },
      gap: 4,
      mb: 6
    }}
  >
    <Typography variant="h5" sx={{ fontWeight: 600, minWidth: { md: 220 } }}>
      {title}
    </Typography>
    <Typography variant="body2">
      {text}
    </Typography>
  </Box>
);


export default function Section2() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        marginLeft: { xs: 12 },
        backgroundColor: '#000',
        color: '#fff',
        backgroundImage: 'url("/images/modern_architecture_variant.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          marginLeft: { xs: 10 }
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ mb: 1 }}
          >
            Branding
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 6 }}
          >
            Branded content for social media
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            Stand out. Connect. Inspire.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6 }}
          >
            We create and manage high impact content tailored for Instagram, TikTok, and other platforms. Designed to captivate, engage, and grow your audience.
          </Typography>
        </Box>

        <Box sx={{ marginLeft: { xs: 48 }}}>
          {TextLine('Reels & Posts Creation', `Strategic, visually stunning content that tells your brand’s story.`)}
          
          {TextLine('Social Media Management', 'Seamless execution to keep your brand active and relevant.')}

          {TextLine('Multi-Platform Adaptation', 'Optimized designs and formats for Instagram, TikTok, and beyond.')}

        </Box>
      </Container>
    </Box>
  );
}
