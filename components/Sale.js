import React from 'react'
import SalesCard from './SalesCard'
import { BsBoxSeam } from 'react-icons/bs'
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io'
import { HiShoppingCart } from 'react-icons/hi2'
import { PiCoinsLight } from 'react-icons/pi'
import { RiRefund2Line } from 'react-icons/ri'

const Sale = () =>
{
    return (
        <div className='grid ssm:gap-y-6 sm:gap-y-0 sm:grid-cols-2 sm:gap-6 md:gap-6 lg:gap-4 xl:gap-4 2xl:gap-6 ssm:mt-10 xl:mt-0'>
            <SalesCard icon={<BsBoxSeam color="#34CAA5" size={20} />} title="Total Order" total="350" bgColor="bg-[#34caa51f]" text="text-[#34CAA5]" trendIcon={<IoIosTrendingUp />} color="#34CAA5" />
            <SalesCard icon={<HiShoppingCart color='#34CAA5' size={20} />} title="Average Sales" total="1567" bgColor="bg-[#ED544E]/10" text="text-[#ED544E]" trendIcon={<IoIosTrendingDown />} color="#ED544E" />
            <SalesCard icon={<RiRefund2Line color='#34CAA5' size={20} />} title="Total Refund" total="270" bgColor="bg-[#34caa51f]" text="text-[#34CAA5]" trendIcon={<IoIosTrendingUp />} color="#ED544E" />
            <SalesCard icon={<PiCoinsLight color='#34CAA5' size={20} />} title="Total Income" total="$350.000" bgColor="bg-[#ED544E]/10" text="text-[#ED544E]" trendIcon={<IoIosTrendingDown />} color="#34CAA5" />
        </div>
    )
}

export default Sale