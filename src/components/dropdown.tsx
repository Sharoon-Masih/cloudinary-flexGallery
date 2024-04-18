"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import React, { useState } from 'react'
import Menu from "./icons/menu";
import Folder from "./icons/folder-p";
import Albumdialog from "./albumdialog";
import Editdialog from "./editdialog";

const Dropdown = ({image}:{image:string}) => {
  const[on,Seton]=useState(false);
  return (
    <div className="absolute left-2  top-1">
  <DropdownMenu>
  <DropdownMenuTrigger>
    <Menu/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-[50px] flex flex-col gap-2 items-center justify-between p-2">
    {/* <DropdownMenuLabel>Add to album</DropdownMenuLabel> */}
    <DropdownMenuItem  asChild>
      {/* <span><Folder/></span> isko iss lia comment kia hai kiu ka jab kisi element ko asChild ka through child bnatay hai toh usma phr single element hi rakh sktay hain */}
      <Albumdialog image={image} />
    </DropdownMenuItem>
    <DropdownMenuItem asChild >
      <Editdialog image={image}/>
    </DropdownMenuItem>
    {/* <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem> */}
  </DropdownMenuContent>
</DropdownMenu>
   </div>
  )
}

export default Dropdown;
