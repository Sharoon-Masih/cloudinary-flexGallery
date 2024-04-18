"use client"
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SearchBar = () => {
    const [inputVal,SetinputVal]=useState("");
    const pathName=usePathname();
    console.log(pathName);
    let updatedPath:string | undefined;
    updatedPath = `${pathName}?q=${inputVal}` === `/gallery/tag?q=${inputVal}` ? `tag?q=${inputVal}` : `gallery/tag?q=${inputVal}`;
    console.log(updatedPath); 
    useEffect(()=>{
        console.log(inputVal);
    },[inputVal])
  return (
    <div className='flex items-center justify-center gap-3'>
        <Input type='text' placeholder='search by tag' value={inputVal} onChange={(event)=>{SetinputVal(event.target.value)}} className='w-[90%] lg:w-[300px] xl:w-[500px]' />
        <Link href={`${updatedPath}`}><Button variant={"default"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 xl:w-6 xl:h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg></Button></Link></div>
  )
}

export default SearchBar