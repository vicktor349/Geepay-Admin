import React from 'react'
import { TbLayoutGrid } from "react-icons/tb";
import { IoIosTrendingUp } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";
import { PiPackage } from "react-icons/pi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BsExclamationOctagon, BsArrowRightCircle } from "react-icons/bs"
import { RiSettings4Line } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";

const SideNavbar = () =>
{
    return (
        <div className="bg-white border-r border-r-gray-200 h-dvh w-20 lg:w-[80px] xl:w-[80px] flex-shrink-0 hidden sm:flex justify-center flex-col">
            <div className='flex flex-col items-center space-y-10'>
                <div className='mt-6 w-10 h-10'>
                    <svg viewBox="0 0 40 40" focusable="false">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95429 0 0 8.95431 0 20C0 31.0457 8.95429 40 20 40ZM26.2393 9.31684C26.543 8.23805 25.4961 7.60013 24.54 8.2813L11.1931 17.7896C10.1562 18.5283 10.3193 20 11.4381 20H14.9527V19.9728H21.8025L16.2212 21.9421L13.7607 30.6832C13.457 31.762 14.5038 32.3999 15.46 31.7187L28.8069 22.2105C29.8438 21.4718 29.6806 20 28.5619 20H23.2321L26.2393 9.31684Z" fill="#34CAA5">
                        </path>
                    </svg>
                </div>
                <TbLayoutGrid size={28} color='#9a9a9f' className='hover:cursor-pointer' />
                <IoIosTrendingUp color="#9a9a9f" size={28} className='hover:cursor-pointer' />
                <LuUsers2 color="#9a9a9f" size={28} className='hover:cursor-pointer' />
                <PiPackage color="#9a9a9f" size={28} className='hover:cursor-pointer' />
                <RiDiscountPercentLine color="#9a9a9f" size={28} className='hover:cursor-pointer' />
                <BsExclamationOctagon color="#9a9a9f" size={28} className='hover:cursor-pointer' />
            </div>
            <div className='flex flex-col justify-end items-center flex-1 space-y-10'>
                <BsArrowRightCircle color="#9a9a9f" size={28} className='hover:cursor-pointer' />
                <RiSettings4Line color="#9a9a9f" size={28} className='hover:cursor-pointer' />
                <BiLogOutCircle color="#9a9a9f" size={28} className='hover:cursor-pointer' />
            </div>
        </div>
    )
}

export default SideNavbar
