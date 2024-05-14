"use client"
import React from 'react'
import CategoryCard from './CategoryCard'

interface restaurant{
  name:string,
  description:string,
  adress:string,
  currency:string,
  restLogo:string | ArrayBuffer | null,
  restCover:string | ArrayBuffer | null,
  categories:string[]
}

const defaultCover:string="/restaurantImgs/coverRest.jpg";
const defaultLogo:string="/restaurantImgs/logoRest.jpg";


function MockUp({restInfo}:{restInfo:restaurant}) {
  return (
    <div className=''>
        <div className='w-full h-24 bg-red-900 relative'>
            <img src={restInfo.restCover?restInfo.restCover.toString():defaultCover} alt="Cover restaurant" className=' bg-slate-400 w-full h-full'/>
            <div className='overflow-hidden shadow-sm bg-slate-400 border-4 rounded-xl border-slate-100 w-16 h-16 absolute top-16 left-20'>
                <img src={restInfo.restLogo?restInfo.restLogo.toString():defaultLogo} alt="Cover restaurant" className='h-full w-full'/>
            </div>
        </div>
        <section className=' w-[90%] m-auto'>
            <div className="mt-10 mb-4">
              <div className="space-y-1 break-words">
                <p className="text-md font-medium text-center break-words">
                  {restInfo.name != "" ? restInfo.name : "Restaurant Name"}
                </p>
                <p className="text-[12px] text-center">
                  {restInfo.adress != "" ? restInfo.adress : "Restaurant Address"}
                </p>
                <div className='w-full break-normal'>
                  <p className=" text-[10px] text-center break-words">
                    {restInfo.description != "" ? restInfo.description : "Restaurant description"}
                  </p>
                </div>
              </div>
            </div>
        </section>
        <section className='w-[90%] mt-4 mb-12 mx-auto h-full'>
            <p className="text-[12px] my-2 font-medium leading-none">
            Categories</p>
            <div className='w-full flex flex-col gap-2'>
                {
                    restInfo.categories.map((category, index)=>{
                        return <CategoryCard key={index} category={category} id={index}/>
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default MockUp