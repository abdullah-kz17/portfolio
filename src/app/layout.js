// ✅ Move all imports to the top
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// SEO Metadata
export const metadata = {
  title: 'Abdullah Khan | MERN Stack Developer',
  description: 'Portfolio of Abdullah Khan, a MERN Stack Developer specializing in React.js, Node.js, and more.',
  keywords: 'Abdullah Khan, MERN Stack, React Developer, Frontend Developer, Web Developer, Portfolio',
};

// Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} scroll-smooth`}>
      <body className="bg-white dark:bg-dark-100 text-dark-300 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
