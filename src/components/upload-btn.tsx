"use client"
// import React, { useState } from 'react'
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { Button } from '@/components/ui/button'
import Uploadimg from './upload-img'
import { useRouter } from 'next/navigation'


type UploadResult={
    event?:string,
    info?:{
      public_id:string;
    }
}
const Upload = () => {
//    const [Image,SetImage]=useState();
      const router = useRouter();
    return (
        <div>
            <CldUploadButton uploadPreset="d7isyfsy"
                // onSuccess={(result: any) => { SetImage(result.info.public_id) }} //here by using useState() hook we are finding out the public_Id and passing it in Uploadimg component below.it is only for checking. 
                className="bg-secondary  shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 flex justify-center items-center rounded-md font-medium text-sm gap-2"
                onSuccess={()=>{  //now here we are using onSuccess event which means that jab image upload hojaye then yeh event call hoga.pehla iska jaga onUpload() use hota tha but new update ma wo obslete krka isse replace krdia and it is provided by cloudinary.acha ab agr hum onClick() use krtay toh wo jasa hi button pa click hota page refresh krdeta usse yeh hota ka uss time pa toh pic upload hi nhi thi hui toh iss lia koi be new img show nhi hoti,but jab humna onSuccess() use kiya toh its mean ka jab img upload ho jasa hi done pa click ho tab yeh call hoga.
                    setTimeout(()=>{ //yeh iss lia set kia hai kiu agr yeh timer nhi lgatay toh phr wo jasa hi upload hota toh page refresh hojata yani ka tab tk wo pic gallery pa upload hui hoti ya nhi but program run hojata toh phr wo show nhi hota iss lia humna yaha timer set krdia ka upload pa click krnay ka 2 second bd page refresh hoga kiu ka tab tk cloudinary ki media gallery ma hojayegi upload img. 
                        router.refresh()
                    },2000)
                }}
                >Upload Image
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
            </CldUploadButton> {/*if we dont write "Upload Image" b/w open and closing tag, so by default it write "Upload"  */}
            {/* {Image && (
              <Uploadimg Image={Image} key={Image}/> )} */}
        </div>

    )
}

export default Upload;