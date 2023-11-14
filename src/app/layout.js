import { Poppins } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'
import Header from '@/components/Header'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"], })

export const metadata = {
  title: 'Help Desk HSM',
  description: 'Sistema de chamados do Hospital São Miguel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <AuthProvider>
        <body className={poppins.className}><Header />{children}</body>
      </AuthProvider>
      
    </html>
  )
}
