

import cloudinary from "cloudinary";
import AlbumSideBar from './albumSideBar';
import PhoneSideBar from "./phoneSideBar";
const Sidebar = async () => {
   
    const album=await cloudinary.v2.api.root_folders() as {folders:{name:string,path:string}[]}
    return (
        <PhoneSideBar folders={album.folders}/>
    )
}

export default Sidebar

