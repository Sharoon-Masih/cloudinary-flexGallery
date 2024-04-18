import React from 'react';
import Albumcard from '@/components/albumcard';


const Album = async () => {
  
  return (
    <section className='w-screen md:width p-4  height'>
    <div className='text-4xl text-gray-100 font-semibold w-full flex m-auto justify-center items-center md:justify-start'>Albums</div>
    <div className="pt-12  grid justify-center items-start grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 gap-x-3 gap-y-4 lg:gap-y-[80px] w-full m-auto p-3  ">
      <Albumcard />
      </div>
    </section>
  )
}

export default Album;