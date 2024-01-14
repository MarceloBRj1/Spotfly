import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Spotfly',
  description: 'Spotify Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='text-zinc-50 bg-zinc-900'>
        {children}
      </body>
    </html>
  )
}
