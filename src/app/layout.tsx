import type { Metadata } from 'next'
import '../styles/index.css'

export const metadata: Metadata = {
  title: 'FOODI Restaurant',
  description: 'Savor the artistry where every dish is a culinary masterpiece',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
