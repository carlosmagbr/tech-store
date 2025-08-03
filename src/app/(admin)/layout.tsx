import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { AuthProvider } from '@/providers/auth'
import Footer from '@/components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Magno Tech Store',
  description: 'Projeto desenvolvido por Carlos Magno para estudo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex h-full flex-col'>
          <AuthProvider>
              <div className='flex-1'>
                {children}
              </div>
              <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
