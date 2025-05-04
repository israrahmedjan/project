
import { getHome, getHomeSeo } from "@/helper/helper";
import Landing from "./_components/landing/Landing";
import Loading from "./_components/Loading";
import seoData from "./seoData";
// import SearchBox from "./_components/produccts/SearchBox";


export const generateMetadata = async () => {
  const seoData = await getHomeSeo();
  console.log("Seo data",seoData.metaTitle);
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    keywords: [`${seoData.keywords}`],
  };
};

export default async function Home() {
   const homeData = await getHome(); // ✅ async function ko await karo
   //console.log("homeData", homeData);
  return (
    <>
    <div className="mt-5 md:mt-[100px]">
    {/* <pre>{JSON.stringify(mydata, null, 2)}</pre> */}
    {homeData ? (<Landing homeData={homeData} />) : (<div><Loading /></div>)}
    </div>
    
     
    

   

    
    </>
  );
}
