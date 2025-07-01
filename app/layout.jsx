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
                <AppRouterCacheProvider options={{ enabledCssLayer: true }}>
                    <div className="flex flex-col min-h-screen bg-black">
                        <ElevateAppBar />
                        <div className="flex flex-col w-full mx-auto grow">
                            <main className="grow">{children}</main>
                        </div>
                        <footer className="bg-black text-white text-sm py-6 px-4">
                            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                <div className="text-center md:text-left">
                                    <a href="/privacy" className="hover:underline">Privacy Policy</a> &middot;
                                    <span> Built by Elevate9</span>
                                </div>
                                <div className="flex gap-1">
                                    <a href="https://www.linkedin.com/company/elevatenine" target="_blank" aria-label="LinkedIn" className="hover:text-blue-400 mr-4">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            {/* LinkedIn SVG Path */}
                                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
                                        </svg>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61569202981801#" target="_blank" aria-label="Facebook" className="hover:text-gray-400">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            {/* Facebook SVG Path */}
                                            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                                        </svg>
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
