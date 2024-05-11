import React from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'
interface restaurant{
    name:string,
    description:string,
    adress:string,
    currency:string,
    restLogo:string,
    restCover:string,
    categories:string[]
  }

interface RestaurantInfoProps {
    restInfo: restaurant;
    handleChange: (value: string, type: string) => void;
}

function RestaurantCover({restInfo,handleChange}:RestaurantInfoProps) {
  return (
    <div className='grid '>
     <h1 className=" font-bold text-3xl">Restaurant Info</h1>
     <p className=" text-sm opacity-65">Please provide the name, description, Address  and Currency of your Restaurant</p>
    <div className='grid gap-y-2'>
     <div className="mt-2">
        <Label htmlFor="restLogo">Restaurant Logo</Label>
        <Input id="restLogo" type="file" placeholder="Logo" 
               onChange={(e)=>handleChange(e.target.value, e.target.id)}/>
      </div>

      <div>
        <Label htmlFor="cover">Restaurant Cover</Label>
        <Input id="restCover" type="file" placeholder="Cover"
               onChange={(e)=>handleChange(e.target.value, e.target.id)}/>
      </div>
    </div>
        
    </div>
  )
}

export default RestaurantCover