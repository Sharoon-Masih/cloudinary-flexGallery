
import cloudinary from "cloudinary";
import { Searchresult } from '../gallery/page';
import React from 'react'
import List from '@/components/fav-list';

export const revalidate=5; //this is known as segment level-config for revalidation.

const page = async () => {
  const response = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favourite')
    .sort_by('created_at', 'desc')
    .with_field("tags")
    .max_results(10)
    .execute() as { resources: Searchresult[] }
  return (
    <section className=" px-4 py-4  text-gray-100 md:width w-screen height ">

      <div className='flex justify-center md:justify-start items-center text-4xl font-semibold'>Favourite💗</div>
      <List initialresources={response.resources} />
      </section>
  )
}

export default page;