import orderData from '@/data/OrderData'
import React from 'react'

const OrderTable = () =>
{
  return (
    <div className='h-fit ssm:w-[21.5rem] sssm:w-[23rem] ssms:w-[28rem] sm:w-[33rem] md:w-[40rem] lg:w-[55rem] xl:w-[56rem] rounded-xl shadow-xl px-4 border border-border py-5 mt-8'>
      <div className='flex items-center justify-between mb-5'>
        <p className='text-lg font-semibold'>Last Order</p>
        <p className='text-[#34CAA5] text-lg font-semibold hover:cursor-pointer'>See All</p>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="py-2 border-b text-left text-gray-500 font-normal">Name</th>
                <th className="py-2 px-8 border-b text-left text-gray-500 font-normal">Date</th>
                <th className="py-2 px-8 border-b text-left text-gray-500 font-normal">Amount</th>
                <th className="py-2 px-8 border-b text-left text-gray-500 font-normal">Status</th>
                <th className="py-2 px-8 border-b text-left text-gray-500 font-normal">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((data) => (
                <tr key={data.id}>
                  <td className="py-4 border-b text-left">{data.name}</td>
                  <td className="py-4 px-8 border-b text-left text-gray-500 font-light">{data.date}</td>
                  <td className="py-4 px-8 border-b text-left">$ {data.Amount}</td>
                  <td className={`py-4 px-8 border-b text-left ${data.status == "Paid" ? "text-green-500" : "text-red-500"} font-light`}>{data.status}</td>
                  <td className="py-4 px-8 border-b text-left">Invoice</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrderTable