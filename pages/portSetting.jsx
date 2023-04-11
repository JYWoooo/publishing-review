import React from 'react'

export default function portSetting() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700 my-2.5">
        포트설정
      </h1>
      <div className='border border-white rounded-md bg-white w-[100%] h-[100%] grid gap-2.5 p-2.5 my-2.5'>
        <div className='flex items-center justify-between'>
          <div className='px-2.5'>상위 포트</div>
          <div className='flex gap-2.5'>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#3E47C9] text-[#3E47C9]'>전체 선택</button>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#AA2222] text-[#AA2222]'>포트 리셋</button>
          </div>
        </div>
        <div className='w-[100%] h-[100%] flex flex-row flex-wrap gap-2.5'>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
        </div>
      </div>

      <div className='border border-white rounded-md bg-white w-[100%] h-[100%] grid gap-2.5 p-2.5 my-2.5 overflow-auto'>
        <div className='flex items-center justify-between'>
          <div className='px-2.5'>하위 포트</div>
          <div className='flex gap-2.5'>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#3E47C9] text-[#3E47C9]'>전체 선택</button>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#AA2222] text-[#AA2222]'>포트 리셋</button>
          </div>
        </div>
        <div className='w-[100%] h-[100%] flex flex-row flex-wrap gap-2.5'>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
          <div className='w-[180px] h-[360px] border-2 border-[#319500] p-2.5'>asdasd</div>
        </div>
      </div>
    </div>
  )
}
