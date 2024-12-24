import {
  Inter,
  Montserrat,
  Roboto_Mono,
  Source_Sans_3,
} from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Font configurations
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  weight: ['400'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'),
  title: {
    default: 'GarageFinder - Find Trusted Auto Repair Services',
    template: '%s | GarageFinder'
  },
  description: 'Find and connect with trusted auto repair services and mechanics in your area',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'GarageFinder - Find Trusted Auto Repair Services',
    description: 'Find and connect with trusted auto repair services and mechanics in your area',
    siteName: 'GarageFinder'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GarageFinder - Find Trusted Auto Repair Services',
    description: 'Find and connect with trusted auto repair services and mechanics in your area'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${montserrat.variable} ${inter.variable} ${robotoMono.variable} ${sourceSans.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600"
        >
          Skip to main content
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}