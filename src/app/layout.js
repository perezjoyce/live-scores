import './globals.css'
import { Barlow } from 'next/font/google'

const barlow = Barlow({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Live Score',
  description: 'A live-score website that integrations with a third party provider.',
  icons: 'icon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
      </body>
    </html>
  )
}
