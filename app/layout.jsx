import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'TaxPal - Accounting made simple for small businesses',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        <main className="flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
