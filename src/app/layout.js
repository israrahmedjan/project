import { Poppins } from "next/font/google";
import "./globals.css";
import { ProvidersCustomization } from "@/redux/Providers";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

import { ClerkProvider } from '@clerk/nextjs';
import LogRocket from 'logrocket';
import LogRocketInitializer from "@/lib/LogRocketInitializer";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import TawkToChat from "@/lib/TawkToChat";
import PaymentScreen from "@/lib/Onramper";
import { useSelector } from 'react-redux'

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
    
    <ClerkProvider>
    <html lang="en">
    <body className={`${poppins.variable} font-poppins`}>
    <LogRocketInitializer />
    <GoogleAnalytics />
    <TawkToChat />

  <ProvidersCustomization>
    {/* <PaymentScreen /> */}
   
        <Header />
        {children}

      <Footer />
     
      </ProvidersCustomization>
      
      </body>
    </html></ClerkProvider>
  );
  
}
