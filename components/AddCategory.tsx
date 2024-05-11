'use client'
import React, { useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


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

function AddCategory({restInfo,handleChange}:RestaurantInfoProps) {
 const categoryInput = useRef<HTMLInputElement>(null);
 return (
    <div className='grid '>
     <h1 className=" font-bold text-3xl">Category Creation</h1>
     <p className=" text-sm opacity-65">Please provide Name of the category</p>
     
     <div className="mt-2">
        <div>
            <Label htmlFor="category">Category Creation</Label>
            <Input id="categories" type="text" placeholder="Add Category" 
                ref={categoryInput}/>
            <div className="flex justify-end py-2">
                <Button onClick={
                    ()=>{
                        if (categoryInput.current) {
                            handleChange(categoryInput.current.value, categoryInput.current.id)
                        }
                    }
                }>Add</Button>
            </div>
        </div>
        <div>
            <Table>
                <TableCaption>A list of your Categories.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Categories</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {restInfo.categories.map((Category,index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{Category}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
     </div>
    </div>
  )
}

export default AddCategory