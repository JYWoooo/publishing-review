import React from 'react'

export default function Tailwind() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700 my-2.5">
        장비 기본설정
      </h1>

      <div className='flex flex-1 gap-4 py-12 px-14 border border-white rounded-md bg-white'>
        <div className='flex flex-row w-full gap-8 items-center'>
          <div>
            모델명
          </div>
          <input type="text" id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5" placeholder="모델명" required />
        </div>
        <div className='flex flex-row w-full gap-8 items-center'>
          <div>
            시리얼 번호
          </div>
          <input type="text" id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5" placeholder="시리얼 번호" required />
        </div>
        <button className='bg-blue-700 text-white rounded-lg w-60 py-2 px-8'>설정 적용</button>
      </div>

      <div className='flex flex-col gap-5 py-7 px-9 border border-white my-2.5 rounded-md bg-white' >
        <h3 className="text-xl font-bold p-2.5">
          시간설정
        </h3>
        <div className='border border-gray-200 p-5 flex w-full'>
          <div className='flex flex-row w-full gap-8 items-center py-2'>
            <div>
              날짜 및 시간
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5" placeholder="날짜 및 시간" required />
          </div>
          <div className='flex flex-row w-full gap-8 items-center'>
            <div>
              표준 시간대
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5" placeholder="표준 시간대" required />
          </div>
          <button className='bg-blue-700 text-white rounded-md w-60 px-8 my-2'>설정 적용</button>
        </div>
      </div>

      

      <div className='flex flex-col gap-5 py-7 px-9 border border-white rounded-md bg-white' >
        <h3 className="text-xl font-bold p-2.5 items-start">
          네트워크 설정
        </h3>
        <div className='bg-sky-100 p-5 flex w-full items-center rounded-md'>
          <div className='text-xl w-2/12 px-6'>
            LAN1
          </div>
          <div className='flex flex-row w-4/12 gap-8 items-center py-2'>
            <div className='w-'>
              IP 주소
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="날짜 및 시간" required />
          </div>
          <div className='flex flex-row w-3/12 gap-8 items-center'>
            <div>
              NETMASK
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="표준 시간대" required />
          </div>
          <div className='flex flex-row w-3/12 gap-8 items-center py-2'>
            <div>
              GATEWAY
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="날짜 및 시간" required />
          </div>
        </div>

        <div className='bg-sky-100 p-5 flex w-full items-center rounded-md'>
          <div className='text-xl w-2/12 px-6'>
            LAN2
          </div>
          <div className='flex flex-row w-4/12 gap-8 items-center py-2'>
            <div className='w-'>
              IP 주소
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="날짜 및 시간" required />
          </div>
          <div className='flex flex-row w-3/12 gap-8 items-center'>
            <div>
              NETMASK
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="표준 시간대" required />
          </div>
          <div className='flex flex-row w-3/12 gap-8 items-center py-2'>
            <div>
              GATEWAY
            </div>
            <input type="text" id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md
              focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5" placeholder="날짜 및 시간" required />
          </div>
        </div>
        <div className='flex flex-col items-center' >
          <button className='bg-blue-700 text-white rounded-lg w-60 px-8 py-2.5 my-2 '>네트워크 설정 적용</button>
          </div>
      </div>
    </div>
  )
}