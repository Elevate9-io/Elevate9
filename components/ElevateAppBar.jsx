'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ElevateAppBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '#section2', label: 'About Us' },
        { href: '#section3', label: 'Services' },
        { href: '#section4', label: 'Portfolio' },
        { href: '#section5', label: 'Contact Us' },
        { href: '#section6', label: 'FAQs' },
    ];

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
                            alt="Elevate9 Logo"
                            sx={{ height: 40 }}
                        />
                        {isMobile ? (
                            <>
                                <IconButton
                                    color="inherit"
                                    edge="end"
                                    onClick={() => setDrawerOpen(true)}
                                    sx={{ ml: 'auto' }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    anchor="left"
                                    open={drawerOpen}
                                    onClose={() => setDrawerOpen(false)}
                                >
                                    <Box sx={{ width: 220 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                                        <List>
                                            {navLinks.map(({ href, label }) => (
                                                <ListItem key={label} disablePadding>
                                                    <ListItemButton component="a" href={href}>
                                                        <ListItemText primary={label} />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Drawer>
                            </>
                        ) : (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {navLinks.map(({ href, label }) => (
                                    <Link key={label} href={href} passHref>
                                        <Typography
                                            component="a"
                                            sx={{
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                fontWeight: 500,
                                                px: 2,
                                                py: 1,
                                                '&:hover': { color: 'primary.main' },
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
