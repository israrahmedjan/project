
import { getHome } from "@/helper/helper";
import Landing from "./_components/landing/Landing";
// import SearchBox from "./_components/produccts/SearchBox";

export default async function Home() {
  // const mydata = await getHome(); // ✅ async function ko await karo
  // console.log("My data", mydata);
  return (
    <>
    <div className="mt-[130px]">
    {/* <pre>{JSON.stringify(mydata, null, 2)}</pre> */}
    <Landing />
    </div>
    
     
    

   

    
    </>
  );
}
