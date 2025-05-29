import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

import Sidebar from "components/Sidebar";

import '../styles/globals.css';


export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white scroll-smooth">
                <AppRouterCacheProvider options={{ enabledCssLayer: true }}>
                    <Sidebar />
                    <div className="flex flex-col min-h-screen">
                        <AppBar position="static" color="default" elevation={1}>
                            <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ flexGrow: 1, fontWeight: 700 }}
                                    >
                                        Elevate9
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Link href="/" passHref legacyBehavior>
                                            <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>Home</Typography>
                                        </Link>
                                        <Link href="#section2" passHref legacyBehavior>
                                            <Typography component="a" sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 500, px: 2, py: 1, '&:hover': { color: 'primary.main' } }}>About Us</Typography>
                                        </Link>
                                        <Link href="/Services" passHref legacyBehavior>
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
                                </Toolbar>
                            </Container>
                        </AppBar>
                        <div className="flex flex-col w-full mx-auto grow">
                            <main className="grow">{children}</main>
                        </div>
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
