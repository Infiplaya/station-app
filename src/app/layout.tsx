import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BackgroundImage } from './components/background-image/background-image';
import { Navbar } from './components/header/navbar';
import HydrationZustand from './components/hydration-zustand';
import { toast, Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Station App',
  description: 'xddd',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HydrationZustand>
          <Navbar />
          {children}
          <BackgroundImage />
        </HydrationZustand>
      </body>
    </html>
  );
}
