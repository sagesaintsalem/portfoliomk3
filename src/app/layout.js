import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rita Toussaint',
  description: 'Rita Toussaint\'s personal site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <link rel="icon" href="/newchilli.svg" sizes="any" />
      </body>
    </html>
  )
}
