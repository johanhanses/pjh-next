import { Header } from '@/components/Header'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pjh',
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-neutral-900">
      <body
        className={`${openSans.className} mx-auto flex min-h-screen max-w-[872px] flex-col gap-9 px-10 py-8 text-sm text-neutral-400 md:gap-20 md:py-16`}
      >
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
