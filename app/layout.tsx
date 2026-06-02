import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const monaSans = Inter({
  subsets: ['latin'],
  variable: '--font-mona-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Keller Galvanik – Präzise Oberflächenlösungen',
    template: '%s | Keller Galvanik',
  },
  description:
    'Galvanische Beschichtungen und Oberflächenveredelung für industrielle Bauteile. Technische Beratung und schnelle Offerte.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" data-theme="light" className={monaSans.variable}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
