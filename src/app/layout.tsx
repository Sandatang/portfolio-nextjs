import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - John Mark',
  description: 'Website portfolio by John Mark Abad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-500 bg-white`}>
        <NavBar/>
        <main className='w-full min-h-screen'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
