import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger, close } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {
    const [hidden, sethidden] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-conatainer'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>

            <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg font-bold text-slate-gray hover:text-black'>{item.label}</a>
                    </li>
                ))}
            </ul>

            <div className='hidden max-lg:block'>
                <img src={hidden ? close : hamburger} alt="hamburger" width={25} height={25} onClick={() => sethidden(prev => !prev)} />
            </div>

            { hidden && 
                <div className='flex bg-black justify-center
                text-center rounded-lg absolute top-20 right-0 mr-5 scale-up-center'>
                    <ul className='px-10 py-4'>
                    {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-white font-bold'>{item.label}</a>
                    </li>
                    ))}
                </ul>
                </div>
            }
        </nav>
    </header>
  )
}

export default Nav