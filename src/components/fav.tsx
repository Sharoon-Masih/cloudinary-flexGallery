"use client"
import { CldImage } from 'next-cloudinary'
import React from 'react';

const Fav = (favArr:{Id:string}[]) => {
  return (
    <div> {favArr.map((card)=><CldImage
    src={card.Id}
    width="200"
    height="200"
    alt='something'
    key={card.Id}/>)}</div>
  )
}

export default Fav