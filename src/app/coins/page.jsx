"use client"
import React from 'react'
import CoinsTable from '@/components/Coins_Table'

function page() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 px-6 py-20'>

      <CoinsTable/>


    </div>
  )
}

export default page