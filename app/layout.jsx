import { Typography } from "@mui/material";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import ElevateAppBar from "components/ElevateAppBar";

import '../styles/globals.css';



export const metadata = {
    metadataBase: 'https://elevate9.io',
  title: {
    template: '%s | Elevate9',
    default: 'Elevate9 - Elevate Your Brand',
  },
  description: 'Elevate9 offers branding, design, and marketing solutions to elevate your business.',
  openGraph: {
    title: 'Elevate9 - Elevate Your Brand',
    description: 'Elevate9 offers branding, design, and marketing solutions to elevate your business.',
    url: 'https://elevate9.io',
    siteName: 'Elevate9',
    images: [
      {
        url: '/images/Elevate9-Logo-2.png',
        width: 1200,
        height: 630,
        alt: 'Elevate9 branding preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate9 - Elevate Your Brand',
    description: 'Elevate9 offers branding, design, and marketing solutions to elevate your business.',
    images: ['/images/Elevate9-Logo-2.png'],
  },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/Elevate9 Logo_g15.svg" sizes="any" />
            </head>
            <body className="antialiased scroll-smooth">
                        
                <Typography variant='h1'>
                    Website currently down due to {
                        <a style={{ fontSize: 58 }} href="https://www.linkedin.com/in/austyn-beach-236055161">
                            Austyn Beach
                        </a>
                    } owing his employees money. Please contact him at (214) 298-0472
                </Typography>
            </body>
        </html>
    );
}
