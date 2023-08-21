import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HeaderContent from './HeaderContent';
import FooterContent from './FooterContent';
import BannerGithub from './BannerGithub';
import { Flowbite } from 'flowbite-react';

interface LayoutProps {
    title?: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title = 'Default Title', children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
          <Flowbite>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            {/* Header */}
            <header className="p-4 shadow-md w-full">
                <div className="m-4">
                    <HeaderContent />
                </div>
            </header>

            {/* Main Content */}
            <main className="mb-auto container mx-auto p-4">
                {children}
            </main>

            {/* Footer */}
            <footer className="p-4">
                <div className="m-4 text-center w-full">
                    <FooterContent />
                </div>
            </footer>
          </Flowbite>
        </div>
    );
};

export default Layout;
