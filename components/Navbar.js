import React from 'react'
import { FiSearch } from "react-icons/fi"
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";
import { Avatar } from '@mantine/core';
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () =>
{
    const today = new Date();

    const day = today.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    const currentDate = `${day} ${month} ${year}`;



    return (
        <div className="w-full relative">
            <div className="bg-white shadow-md h-24 absolute w-full sm:w-[calc(100%-80px)] sm:left-20 flex items-center">
                <div className="flex items-center pl-7">
                    <p className="text-xl">Dashboard</p>
                </div>
                {/* User Details */}
                <div className="ml-auto flex items-center pr-7 space-x-12">
                    <div className="bg-white border border-gray-300 rounded-full h-10 hidden lg:flex items-center space-x-3 w-80">
                        <FiSearch color='#d1d5db' className='ml-3' size={24} />
                        <input className='h-8 rounded-e-full outline-none ring-0 focus:ring-0 focus:outline-none w-full pr-8' placeholder='Search...' />
                    </div>
                    <div className='hidden lg:flex items-center'>
                        <IoCalendarOutline size={20} />
                        <p>{currentDate}</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <div className='border-gray-300 border border-solid rounded-full h-10 w-10 flex items-center justify-center'>
                            <HiOutlineBell size={24} />
                        </div>
                        <div className='flex items-center sm:hover:bg-gray-100 sm:rounded-md px-3 py-2 hover:cursor-pointer select-none'>
                            <Avatar src='' className='hover:cursor-pointer' />
                            <p className=''>Hi, Layomi</p>
                            <p><RiArrowDownSLine /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar