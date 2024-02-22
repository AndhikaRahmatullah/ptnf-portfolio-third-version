import type { Metadata } from 'next';
//
import './globals.css';

// ---------------------------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Andhika Rahmatullah',
  description: 'Portfolio third version.',
};

// ---------------------------------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
