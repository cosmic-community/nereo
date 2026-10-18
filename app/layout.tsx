import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nereo — AI Video Generator for Creators and Marketers',
  description:
    'Describe a video and the Nereo Agent writes the shots, generates them, and edits them together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎬</text></svg>"
        />
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6ad516c9e55e8ee5880f6f55"></script>
      </head>
      <body className="bg-[#07070c] font-sans text-white antialiased">{children}</body>
    </html>
  )
}