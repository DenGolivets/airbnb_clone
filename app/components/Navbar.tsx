import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImmg from '@/public/logo1.png'
import UserNav from './UserNav'
import SearchComponent from './SearchComponent'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-ffull border-b shadow-lg'>
      <div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5'>
        <Link href='/'>
          <Image 
            src={LogoImmg}
            alt=''
            width={70}
            height={70}
            className='w-12 lg:w-20'
          />
        </Link>
        <SearchComponent />
        <UserNav />
      </div>
    </div>
  )
}

export default Navbar