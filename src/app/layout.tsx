import type { Metadata } from 'next'
import { Montserrat, Rubik } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: 'Betstats',
  description: 'Deixe os palpites de lado e comece a apostar com análises precisas. A Betstats traz a ciência para suas apostas, combinando análise detalhada e dados precisos para uma experiência de apostas mais inteligente e lucrativa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${rubik.variable}`}>{children}</body>
    </html>
  )
}
