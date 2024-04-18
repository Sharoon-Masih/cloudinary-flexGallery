"use client"
import { Searchresult } from '@/app/gallery/page';
import Uploadimg from './upload-img';
import React, { useEffect, useState } from 'react'

const List = ({ initialresources }: { initialresources: Searchresult[] }) => {

    const [resources, Setresources] = useState(initialresources);

    useEffect(() => {
        Setresources(initialresources); //yeh yaha iss lia use kia hai taka jab ek dafa useState() chl jaye phr useEffect ka through jo initialResources hai zahir hai wo be update hoga toh jab jab wo update hoga yeh changes reflect hongay UI pay. means ka ho yeh raha tha ka jab humna favourite ma sa unheart kia toh wo remove hogya but jab gallery ma jaka wapis favourite pa atay thy toh wo unheart nahi hota tha kiu ka changes reflect nahi ho rhay thy.mtlb changes hotay thy par daar say not quickly.
    }, [initialresources])

    const Max_col = 4;

    function getColumn(col: number) {
        return resources.filter((card, index) => (
            index % Max_col === col
        ))
    }
    // const columns:((col:number)=>Searchresult[])[]=[function getColumn(){ return initialresources },] //remember agar hum ek bna hua ka func ki type define krna chahtay hain toh type annotate krta huwa just uski return type likhaga na ka func ki puri type define like ka wo kitna parameter lega etc.. 

    //now we dont have to create getColumn func we have to just call it.
    const columns: (Searchresult[])[] = [getColumn(0), getColumn(1), getColumn(2), getColumn(3)] //here simply we create array of "getcolumn" func and we define its type by just putting getColumn return type that is "Searchresult[]"
    return (
        <div className="pt-12  grid justify-center items-start grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-x-3 gap-y-3 w-full m-auto p-3 ">
           {columns.map((column,index) => (
                <div className='flex flex-col gap-3' key={index}>
                    {column.map((card) => (
                        <Uploadimg public_id={card.public_id} key={card.public_id} results={card}
                            unHeart={(unHeartResources) => { //now here is ques that how its getting this argument "unHeartResources".basic ho yeh rha hai ka yeh jo humara "Uploadimg" component  hai isme "unHeart" define hai toh basic hoga ka yeh ka yaha hum srf "unHeart" func ka jo logic/body define ki hai yaha wo call nhi ho rha wo invoke/call basically "Uploadimg" but jo be logic apply ki hai uska A/c call hoga kiu ka "Uploadimg" "fav-list" component ma render ho rha hai, or jo "unHeartResources" wala parameter hai usko jab "Uploadimg" ma invoke kia toh wohi parameter pass krdia, toh parameter wo wohi consider krega jo "Uploadimg" ma pass kia hoga.
                                Setresources((currentResource) => (
                                    currentResource.filter((card) => card.public_id !== unHeartResources.public_id)
                                ))
                            }} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default List;