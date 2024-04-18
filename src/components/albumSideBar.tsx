"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const AlbumSideBar = ({ folders }: { folders: { name: string, path: string }[] }) => {
  const [open, Setopen] = useState(false);
  const pathName = usePathname();
  // console.log(pathName);
  let update = folders.map((album) => (
    (pathName.split("/").length > 2 ? `${pathName.split("/").splice(0, 2).join("/")}/${album.name}` : pathName) === `/album/${album.name}` ? `${album.name}` : `album/${album.name}`
  )) //yeh update iss lia ki hai kiu ka jab sideBar pa multiple album atay hain toh phr agr ek pa first time click krein toh iss "/album/${album.name}" route pa chla jata hai par agr uss route say sideBar pa click krnay ka kisi or album pa jana ho toh wo path iss tarah ban jata hai "album/album/${album.name}" toh phr page not found ata hai. toh iss lia yeh sb trick ki.
  // console.log(update);

  return (
    <>
      <Link href={"/album"}>
        <Button variant="ghost" className="w-full justify-start" onClick={() => { Setopen((prev) => !prev) }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
          Album
        </Button>
        {open && <div className='flex flex-col w-full justify-start '>
          {
          update.map((album) => (<Link href={`${album}`} key={album}><Button variant="ghost" className="w-full justify-start">
           {album.split("/").length > 1 ? album.split("/").splice(1,1).join("/") : album} {/*  album.split("/").splice(1,1).join("/")  yaha basically jo splice(1,1) ma element splice ho rha hai wohi print ho rha hai.*/}
          </Button></Link>))
          }
        </div>}
      </Link>

    </>)

}

export default AlbumSideBar;