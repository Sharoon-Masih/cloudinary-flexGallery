"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import EditImg from '@/components/editImg';
import { useState } from "react";
import {motion} from "framer-motion"
import { FadeIn } from '@/components/motion/utils';
import GenAibtn from '@/components/GenAibtn';

//iss dynamicroute ka sth [...imgName] "..." iss lia lgye hain its mean that ka ab jo dynamicroute hai wo nested route ma accept krega like agr route segment iss tarah sa hona "/edit/models/ksxjgsskxgsxkuxxs" toh dekha jaye toh normally "/edit/model" "model" is dynamic route segment  but kiu ka humari jo pics hain unki public_id nested folder ka andar hai toh iss lia humna "..." ka through yeh define kia haka "/edit" iska bd jo be route segment hoga wo dynamic hi hoga or yaha par params ma get hoga. "..." its work like rest operator. 
const Page = ({ params }: { params: { imgName: string } }) => {

  const [transformation, Settransformation] = useState<"clear_all" | "tint" | "pixelate" | "grayscale" | "blur" | "generative_fill" | "image_Bg" | "remove_Bg" | "color_Bg" | undefined>();
  const [inputVal,SetinputVal]=useState("")
  const [GenAi,SetGenAi]=useState([""]);

const  [btnName,value]=GenAi; //for remove
const [,object,color]=GenAi; //for recolor
const [,obj,Newobject]=GenAi; //for replace


// const []

  //  let btnName,value:string;
  //  if(GenAi){
  //   [btnName,value]=GenAi
  //  }
  console.log(GenAi);
 
  // useEffect(()=>{
  //    cloudinary.v2.url(fillImg,{transformation:[
  //     {width:500,height:400,crop:"fill"}
  //    ]})
  // },[fillImg])
  const { imgName }: { imgName: string } = params; //yaha ho yeh raha hai ka jab params get kia toh bht sari pics nested hui thi folders may kiu ka humna albums ma jab pic ko add kia toh unki public_Id nested folder ma chli gyi like "models/noy9i0f4mvrg1j242ptx" or jab param get kia toh usna "/" ka through split krka array ma store like: "{ imgName: [ 'models', 'noy9i0f4mvrg1j242ptx' ] }" . 
  let imgID = (imgName as unknown) as String[] //toh jo array get hua usko string ma change krna ka lia pehla mena usko array bnaya by forcely casting then join() ka through string ma change kia.
  let updatedImg = imgID.join("/")

  return (
    <section className=" px-4 py-4  text-gray-100 w-screen md:width height ">
      <div className='w-full flex justify-between items-center flex-col gap-4 lg:flex-row lg:gap-0 '>
        <div className='items-center justify-between lg:justify-start lg:items-start flex flex-col'>
          <span className='text-4xl text-gray-100 font-semibold'>FlexEditor</span>
          <span className='text-sm text-gray-300 font-normal'>powered by GenAi</span>
        </div>
        <Button className='text-lg font-medium' variant={"outline"} onClick={() => { Settransformation("clear_all"); SetGenAi(["clear_all"]) }}>Clear all</Button>
      </div>
      <div className='pt-10 flex w-full flex-col items-center gap-[50px]'>
        <div className='grid justify-center items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
          <Button className='text-lg font-semibold ' onClick={() => { Settransformation("blur") }}>Blur</Button>
          <Button className='text-lg font-semibold ' onClick={() => { Settransformation("generative_fill") }}>Generative fill</Button>
          <Button className='text-lg font-semibold ' onClick={() => { Settransformation("grayscale") }}>Grayscale</Button>
          <Button className='text-lg font-semibold ' onClick={() => { Settransformation("pixelate") }}>Pixelate</Button>
          <Button className='text-lg font-semibold ' onClick={() => { Settransformation("remove_Bg") }}>Remove BG</Button>
        </div>
        <div className='flex  justify-evenly w-full items-center flex-col gap-4 xl:flex-row'>
          <EditImg image={updatedImg} key={updatedImg} />
          {transformation && transformation !== "clear_all" && 
            <motion.div variants={FadeIn("left","tween",0.75,0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{once:true,amount:0.25}}>
            <EditImg image={updatedImg} key={updatedImg} edit={transformation} setTransform={Settransformation}/>
            </motion.div>
          }
          {GenAi && GenAi[0] !== "clear_all" && 
            <motion.div variants={FadeIn("left","tween",0.75,0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{once:true,amount:0.25}}>
           { btnName === "GenAi recolor" ? <EditImg image={updatedImg} key={updatedImg} GenAiedit={[btnName,object,color]} setGenAitransform={SetGenAi}/> : btnName === "GenAi replace" ? <EditImg image={updatedImg} key={updatedImg} GenAiedit={[btnName,obj,Newobject]} setGenAitransform={SetGenAi}/> : <EditImg image={updatedImg} key={updatedImg} GenAiedit={[btnName,value]} setGenAitransform={SetGenAi}/> }
            </motion.div>
          }
        </div>
        <div className='w-full flex justify-center flex-col items-center gap-5'>
          <div className='text-lg font-semibold text-gray-300'>GenAi features</div>
          <div className='grid justify-center items-center gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
           <GenAibtn btnName='GenAi remove' value={inputVal} setValue={SetinputVal} setTransform={SetGenAi}/>
           <GenAibtn btnName='GenAi replace' value={inputVal} setValue={SetinputVal} setTransform={SetGenAi}/>
           <GenAibtn btnName='GenAi recolor' value={inputVal} setValue={SetinputVal} setTransform={SetGenAi}/>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Page;

