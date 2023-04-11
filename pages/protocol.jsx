import React from 'react'

export default function protocol() {
  const protocol = [
    {
      name: 'AM1009W-K',
      incoding: `BINARY`,
      endControl: `{Header:{position:1, bytes:1, endian:Big Endian, multiplier:1, correction:1 }}`,
      commend: ``,
      date: `System(2022-10-01)`
    },
    {
      name: 'AM1009W-K',
      incoding: `BINARY`,
      endControl: `{Header:{position:1, bytes:1, endian:Big Endian, multiplier:1, correction:1 }}`,
      commend: ``,
      date: `System(2022-10-02)`
    },
    {
      name: 'AM1009W-K',
      incoding: `BINARY`,
      endControl: `{Header:{position:1, bytes:1, endian:Big Endian, multiplier:1, correction:1 }}`,
      commend: ``,
      date: `System(2022-10-03)`
    }
  ]

  return (
    <div >
      <h1 className="text-2xl font-bold text-gray-700 my-2.5">
        프로토콜
      </h1>
      <div className='flex flex-col border border-white rounded-md bg-white w-[100%] h-[92vh] gap-2.5 p-2.5 my-2.5'>
        <div className='flex items-center justify-between'>
          <div className='px-2.5'>프로토콜 목록</div>
          <div className='flex gap-2.5'>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#3E47C9] text-white bg-[#3E47C9]'>추가</button>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#3E47C9] text-[#3E47C9]'>수정</button>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#AA2222] text-[#AA2222]'>삭제</button>
          </div>
        </div>
        <div className='w-[100%] h-[100%] rounded-md border border-gray-300'>
          <table className='w-full'>
            <thead className='bg-[#D8E7FF] '>
              <tr>
                <th className='px-4 py-2 text-left w-[9%]'>이름</th>
                <th className='px-4 py-2 text-left w-[7%] border-x border-gray-300'>인코딩</th>
                <th className='px-4 py-2 text-left border-x border-gray-300'>End Control</th>
                <th className='px-4 py-2 text-left w-[29%] border-x border-gray-300'>설명</th>
                <th className='px-4 py-2 text-left w-[12%]'>수정자(날짜)</th>
              </tr>
            </thead>
            <tbody>
              {protocol?.map((protocol, k) => (
                <tr key={k} className='border-y border-gray-300'>
                  <td className='px-4 py-1.5 text-left'>{protocol.name}</td>
                  <td className='px-4 py-1.5 text-left border-x border-gray-300'>{protocol.incoding}</td>
                  <td className='px-4 py-1.5 text-left border-x border-gray-300'>{protocol.endControl}</td>
                  <td className='px-4 py-1.5 text-left border-x border-gray-300'>{protocol.commend}</td>
                  <td className='px-4 py-1.5 text-left'>{protocol.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
