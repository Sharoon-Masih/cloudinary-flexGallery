"use server"
import React from 'react';
import cloudinary from "cloudinary"
import { revalidatePath } from 'next/cache';

const setFavActions = async (public_id:string,isFav:boolean) => {
    // revalidatePath("/gallery"); //its mean that jab be yeh function execute hoga wo jo path humna pass krwaya hai which is "/gallery" usko dubara sa revalidate krega like jo be usma content hoga dubara sa fetch krega.jasa ISR revalidation hoti hna which is time based usma hum specific time interval detay hai or uska A/c wo revalidation krta hai, isi tarah yeh Path based revalidation. 
    if(isFav){
        console.log("ok")
       await cloudinary.v2.uploader.add_tag("favourite",[public_id])
    }
    else
    {
        console.log("not ok")
       await cloudinary.v2.uploader.remove_tag("favourite",[public_id])
    }
  
// await new Promise((res)=>setTimeout(res,900)) //yeh iss lia kia hai bcuz logic kuch iss tarah hai ka jab user double click krega heart pa toh "favourite" hoga or agr double click hoga toh hi "unfavourite" be hoga. Ab glitch yeh aa raha tha ka jab user bina delay ka double click krta toh proper request nhi hoti like wo glitch hojata So to remove that glitch humna yaha 0.9 sec ka timeout lgadia ka ek dafa jab click hoga toh phr after 0.9 sec ka bd jo request user na ki hoti wo accept krta. mtlb ab user agr bina delay ka double click be krega na toh call stack ma request chli jayegi but 0.9 sec ka gap ka bd accept hogi toh usse glitch nahi ayega.or basic ho yeh raha hai kay yeh smjh lo ek tarah sa humna function ko stop krna ka lia kiya hai taka utni daar ma ek request solve hoja,now ho yeh raha hai ka ko "await" hna wo execution ko pause krdeta hai jab tk pomise return na ho toh yha be wohi ho rha hai ka jasa setTimeout ma humna 0.9 sec diya hai toh wo yaha 0.9 sec ka lia pause krdega ka pehla promise return then func agay execute hoga or isko last ma isi lia rakha hai taka uper sari functionality jab perform hojaye tab yeh await run ho baki kiu ka agr pehla krdetay toh wo execution start ma hi rok deta or phr promise return honay ka bd agay ki functionality allow krta.but it is not good practice to use this trick for pausing. now i remove bcuz i have used useState() for toggle effect.

}

export default setFavActions;

//for creating album and storing image in that album
export  async function setAlbum(folder:string,image:string){
  
  const existingFolder= await cloudinary.v2.api.create_folder(folder)//yaha hum "folder" create kr rahay hain.
  let part=image.split("/")
  console.log(part);
  if(part.length > 1){
    part.splice(0,part.length-1)
  }
  let joined=part.join("/")
  console.log(joined);
  await cloudinary.v2.uploader.rename(image,`${folder}/${joined}`) //yaha basic "public_id" ko rename iss lia kr rahay hain taka wo automatically jo folder create kia hai usma jaka store hoja,like yaha jo be "image" ki public_id hogi jab wo update hoka uska path change hoja ga toh wo automatically uss folder ma chli jayegi.like "family/public_id" .   
  console.log(existingFolder)

} 