import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

export const metadata: Metadata = {
  title: 'Dhruv Joshi',
  description: 'Portfolio of Dhruv Joshi - Software and Product Builder',
  keywords: ['software engineer', 'AI', 'developer', 'portfolio', 'waterloo', 'university of waterloo'],
  authors: [{ name: 'Dhruv Joshi' }],
  openGraph: {
    title: 'Dhruv Joshi',
    description: 'Portfolio of Dhruv Joshi - Software and Product Builder',
    type: 'website',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  )
}

