import './globals.css'
import { Iceberg } from 'next/font/google'

export const metadata = {
  title: 'MB Portfolio',
  description: 'Generated by create next app',
}

const iceberg=Iceberg({
  subsets:['latin'],
  variable:'--font-iceberg',
  display:'swap',
  weight:"400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${iceberg.variable}`}>
      <body>{children}</body>
    </html>
  )
}
