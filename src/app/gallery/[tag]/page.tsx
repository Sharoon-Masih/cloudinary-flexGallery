import React from 'react'
import cloudinary from "cloudinary";
import { Searchresult } from '../page';
import Uploadimg from '@/components/upload-img';
const page =async ({searchParams}:{params:{tag:string},searchParams:{q:string}}) => {
console.log(searchParams);

const results = await cloudinary.v2.search
    .expression(`resource_type:image AND tags=${searchParams.q}`) //this method is for filtering
    .sort_by('created_at', 'desc') //this is sorting by public_id and order will be descending,pehla public_id ka through kr rhay thy sort par abi created_at bcuz public_id ka through number ki waja sa pics uper nicha hojati hai bcuz wo descending order jab sort krega  toh jo greater number id hongi wo uper ayengi or baki nichay toh that's why we use "created_at" it will sort A/c to Date.
    .with_field("tags")
    .max_results(40) //this is for number of results, that how much product or result we want
    .execute() as { resources: Searchresult[] };
  
function getColumn(col:number){
 return results.resources.filter((card,index)=>(
    index % 4 === col
 ))
}
return (
    <div className="pt-12  grid justify-center items-start grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-x-3 gap-y-3 w-full m-auto p-3  ">
      {/*here we are creating array of getColumn func */}

      {[getColumn(0), //here first column ma jo be items ayengi wo return hongi
      getColumn(1), //here second column ma jo be items ayengi wo return hongi
      getColumn(2), //here third column ma jo be items ayengi wo return hongi
      getColumn(3)  //here fourth column ma jo be items ayengi wo return hongi
      ].map((column,index) => ( //here jo columns mil raha hain array ma unko iterate krwadia.

        <div className="flex flex-col gap-3" key={index}> {/*here jo columns ka array mil rha hai like first column ma jo items hongay wo flex-col yani vertical direction ma show hongay isi tarah second column ka items be vertically show hongay and so on.. toh iss tarah hota yeh haka vertically jo spaces hotay hai items ka darmayan wo remove hojatay hain. or wo ek masonary grid ki form ma ajata hain  */}
          {column.map((card: Searchresult,index) => (
            <Uploadimg {...card} key={card.tags[index]} results={card} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default page