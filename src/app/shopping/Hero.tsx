
import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className='w-full  bg-[url("/banner.png")] bg-cover bg-no-repeat bg-center py-10 sm:py-14 md:py-18 lg:py-24 xl:py-28'
>
      <div className='container mx-auto px-3'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Shopping Cart
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/page" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/404Error" className='text-[#FF9F0D]'>
              Shopping cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero