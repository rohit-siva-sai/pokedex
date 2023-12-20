'use client'

import MainModel from '@/components/model/MainModel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <picture>
      <img src="./pokeball-icon.png" className='animate-spin' alt="" />
     </picture>
     <p className='font-semibold text-4xl text-center text-gray-700 mt-8'>POKE DEX</p>
    </main>
  )
}
