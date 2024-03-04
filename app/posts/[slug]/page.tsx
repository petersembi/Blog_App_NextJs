import blogs from "../../blogData"
import  { notFound } from "next/navigation"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default  function Post({ params } : {
    params: {slug:string}
}) {

    // fetch slug
    const { slug } = params;

    // fetch blog
    const selectedBlog = blogs.find(blog => blog.slug === slug);

    if(!selectedBlog) {
        return notFound();
    }

    const { title, date, content } = selectedBlog;

    return (        
        <div>
            <Navbar />
            <main className="container mx-auto mb-24">
                <Link className="md:my-16 my-8 block pl-8 md:p-0" href="/">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    Back to Blog Posts
                </Link>
                <div className="bg-white rounded overflow-hidden px-4 md:px-24">
                    <h1 className="font-bold text-3xl text-center">{ title }</h1>
                    <p className="text-center mb-8 mt-4">{`${ date } - 5 min Read`}</p>
                    <img src={`/images/food.jpg`}  alt="food 1" className="w-full sm:h-48 object-cover"/>
                    <div className="m-4">                    
                        <p className="mt-12">{content}</p>
                    </div>
                </div>
            </main>
            <Footer />

           
        </div>
    )
}