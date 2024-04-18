"use client"
import Image from "next/image";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { motion } from "framer-motion"
import { FadeIn, NavVariants, SlideIn, TextVariant } from "@/components/motion/utils";


export default function Home() {
 

  return (
    <main>
      <section className=" px-4 py-4 flex items-center justify-center overflow-hidden w-screen width height">
        <div className="flex justify-between flex-col items-center w-full m-auto gap-[50px]">
          <div className="flex justify-center items-center flex-col  p-2">
            <motion.div
              variants={NavVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-[55px] lg:text-[75px] font-semibold text-center">
              Welcome <br className="md:hidden" /> to the
            </motion.div>
            <motion.div className="text-[55px] lg:text-[75px] font-semibold text-center">
              {"F l e x G a l l e r y".split(" ").map((letter, index) => <motion.span
                variants={TextVariant(0.3 * index)}
                initial="hidden"
                whileInView="show"
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-600 "
                 key={index}>{letter}</motion.span>)}
            </motion.div>
            <motion.div variants={FadeIn("up","tween",0.75,0.2)}
            initial="hidden"
            whileInView="show" 
            viewport={{ once: true, amount: 0.25 }}
            className="text-base text-gray-300">The Ai powered gallery</motion.div>
          </div>
          <motion.span variants={FadeIn("up","spring",0.75,0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once:true,amount:0.25}}>
            <Image src="/undraw_camera_re_cnp4.svg" width={400} height={400} alt="main"/>
          </motion.span>
        </div>
      </section>

    </main>
  );
}
