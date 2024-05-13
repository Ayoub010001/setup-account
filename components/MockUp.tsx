"use client"
import React from 'react'
import CategoryCard from './CategoryCard'
interface restaurant{
    name:string,
    description:string,
    adress:string,
    currency:string,
    restLogo:string,
    restCover:string,
    categories:string[]
  } 
function MockUp({restInfo}:{restInfo:restaurant}) {
  return (
    <div className=''>
        <div className='w-full h-24 bg-red-900 relative'>
            <img src="/restaurantImgs/coverRest.jpg" alt="Cover restaurant" className=' bg-slate-400 w-full h-full'/>
            <div className='overflow-hidden shadow-sm bg-slate-400 border-4 rounded-xl border-slate-100 w-16 h-16 absolute top-16 left-20'>
                <img src="/restaurantImgs/logoRest.jpg" alt="Cover restaurant" className='h-full w-full'/>
            </div>
        </div>
        <section className='w-[90%] m-auto'>
            <div className="mt-10 mb-4">
              <div className="space-y-1">
                <p className="text-md font-medium text-center leading-none">
                  {restInfo.name != "" ? restInfo.name : "Restaurant Name"}
                </p>
                <p className="text-[12px] text-center text-muted-foreground">
                  {restInfo.adress != "" ? restInfo.adress : "Restaurant Address"}
                </p>
                <p className=" text-[8px] text-center text-muted-foreground">
                  {restInfo.description != "" ? restInfo.description : "Restaurant description"}
                </p>
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