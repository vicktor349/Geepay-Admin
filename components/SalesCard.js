import { Sparkline } from '@mantine/charts'
import React from 'react'

const SalesCard = ({ icon, title, total, bgColor, text, trendIcon, color }) =>
{
    return (
        <div className='w-full p-4 xl:p-2 2xl:p-4 shadow-md rounded-md'>
            <div className='flex items-center justify-between'>
                <p className='h-12 w-12 border border-solid rounded-full border-gray-400 flex items-center justify-center'>{icon}</p>
                <Sparkline
                    className='w-12 h-12'
                    data={[10, 20, 40, 20, 40, 10, 50]}
                    curveType="linear"
                    color={color}
                    fillOpacity={0.6}
                    strokeWidth={2}
                />
            </div>
            <div className='space-y-2 mt-2'>
                <p className='text-[#555] text-lg'>{title}</p>
                <p className='text-xl'>{total}</p>
                <div className={`flex items-center `}>
                    <div className={`${bgColor} ${text} rounded-full px-2 space-x-1 flex items-center`}>
                        <p>{trendIcon}</p>
                        <p className='text-sm'>23.5%</p>
                    </div>
                    <p className='text-sm text-gray-400 ml-2'>vs. previous month</p>
                </div>
            </div>
        </div>
    )
}

export default SalesCard