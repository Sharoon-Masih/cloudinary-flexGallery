"use client"
import { CldImage } from 'next-cloudinary'
import React from 'react'

const editImg = ({ image, edit ,GenAiedit }: { image: string, edit?: |"tint" | "pixelate" | "grayscale" | "blur" | "generative_fill" | "image_Bg" | "remove_Bg" | "color_Bg" | undefined ,GenAiedit?:string[],setTransform?:(value: "clear_all" | "tint" | "pixelate" | "grayscale" | "blur" | "generative_fill" | "image_Bg" | "remove_Bg" | "color_Bg" | undefined)=>void,setGenAitransform?:(value:string[])=>void }) => {
    return (
        <div>
            {edit === "generative_fill" ? (<CldImage
                src={image}
                width="400"
                height="400" // Original 1440
                crop="pad"  // Returns the given size with padding
                fillBackground
                alt=""
                sizes="100vw"
                
            />

            ) : edit === "blur" ? (<CldImage
                width="400"
                height="400"
                src={image}
                sizes="100vw"
                blur="1200"
                alt=""
            />
            ) : edit === "grayscale" ? (<CldImage
                width="400"
                height="400"
                src={image}
                sizes="100vw"
                grayscale
                alt=""
            />
            ) : edit === "pixelate" ? (<CldImage
                width="400"
                height="400"
                src={image}
                sizes="100vw"
                pixelate
                alt=""
            />
            ) : edit === "remove_Bg" ? (<CldImage
                width="400"
                height="300"
                src={image}
                sizes="100vw"
                removeBackground
                alt=""
            />) : GenAiedit && GenAiedit[0] === "GenAi remove" ? (<CldImage
                width="400"
                height="300"
                src={image}
                sizes="100vw"
                remove={GenAiedit[1]}
                alt=""
            />) : GenAiedit && GenAiedit[0] === "GenAi recolor" ? (<CldImage
                src={image}
                width="400"
                height="400"
                crop="fill"
                recolor={[GenAiedit[1],GenAiedit[2]]}
                alt=""
                sizes="100vw"
              />): GenAiedit && GenAiedit[0] === "GenAi replace" ? (<CldImage
                src={image}
                width="400"
                height="400"
                crop="fill"
                replace={[GenAiedit[1],GenAiedit[2]]}
                alt=""
                sizes="100vw"
              />) : <CldImage
                width="300"
                height="300"
                src={image}
                sizes="100vw"
                alt=""
            />
            }
           
        </div>
    )
}

export default editImg