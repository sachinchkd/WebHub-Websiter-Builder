import React from 'react'


const Cards = () => {
  return (
    <div class='flex ml-72 mt-10 space-x-20 '>
        <div class ='flex-1 w-auto'>
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h4 class="font-normal text-gray-700">Revenue</h4>
                <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 ">RS.0            </h5>
                <p class="font-normal text-gray-500">Last from Date</p>
            </a>
        </div>
        <div class="flex-1 w-auto">
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <h4 class="font-normal text-gray-700 ">Orders</h4>
                <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 ">0              </h5>
                <p class="font-normal text-gray-500">Last from Date</p>
            </a>
        </div>
        

    </div>
  )
}

export default Cards
