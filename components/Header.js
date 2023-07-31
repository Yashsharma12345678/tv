import Image from 'next/image'
import React from 'react'
import { CheckBadgeIcon , HomeIcon, BoltIcon , MagnifyingGlassIcon , UserIcon} from "@heroicons/react/24/outline" 
import {RectangleStackIcon} from "@heroicons/react/24/solid" 

import HeaderItem from './HeaderItem'
import Link from 'next/link'

function Header() {
  return (
    <>
    <header className=' flex flex-col sm:flex-row m-5 justify-between items-center h-auto '>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title="Home" Icon={HomeIcon}  />
            <HeaderItem title="Trending" Icon={BoltIcon}  />
            <HeaderItem title="Verified" Icon={CheckBadgeIcon}  />
            <HeaderItem title="Collection" Icon={RectangleStackIcon}  />

            <Link href="/searchpage"><HeaderItem title="Search" Icon={MagnifyingGlassIcon}  /></Link>
            <HeaderItem title="Account" Icon={UserIcon}  />
        </div>
          <div>
            <p className=' cursor-pointer flex flex-grow items-center  text-5xl px-4 tansition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>YashTV</p>
          </div>
    {/* <Image className='object-contain ' src="https://links.papareact.com/ua6" width={200} height={100}/> */}

    </header>
    </>
  )
}

export default Header