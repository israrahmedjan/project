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
      <Footer />
      </ProvidersCustomization>
      </body>
    </html>
  );
}
