import { Poppins } from "next/font/google";
import "./globals.css";
import { ProvidersCustomization } from "@/redux/Providers";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});



export const metadata = {
  title: "Bussiness Project",
  description: "Bussiness Project Descriptions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${poppins.variable} font-poppins`}>
  <ProvidersCustomization>
        <Header />
        {children}

       
<script type="text/javascript">
{ `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6803a53302dbf4190e49cac4/1ip73qkpb';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})(); `
}
</script>
      <Footer />
      </ProvidersCustomization>
      </body>
    </html>
  );
}
