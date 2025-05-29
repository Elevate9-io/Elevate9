import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
                    <div className="flex flex-col min-h-screen">
                        <div className="flex flex-col w-full mx-auto grow">
                            <main className="grow">{children}</main>
                        </div>
                    </div>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
