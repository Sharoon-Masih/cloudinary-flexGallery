import React from 'react'
import cloudinary from "cloudinary";
import { Searchresult } from '@/app/gallery/page';
import Uploadimg from '@/components/upload-img';

export async function generateStaticParams(){
  const result= await cloudinary.v2.search.expression (`resource_type:image`) 
  .sort_by("created_at","desc")
  .with_field("tags")
  .max_results(3)
  .execute() as {resources:Searchresult[]}

  return result.resources.map((image)=>( //in this whole function mena simply puri API ko fetch kia or usme sa jis property ka A/C hum params ley rahay thay wo yaha dynamic route ko dedi now at build time generateStatic will automatically populate dynamic route with params.
    {albumName : image.folder}
  ))
}

const DynamicAlbum = async ({params}:{params:{albumName:string}}) => {
    const result= await cloudinary.v2.search.expression (`resource_type:image AND folder=${params.albumName}`) //here we are filtering it through "folders".
  .sort_by("created_at","desc")
  .with_field("tags")
  .max_results(3)
  .execute() as {resources:Searchresult[]}
 
function getColumn(col:number):Searchresult[] {
   return result.resources.filter((val,index)=>
    index % 4 === col)
 }

  return (
  <section className='w-screen md:width p-4 height'>
   <div className='flex justify-center items-center md:justify-start '>
    <span className='text-4xl font-semibold text-gray-100 '>{params.albumName.charAt(0).toUpperCase()+params.albumName.slice(1).toLowerCase()}</span>
    </div>
    <div className="pt-12  grid justify-center items-start grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-x-3 gap-y-3 w-full m-auto p-3  ">
        
        {/* masonry grid */}
        {[getColumn(0),
          getColumn(1),
          getColumn(2),
          getColumn(3)]
          .map((column,index)=>(
            <div className='flex flex-col' key={index}>
            {column.map((card)=>(
                <Uploadimg {...card} results={card} key={card.folder}/>
            ))}
            </div>
          ))}
    </div>
   
   </section>
  )
}

export default DynamicAlbum