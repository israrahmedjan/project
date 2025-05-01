
import { getHome } from "@/helper/helper";
import Landing from "./_components/landing/Landing";
import Loading from "./_components/Loading";
// import SearchBox from "./_components/produccts/SearchBox";


export const generateMetadata = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/seo/about`);
  // const data = await res.json();

  return {
    title: "Testing Title",
    description: "Testing Descriptons",
    keywords: ["business", "project", "test", "seo"],
  };
};

export default async function Home() {
   const homeData = await getHome(); // ✅ async function ko await karo
   console.log("homeData", homeData);
  return (
    <>
    <div className="mt-[130px]">
    {/* <pre>{JSON.stringify(mydata, null, 2)}</pre> */}
    {homeData ? (<Landing homeData={homeData} />) : (<div><Loading /></div>)}
    </div>
    
     
    

   

    
    </>
  );
}
