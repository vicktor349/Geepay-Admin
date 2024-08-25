import platformData from '@/data/PlatformData'
import { Progress } from '@mantine/core'
import React from 'react'

const TopPlatform = () =>
{
    return (
        <div className='rounded-xl shadow-xl px-4 border border-border py-5 mt-8 w-[32rem]'>
            <div className='flex items-center justify-between mb-5'>
                <p className='text-lg font-semibold'>Top Platform</p>
                <p className='text-[#34CAA5] text-lg font-semibold hover:cursor-pointer'>See All</p>
            </div>
            {platformData.map((data) => (
                <div key={data.id} className='space-y-3 py-2'>
                    <p className='font-bold'>{data.name}</p>
                    <Progress value={data.value} size="lg" radius="xl" color='teal' />
                    <section className='flex items-center justify-between'>
                        <p className='text-gray-500'>$ {data.price}</p>
                        <p className='text-gray-500'>+{data.percentage}%</p>
                    </section>
                </div>
            ))}
        </div>
    )
}

export default TopPlatform