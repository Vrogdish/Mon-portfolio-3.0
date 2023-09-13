import Header from '@/modules/header/Header'
import './globals.scss'
import Footer from '@/modules/footer/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Header/>
        {children}
        <Footer/>
        <Analytics/>
        </body>
    </html>
  )
}
