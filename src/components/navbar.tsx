"use client"
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from './sidebar';

const Navbar = () => {
    return (
        <header className='bg-slate-950 sticky top-0 flex justify-center items-center h-16 border-b z-30 '>
            <nav className='w-[90%] relative m-auto flex justify-between items-center z-20'>
                <div className='text-[20px]  font-bold text-gray-100 z-20 relative '>FlexGallery</div>
                <div className='flex justify-center items-center'>
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </nav>
        </header>
    )
}

export default Navbar