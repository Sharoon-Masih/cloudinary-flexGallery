import React from 'react'
import Link from 'next/link'
import cloudinary from "cloudinary";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Albumcard = async () => {
  //remember "await" execution ko stop krta hai which means kay it says that pehla yeh promise resolve hoga then code agay execute hoga.
  const {folders}= (await cloudinary.v2.api.root_folders()) as {folders:{name:string,path:string}[]} 
  
  
  return (
    folders.map((folder,index)=> ( 
    <Card className="lg:w-[300px] hover:shadow-sm hover:shadow-slate-500" key={folder.path}>
      <CardHeader>
        <CardTitle className='text-2xl font-semibold'>{folder.name.charAt(0).toUpperCase()+folder.name.slice(1).toLowerCase()}</CardTitle>
        <CardDescription>All your {folder.name.charAt(0).toUpperCase()+folder.name.slice(1).toLowerCase()} images.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-start items-center pt-10">
      <Link href={`/album/${folder.path}`} ><Button>View album</Button></Link>
      </CardFooter>
    </Card>))
  )
}

export default Albumcard;