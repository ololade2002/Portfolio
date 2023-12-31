import './globals.css'
import type { Metadata } from 'next'
import {  Raleway } from 'next/font/google'
import  Navbar  from '@/components/Navbar/Navbar'

const raleway = Raleway({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})
 



export const metadata: Metadata = {
  title: 'Eleja Ololade',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
