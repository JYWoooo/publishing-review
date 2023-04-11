import React, { useState } from 'react'

export default function UserSetting() {
  const userInfo = [
    { id: 'user1', name: `user1`, company: `asd`, rank: `a`, phone: `010-1231-2312`, authority: `관리자`, date: `manager(2022-12-12)` },
    { id: 'user2', name: `user2`, company: `asd`, rank: `a`, phone: `010-1231-2312`, authority: `사용자`, date: `manager(2022-12-12)` },
    { id: 'user3', name: `user3`, company: `asd`, rank: `a`, phone: `010-1231-2312`, authority: `사용자`, date: `manager(2022-12-12)` },
    { id: 'user4', name: `user4`, company: `asd`, rank: `a`, phone: `010-1231-2312`, authority: `관리자`, date: `manager(2022-12-12)` },
    { id: 'user5', name: `user5`, company: `asd`, rank: `a`, phone: `010-1231-2312`, authority: `사용자`, date: `manager(2022-12-12)` },
  ];
  const [showModal, setShowModal] = useState(false);


  return (
    <div >
      <h1 className="text-2xl font-bold text-gray-700 my-2.5">
        계정 관리
      </h1>
      <div className='flex flex-col border border-white rounded-md bg-white w-[100%] h-[92vh] gap-2.5 p-2.5 my-2.5'>
        <div className='flex items-center justify-between'>
          <div className='px-2.5'>계정 목록</div>
          <div className='flex gap-2.5'>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#3E47C9] text-white bg-[#3E47C9]'
              onClick={() => setShowModal(true)}>추가</button>
            <button className='w-[112px] h-[40px] border rounded-sm border-[#AA2222] text-[#AA2222]'>삭제</button>
          </div>
        </div>
        <div className='w-[100%] h-[100%] rounded-md border border-gray-300'>
          <table className='w-full'>
            <thead className='bg-[#D8E7FF] '>
              <tr>
                <th className='px-4 py-2 text-left'>사용자 ID</th>
                <th className='px-4 py-2 text-left'>사용자명</th>
                <th className='px-4 py-2 text-left'>소속</th>
                <th className='px-4 py-2 text-left'>직급</th>
                <th className='px-4 py-2 text-left'>연락처</th>
                <th className='px-4 py-2 text-left'>권한</th>
                <th className='px-4 py-2 text-left w-[12%]'>수정자(날짜)</th>
              </tr>
            </thead>
            <tbody>
              {userInfo?.map((info, k) => (
                <tr key={k} className='border-y border-gray-300'>
                  <td className='px-4 py-1.5 text-left'>{info.id}</td>
                  <td className='px-4 py-1.5 text-left'>{info.name}</td>
                  <td className='px-4 py-1.5 text-left'>{info.company}</td>
                  <td className='px-4 py-1.5 text-left'>{info.rank}</td>
                  <td className='px-4 py-1.5 text-left'>{info.phone}</td>
                  <td className='px-4 py-1.5 text-left'>{info.authority}</td>
                  <td className='px-4 py-1.5 text-left'>{info.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-20">
          <div className="flex flex-col gap-8 p-10 m-auto bg-white max-w-sm rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold text-gray-700 my-2.5">
              사용자 추가
            </h1>
            <div className='flex place-content-between items-center'>
              <span>사용자 ID</span>
              <input className='border rounded-md selection:w-[200px] h-[36px] px-2.5'/>
            </div>
            <div className='flex place-content-between items-center'>
              <span>사용자명</span>
              <input className='border rounded-md selection:w-[200px] h-[36px] px-2.5'/>
            </div>
            <div className='flex place-content-between items-center'>
              <span>소속</span>
              <input className='border rounded-md selection:w-[200px] h-[36px] px-2.5'/>
            </div>
            <div className='flex place-content-between items-center'>
              <span>직급</span>
              <input className='border rounded-md selection:w-[200px] h-[36px] px-2.5'/>
            </div>
            <div className='flex place-content-between items-center'>
              <span>연락처</span>
              <input className='border rounded-md selection:w-[200px] h-[36px] px-2.5'/>
            </div>
            <div className='flex place-content-between items-center'>
              <span>권한</span>
              <input className='border rounded-md selection:w-[200px] h-[36px] px-2.5'/>
            </div>
            <div className='w-full flex flex-row-reverse gap-2.5 pt-5'>
              <button className='w-[112px] h-[40px] border rounded-sm border-[#3E47C9] text-white bg-[#3E47C9]'
                onClick={() => setShowModal(false)}>추가</button>
              <button className='w-[112px] h-[40px] border rounded-sm border-[#AA2222] text-[#AA2222]'
                onClick={() => setShowModal(false)}>취소</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
