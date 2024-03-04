import Image from "next/image";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts"
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* Main section*/}
      <main className="container mx-auto mb-24">
        <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold mt-6 md:mt-14">The Accessibility Blog</h1>
        <p className="Blog text-base pl-1 mb-4 md:mb-16 text-center md:text-left ">The voice of the excluded</p>
        
        {/* blog posts */}
        <Posts />

      </main>

      {/* Footer */}
      <Footer />
      

    </>
  );
}
