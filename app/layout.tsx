import type { Metadata } from 'next'
import { Geist, Geist_Mono, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import TanstackProvider from '@/components/TanstackProvider/TanstackProvider'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const robotoFont = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Page',
  description: 'Some content',
}

export default function RootLayout({
  children,
  preview,
}: Readonly<{
  children: React.ReactNode
  preview: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} ${robotoFont.variable}`}>
        <TanstackProvider>
          <AuthProvider>
            <Header />
            {children}

            {preview}
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}
