import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

export default function ElevateAppBar() {
    return (
        <AppBar position="sticky" elevation={1} sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            gap: 4,
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/Elevate9-Logo-2.png"
                            alt="Logo"
                            sx={{ height: 40 }}
                        />
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link href="/" passHref legacyBehavior>
                                <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>Home</Typography>
                            </Link>
                            <Link href="#section2" passHref legacyBehavior>
                                <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>About Us</Typography>
                            </Link>
                            <Link href="#section3" passHref legacyBehavior>
                                <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>Services</Typography>
                            </Link>
                            <Link href="#section4" passHref legacyBehavior>
                                <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>Portfolio</Typography>
                            </Link>
                            <Link href="#section5" passHref legacyBehavior>
                                <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>Contact Us</Typography>
                            </Link>
                            <Link href="#section6" passHref legacyBehavior>
                                <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>FAQs</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
