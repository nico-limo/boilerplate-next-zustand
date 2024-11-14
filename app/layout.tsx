import type { Metadata } from 'next'

import localFont from 'next/font/local'
import './globals.css'

const customFont = localFont({
  src: [
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
    },
    {
      path: './fonts/Poppins-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '900',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'A Initial Setup with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${customFont.className} min-h-screen w-full p-2 antialiased`}>
        {children}
      </body>
    </html>
  )
}
