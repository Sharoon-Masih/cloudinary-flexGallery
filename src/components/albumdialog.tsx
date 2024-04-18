"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { setAlbum } from "@/constant/actions"
import { useEffect, useState } from "react"


 function Albumdialog({image}:{image:string}) {
  
    // function getPhoto(){
    //     const list=localStorage.getItem("Photos")
    //     if(list){
    //     return list;
    //     }
    // return [];
    // }
    const [inputValue, SetinputValue] = useState("family");
    // const [Photo,SetPhoto]=useState([{}]); //initially useState ko mena empty array of object dia hai.
    const [open,Setopen]=useState(false);

    // useEffect(()=>{
    //     console.log(Photo)
    // },[Photo])

    // function additem(){
    //     if(!inputValue){
    //         alert("fill the input field")
    //     }
    //     else if (inputValue){
            
    //         const newInput:{id:string,name:string}={
    //             id:image,
    //             name:inputValue
    //         }
    //         SetPhoto([...Photo,newInput])
    //         // console.log(Photo)
    //     }
    // }
    
    // useEffect(()=>{
    //     localStorage.setItem("Photos",JSON.stringify(Photo))
    // },[Photo])
    return (
        <Dialog open={open} onOpenChange={Setopen}> {/* "open" and "onOpenChange" iss liya lgayi hai taka jab "add to" ma click ho toh dialog close hoja.  */}
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                    <span>Add to album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add image to album</DialogTitle>
                    <DialogDescription>
                       type album name you want to move this image
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                             Name
                        </Label>
                        <Input
                            id="name"
                            value={inputValue}
                            onChange={(event) => { SetinputValue(event.target.value) }}
                            className="col-span-3"
                        />
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Author
                        </Label>
                        <Input
                            id="username"
                            value={inputValue2}
                            onChange={(event) => { SetinputValue2(event.target.value) }}
                            className="col-span-3"
                        />
                    </div> */}
                </div>
                <DialogFooter>
                    <Button type="submit" 
                    onClick={async ()=>{
                        Setopen(false); 
                       await setAlbum(inputValue,image); 
                        console.log("done")}}>Add to {inputValue}</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}

export default Albumdialog;
