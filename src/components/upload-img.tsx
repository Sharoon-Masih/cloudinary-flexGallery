"use client"
import React, { useEffect, useState, useTransition } from 'react'
import { CldImage } from 'next-cloudinary'
import Heart from './icons/heart';
import FullHeart from './icons/fullHeart';
import setFavActions from '@/constant/actions';
import { Searchresult } from '@/app/gallery/page';
import Dropdown from './dropdown';

const Uploadimg = ({ public_id, results ,unHeart }: { public_id: string, results: Searchresult,unHeart?:(unHeartResources:Searchresult)=>void }) => {
  const [isTransition, StartTransition] = useTransition(); //check nextJs-own docs for more understanding.
  // const [isFav,SetisFav]=useState(false);
  // console.log(results);
  // const check = results.tags.includes("favourite") //.include method will return boolean value.
  const [isFavourited,SetisFavourited]=useState(results.tags.includes("favourite")) //yaha iss lia hum useState ka through state maintain kr rahay hain kiu ka jab hum server actions ka through "fullheart" and "heart" ko manipulate kr rhay hna like ka agr "check" ho toh "fullheart" hoja warna "heart" hi rahay,toh ab isse hua yeh kay jab user onClick krta hai toh pehla request server-action ka through process hoti hai. phr fullheart ya heart access hota hai.or remember initially "tags" ma "favourite" nahi hoga but jab hum ek dafa click krenga tab wo "true" return krega.

  useEffect(()=>{ //basically hota yeh haka jo useState hai wo async hook hai, ab hota iss tarah haka agr hum direct console krtay hain "isFavourited" ko toh even onClick krna ka bd be jo "isFavourited" ki initial value hai wohi ani thi that is "false" kiu ka console.log toh synchronous hai toh wo pehla print hoga or phr jab call stack empty hoja ga tab "useState()" ma jo be changes hongay reflect hongay kiu ka async func tab hi call stack ma ata hai jab synchronous func call stack ma say execute hojatay hain toh iss lia back-up pa toh logic sai apply ho rha hai ka useState "true" ho rha hai but console.log ma "false" hi aa raha hai kiu kay tab "isFavourited" state variable ma initial value "false" hi thi.isi lia useEffect ka use kia kiu ka useEffect be async nature ka hai toh uska through yeh hua ka pehla "isFavourited" state variable ki value change hui or phr wo effect browser pa reflect hua isi lia useEffect ko use krtay hain taka jab sab synchronous task hojaye tab yeh changes reflect hotay hai. 
    console.log(isFavourited);
    // router.refresh();
  },[isFavourited]) //or yaha jab dependency ma isFavourited change hoga tab tab yeh func reflect hoga.
  return (
    <div className='  flex justify-center items-start   relative overflow-hidden '>
      <CldImage
        src={public_id} //this is hard-coded public_ID we can also use it dynamically wo iss tarah ka jo humara CldUploadButton component hai usma ek event pass kren "onUpload" wo ek callback function as a argument lega, now it works like this ka jab be koi asset Upload hoga wo event ma jo func hai call hoga, toh as a result wo jo asset upload hoga uski complete info dega usma sa hum public_Id ko dynamically fetch krka yaha pass krsktay hain.now "onUupload" event is depreciated/obslete by cloudinary thats why using "onSuccess" in place of it.
        alt="haha"
        width="300"
        height="200"
        // blurFaces //there are so many features that CldImage provide but it is also one of the feature that is used for blurring the face(it only blur face if exist in img).
        sizes="100vw"
        className='object-cover object-center' ></CldImage>
       
       {isFavourited ?
        <div className='absolute right-1 top-2 sm:right-2' onClick={() => {
          console.log("action done")
          // SetisFav((prev)=>!prev)//for Now remember that when we are doing toggle effect so hota yeh haka first time jab humara component render hota hai toh yaha humna initially state variable ma kya value di hai i.e "false",so we expect that kay jab first time onClick hoga toh humara pass state variable ki value "true" hojayegi but asa nhi hoga,hoga yeh kay first time jab onClick kreinga toh jo initial value hai i.e "false" wohi ayegi but jab second time onClick hoga so then it will convert into "true".but why its happening its still a ques ? iska answer Muhammad atif say wp pa pucha tha. ab yaha hum yaha toggle effect nahi lga rahay bcuz state maintain nhi ho rhi kiu kay hum yeh chahtay hain kay jab gallery route sa favourite pa navigate krein toh jo gallery ma favourite tag kia hain wo heart remove hojaye halaka cloudinary ka media ma toh state maintain hoti hai but yaha "fullHeart" ki jaga "Heart" ajata hai when we navigate to favourite or any other route bcuz by default useState ki value false hai.Ab uper humna dubara useState ka through toggle effect kia hai.
          SetisFavourited(false); 
          StartTransition(() => {
            // console.log(isFavourited)
            unHeart?.(results); //yaha humna jo "unheartresources" parameter tha usko "result" pass krdia or jo "result" hai yeh wo  object hai jisme tag="favourite" present hai kiu ka A/c to condition ka yehi hai ka jis card/img ma tag="favourite" hoga usi par "fullHeart" apply hoga but ques yeh haka yaha toh hume Heart wala img nahi balka unheart chaiya but fullHeart ma toh asa nhi hoga toh uska yeh haka yaha isi lia kia hai bcuz its toggle effect that is kay agar true hai toh false hoja ga or agr false hai toh true, toh yaha be yehi hor rha hai kay agr fullHeart hai toh jab click hoga toh wo unheart hojaga jo be img/object result ma hoga.and jo isme "unHeart?.(results)"  "?." it is optional chaining yeh feature ESmodule ma milta hai ab iska basic mtlb yeh haka jab hum kisi func ya prop ko optional bnadetay hain toh phr huma yeh use krna parta hai its mean that ka agr "unHeart" undefined ho toh kuch nahi hoga else "unHeart" call hojayega.
            setFavActions(public_id, false)

          })
        }}>
          <FullHeart style="text-red-500 cursor-pointer" />
        </div> :
        <div className='absolute right-1 top-2 sm:right-2' onClick={() => {
          console.log("action done")
          SetisFavourited(true);
          StartTransition(() => {
            setFavActions(public_id, true )
          })
        }}>
          <Heart style="hover:text-red-500 cursor-pointer" />
        </div>}
       <Dropdown image={public_id}/>
    </div>
  )
}

export default Uploadimg