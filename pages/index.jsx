import React, { useEffect } from 'react'

export default function Home() {

  return (
    <div className='flex flex-col'>
      <h1 className="text-2xl font-bold text-gray-700 my-2.5">
        대시보드
      </h1>

      <div className='h-auto gap-x-2 pb-5 xl:grid xl:grid-cols-2'>
        <div className="mb-2 grid w-full grid-flow-row grid-rows-4 gap-2 xl:mb-0">
          <div className="row-span-2 h-full rounded-md bg-white p-2 shadow-md">
            <iframe src="http://127.0.0.1:3000/d-solo/ewQy7zf4z/new-dashboard?orgId=1&from=1679266549008&to=1679288149008&theme=light&panelId=2"
              width='100%' height="420" frameborder="0"></iframe>
          </div>
          <div className="h-full rounded-md gap-x-2 grid-cols-4 bg-white p-2 shadow-md">
            <iframe src="http://localhost:3000/d-solo/ewQy7zf4z/new-dashboard?orgId=1&from=1680054145876&to=1680054205876&refresh=5s&panelId=6"
              width="100%" height="100%" frameborder="0" />
          </div>
          <div className="h-full rounded-md bg-white p-2 shadow-md">
            asd
          </div>
        </div>
        <div className="mb-2 grid w-full grid-flow-row grid-rows-5 gap-2 xl:mb-0">
          <div className="row-span-2 h-full rounded-md bg-white p-2 shadow-md">
            <iframe src="http://localhost:3000/d-solo/ewQy7zf4z/new-dashboard?orgId=1&from=1679303997419&to=1679304011411&theme=light&panelId=4"
              width='100%' height="100%" frameborder="0"></iframe>
          </div>
          <div className="row-span-2 h-full rounded-md bg-white p-2 shadow-md">
            <iframe src="http://192.168.123.146:3000/d-solo/xfpJB9FGz/1-node-exporter-for-prometheus-dashboard-en-20201010?orgId=1&refresh=15s&from=1679516264827&to=1679559464827&theme=light&panelId=13"
              width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div className="h-full rounded-md bg-white p-2 shadow-md">
            asd
          </div>
        </div>
      </div>
    </div>
  )
}