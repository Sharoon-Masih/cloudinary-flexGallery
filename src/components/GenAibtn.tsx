"use client";
import React, { useState } from 'react'
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from './ui/input';

const GenAibtn = ({ btnName, value, setValue,setTransform }: { btnName: string, value: string, setValue: (value:string) => void ,setTransform:(change:string[])=>void }) => {
    
    const [object,color]=value.split(","); //for recolor
    const [obj,newobject]=value.split(",") //for replace
   
    const [open,Setopen]=useState(false)
    return (

        <DropdownMenu open={open} onOpenChange={Setopen}>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>{btnName}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[70px] flex flex-col gap-2 items-center justify-between p-2">
                <DropdownMenuItem asChild>
                   {btnName === "GenAi recolor" ? <Input placeholder='object,color' value={value} onChange={(event) => { setValue(event.target.value) }} />  : btnName === "GenAi replace" ? <Input placeholder='object,Newobject' value={value} onChange={(event) => { setValue(event.target.value) }} /> : <Input placeholder='enter prompt' value={value} onChange={(event) => { setValue(event.target.value) }} />  }
                </DropdownMenuItem>
                <DropdownMenuItem asChild >
                {btnName === "GenAi recolor" ? <Button onClick={()=>{setTransform([btnName,object,color]);Setopen(false)}}>enter</Button>  :  btnName === "GenAi replace" ? <Button onClick={()=>{setTransform([btnName,obj,newobject]);Setopen(false)}}>enter</Button> : <Button onClick={()=>{setTransform([btnName,value]);Setopen(false)}}>enter</Button>  }
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default GenAibtn

