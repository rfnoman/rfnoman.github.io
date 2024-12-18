import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Noman - Senior Software Engineer',
  description: 'Senior Full Stack Developer with 6+ years of experience in React, Next.js, Vue, Django, and AWS.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Next.js', 'Vue', 'Django', 'AWS'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className={`${inter.variable} min-h-screen bg-gray-900`}>
          {children}
        </div>
      </body>
    </html>
  );
}
