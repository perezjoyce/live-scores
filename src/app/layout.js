import { Suspense } from 'react';
import { Barlow } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'
import Loader from '@/app/components/loader'
import './globals.css'

const barlow = Barlow({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Live Scores',
  description: 'A live-score website that integrations with a third party provider.',
  icons: 'icon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Suspense fallback={<Loader />}>
          <ReduxProvider>{children}</ReduxProvider>
        </Suspense>
      </body>
    </html>
  )
}
