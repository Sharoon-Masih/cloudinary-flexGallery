import Upload from "@/components/upload-btn";
import Uploadimg from "@/components/upload-img";
import cloudinary from "cloudinary";
import SearchBar from "@/components/searchBar";
import { unstable_noStore as noStore } from "next/cache";
// import { revalidatePath } from 'next/cache'

export type Searchresult = {
  public_id: string;
  tags: string[];
  folder: string
}

// revalidatePath("/gallery","page")
// export const dynamic="force-dynamic";

const Gallery = async () => {
  noStore()
  //remember must setup your environment variable where cloud name and API key and API secret should be available.
  const results = await cloudinary.v2.search
    .expression('resource_type:image') //this method is for filtering
    .sort_by('created_at', 'desc') //this is sorting by public_id and order will be descending,pehla public_id ka through kr rhay thy sort par abi created_at bcuz public_id ka through number ki waja sa pics uper nicha hojati hai bcuz wo descending order jab sort krega  toh jo greater number id hongi wo uper ayengi or baki nichay toh that's why we use "created_at" it will sort A/c to Date.
    .with_field("tags")
    .max_results(50) //this is for number of results, that how much product or result we want
    .execute() as { resources: Searchresult[] };//this method will execute.or jo "as {resources:Searchresult[]}" yeh basically mena usko explicitly cast kiya hai ka jo uper humna "Searchresult" type bnai hai wo uska array lega.its mean ka by casting jo "result" ki type hai wo ab ek object hai jisma resources ka array hai jiski type "Searchresult" hai like this: const results: {resources: Searchresult[];} or yaha result ki type ek object iss lia aa raha hai kiu ka jab  humna casting ki hai tab resources array ko ek object ma kia hai like "{resources:Searchresult[]}" . now when we console it like this console.log(results.resources[3]); toh sab hi properties jo resources array ka object ma hai wo show hongi, now question is this kay humna toh resources array ma jo type di hai wo Searchresult hai jo kay srf "public_id" ki property contain krta hai toh phr sab property kasa show ho rhi hai uski waja yeh hai ka jo casting hai wo datatype ko change nahi krti wo just TS ma forcely casting krdeti hai iss variable,object etc ki jo type hai wo yeh hogi like yaha "result as {resources:Searchresult[]}",but on the end basically humara code JS ma convert hota hai or waha casting remove hojati hai waha direct jo original value hoti hai wohi jati hai but iska faida yeh hota hai ka wasa normally JS ma type "any" hoti hai but jab hum yun casting krka btadeta hai toh phr wo direct jo value ki type hoti hai wohi consider hoti hai.


  //for understanding above methods more clearly check:https://cloudinary.com/documentation/search_method.

  const Max_col = 4; //its mean maximum column kitna hongay grid ma.
  function getColumn(col: number) {  //yeh basically humna masonry grid bnanay ka lia func bnaya hai iski working iss tarah sa haka ka yeh "card" filter krega in from resources array A/c to index,Max_col and "col" number which i will provide.ab hoga yeh ka for suppose the "col" number i provided is "0"  now when it filter so those cards who remainder will be "0" after dividing by Max_col that will come in first column. for e.g:
    //item at "0" index "0 % 4 === 0" //here 0 === 0 
    //item at "1" index "1 % 4 === 0" //here 1 === 0 //this item will not come in first col,bcuz condition become false..
    //item at "4" index "4 % 4 === 0" //here 0 === 0 //this will come in first col.

    //now you can see in above e.g that after every four item the fifth item will come in first row,bcuz the Max_col is 4. like index "0" item which is first item , index "4" item which is fifth item and so on..

    //isi tarah  baki "col" number ka A/c columns bnega. 
    return (
      results.resources.filter((card, index) => (
        index % Max_col === col
      )))

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
            <Uploadimg {...card} key={card.public_id} results={card} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Gallery;