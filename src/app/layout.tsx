import '@/shared/configs/css/globals.scss';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { StoreProvider } from './_providers/reduxStore';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    // display: 'swap',
    // style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: 'Cities',
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <meta name="google" content="notranslate" />
            <body className={poppins.className}>
                <main className="flex justify-center items-center h-full w-full">
                    <StoreProvider>
                        {children}
                    </StoreProvider>
                </main>
            </body>
        </html>
    );
}
