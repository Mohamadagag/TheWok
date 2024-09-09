'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/TheWokNavbarLogo.svg'
import Logo2 from '../public/TheWokNavbarLogo2.svg'
import Phone from '../public/Phone.svg'
import Link from 'next/link'
import { MdMenu, MdClose } from "react-icons/md";
import Facebook from '../public/social media/facebook.svg'
import Tiktok from '../public/social media/tiktok.svg'
import Instagram from '../public/social media/instagram.svg'
import Youtube from '../public/social media/youtube.svg'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isTalkToUsOpen, setIsTalkToUsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    {/* Desktop Navigation*/}
    <nav className="hidden h-[105px] xl:flex items-center justify-between px-10 fixed top-0 left-0 right-0 z-[999999] bg-[#000000]">
       <div>
        <Link href="/">
          <Image src={Logo2} alt='The Wok Logo'/>
        </Link>
       </div>
       <div>
        <Link href="/about" className={pathname === "/about" ? 'lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' : `lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]`}>About Us</Link>

        <div className={pathname === '/careers/join-us' || pathname ===  '/careers/our-family' ? 'inline lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' : 'inline lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'} onMouseLeave={() => setIsCareersOpen(false)}>
            <div className="relative inline">

            {isCareersOpen ? (
               <button
               onClick={() => setIsCareersOpen(!isCareersOpen)}
               className="px-4 py-2 text-white rounded"
             >
                <div className='flex items-baseline'>Careers<SlArrowUp className='ml-2 text-xs' /></div>
             </button>
                  
            ) : <button
            onClick={() => setIsCareersOpen(!isCareersOpen)}
            className="px-4 py-2 text-white rounded"
          >
             <div className='flex items-baseline'>Careers<SlArrowDown className='ml-2 text-xs' /></div>
          </button> }
            

              {isCareersOpen && (
                <div
                  className="bg-[#171717] z-10 absolute left-0 p-1 mt-2 w-44 rounded-md shadow-lg"
                  onMouseLeave={() => setIsCareersOpen(false)}
                >
                  <div className={`py-1 rounded-md bg-[#171717] shadow-xs`}>
                    <Link href="/careers/join-us" className="rounded text-[#484848] block px-4  py-2 text-sm hover:bg-[#212020] hover:text-white hover:border border-[#970000]"  onClick={() => setIsCareersOpen(false)} >Join Us</Link>
                    <Link href="/careers/our-family" className="rounded text-[#484848] block px-4  py-2 text-sm hover:bg-[#212020] hover:text-white  hover:border border-[#970000]"  onClick={() => setIsCareersOpen(false)} >Our Family</Link>
                  </div>
                </div>
              )}
            </div>
        </div>

        <Link href="/franchise" className={pathname === '/franchise' ? 'lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' :'lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'}>Franchise</Link>
        <Link href="/locations" className={pathname === '/locations' ? 'lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' :'lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'}>Locations</Link>


        <div className={pathname === "/talktous/message-us" || pathname === "/talktous/feedback" ? 'inline lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl border-b-4 border-[#970000] pb-[35px]' : 'inline lg:text-white lg:mr-10 lg:tracking-[0.25px] lg:text-xl lg:hover:border-b-4 lg:hover:border-[#970000] lg:hover:pb-[35px]'} onMouseLeave={() => setIsTalkToUsOpen(false)}>
            <div className="relative inline">

            {isTalkToUsOpen ? (
               <button
               onClick={() => setIsTalkToUsOpen(!isTalkToUsOpen)}
               className="px-4 py-2 text-white rounded"
             >
                <div className='flex items-baseline'>Talk To Us<SlArrowUp className='ml-2 text-xs' /></div>
             </button>
                  
            ) : <button
            onClick={() => setIsTalkToUsOpen(!isTalkToUsOpen)}
            className="px-4 py-2 text-white rounded"
          >
             <div className='flex items-baseline'>Talk To Us<SlArrowDown className='ml-2 text-xs' /></div>
          </button> }
            

              {isTalkToUsOpen && (
                <div
                  className="bg-[#171717] z-10 absolute left-0 p-1 mt-2 w-44 rounded-md shadow-lg"
                  onMouseLeave={() => setIsTalkToUsOpen(false)}
                >
                  <div className="py-1 rounded-md bg-[#171717] shadow-xs">
                    <Link href="/talktous/message-us" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-white  hover:border border-[#970000]"  onClick={() => setIsTalkToUsOpen(false)} >Message Us</Link>
                    <Link href="/talktous/feedback" className="rounded text-[#484848] block px-4 py-2 text-sm hover:bg-[#212020] hover:text-white  hover:border border-[#970000]"  onClick={() => setIsTalkToUsOpen(false)} >Feedback</Link>
                  </div>
                </div>
              )}
            </div>
        </div>
        <a href="https://heylink.me/thewok?fbclid=PAAaYSf8A7ru06PtyFji2jlUjyRlGCMm6042dVv2pJMevReWJ-uf3j0Eae6ko" target='_blank' className='lg:text-[#B61414] lg:tracking-[0.25px] lg:text-xl font-semibold'>Order Now</a>
       </div>
       <div className='lg:flex lg:items-center lg:text-white'>
        <div className='lg:flex lg:justify-center lg:items-center lg:mr-5'>
        <Image src={Phone} width={19} height={19} alt='Phone Icon'/>
        </div>
        <div className='lg:tracking-[0.25px] lg:text-xl font-bold'>70 310 350</div>
       </div>
    </nav>


    {/* Mobile SideNav */}
    <div className='xl:hidden h-[80px] fixed top-0 left-0 right-0 z-[999999] bg-[#000000]'>
      <nav className='flex items-center justify-between p-6 py-5 bg-black  lg:px-10 xl:hidden'>
        <div className='w-24'>
          <Link href="/">
            <Image src={Logo2} alt='The Wok Logo'/>
          </Link>
        </div>
        <div onClick={toggleNav}>
          {isOpen ? <MdClose className='w-8 h-8 text-white ' /> : <MdMenu className='w-8 h-8 text-red-900 ' />}
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50" onClick={toggleNav}>
          <div className="fixed top-0 left-0 z-50 flex flex-col justify-between w-64 h-full p-6 overflow-auto bg-red-900 animate-slide-in">
              <div className='flex flex-col'>
                <Link href="/about" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>About Us</Link>
                <Link href="/careers/join-us" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Join Us</Link>
                <Link href="/careers/our-family" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Our Family</Link>
                <Link href="/franchise" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Franchise</Link>
                <Link href="/locations" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Locations</Link>
                <Link href="/talktous/message-us" className='mb-5 text-white mr-10 tracking-[0.25px] text-xl'>Message Us</Link>
                <Link href="/talktous/feedback" className='text-white mr-10 tracking-[0.25px] text-xl'>Feedback</Link>
                <a href="https://heylink.me/thewok?fbclid=PAAaYSf8A7ru06PtyFji2jlUjyRlGCMm6042dVv2pJMevReWJ-uf3j0Eae6ko" target='_blank' className='mt-5 text-white mr-10 tracking-[0.25px] text-xl'>Order Now</a>
              </div>
              <div>
                <div className="absolute flex items-center bottom-12 left-6">
                  <a href="https://www.facebook.com/thewoklb" target='_blank' className="inline-block w-10 mr-2 2xl:mb-4">
                    <Image src={Facebook} alt="Facebook" />
                    </a>
                  <a href="https://www.tiktok.com/@thewokarabia" target='_blank' className="inline-block w-10 mr-2 2xl:mb-4">
                    <Image src={Tiktok} alt="Tiktok" />
                    </a>
                  <a href="https://www.instagram.com/thewokarabia" target='_blank' className="inline-block w-10 mr-2 2xl:mb-4">
                    <Image src={Instagram} alt="Instagram" />
                    </a>
                  <a href="http://www.youtube.com/@thewokarabia" target='_blank' className="inline-block w-10">
                    <Image src={Youtube} alt="Youtube" />
                    </a>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
    
    </>
  )
}

export default Navbar