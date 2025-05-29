import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import Sidebar from "components/Sidebar";
import ElevateAppBar from "components/ElevateAppBar";

import '../styles/globals.css';


export const metadata = {
    title: {
        template: '%s | Elevate9',
        default: 'Elevate9 - Elevate Your Brand',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/Elevate9-Logo-2.png" sizes="any" />
            </head>
            <body className="antialiased scroll-smooth">
                <AppRouterCacheProvider options={{ enabledCssLayer: true }}>
                    <Sidebar />
                    <div className="flex flex-col min-h-screen">
                        <ElevateAppBar />
                        <div className="flex flex-col w-full mx-auto grow">
                            <main className="grow">{children}</main>
                        </div>
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
