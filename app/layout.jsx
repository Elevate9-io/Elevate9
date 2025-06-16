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
                        <footer className="bg-gray-900 text-white text-sm py-6 px-4">
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                <div className="text-center md:text-left">
                                    <a href="/privacy" className="hover:underline">Privacy Policy</a> ·
                                    <span> Built by Elevate9</span>
                                </div>
                                <div className="flex space-x-4">
                                    <a href="https://twitter.com/yourhandle" target="_blank" aria-label="Twitter" className="hover:text-blue-400">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M..."/></svg>
                                    </a>
                                    <a href="https://github.com/yourhandle" target="_blank" aria-label="GitHub" className="hover:text-gray-400">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M..."/></svg>
                                    </a>
                                </div>
                            </div>
                        </footer>

                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
