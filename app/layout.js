'use client'
import MainModel from '../components/model/MainModel'

import './globals.css'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <MainModel/>
        {children}</body>
    </html>
  )
}
