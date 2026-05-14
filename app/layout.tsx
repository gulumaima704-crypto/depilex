import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Depilex | Luxury Beauty & Bridal',
  description: 'Pakistan’s Most Trusted Beauty & Bridal Destination',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#FDF8F7] text-[#2A2522] selection:bg-[#D4AF37] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
