import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
                <link rel="icon" href="/Elevate9 Logo_g15.svg" sizes="any" />
            </head>
            <body className="antialiased scroll-smooth">
                <AppRouterCacheProvider options={{ enabledCssLayer: true }}>
                    <Sidebar />
                    <div className="flex flex-col min-h-screen bg-black">
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
