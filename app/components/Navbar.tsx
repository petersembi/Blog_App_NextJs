import Image from 'next/image';

const Navbar = () => {

    return (
        <div className="bg-primary-100">
            <nav className="container mx-auto"> {/** Start Nav */}
                <div className="flex justify-between h-20 items-center bg-primary-100">      
                    <Image src="/images/logo.png" alt="logo" height={57} width={144} />
                  
                    <div className="md:flex hidden items-center">
                        
                        <span className="text-base font-medium">Blogs</span>
                        
                        <input type="search" className="bg-transparent p-2 border border-primary-400 border-r-0 rounded-tl rounded-bl ml-8 focus:outline-none w-52" id="" />          
                        <button className="border border-primary-400 border-l-0 p-2 rounded-tr rounded-br "> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>

                        <button className=" bg-primary-300 text-white py-2 px-3 rounded ml-5">Create Blog Post</button>

                    </div>
                </div>
            </nav> {/* End Nav */}
        </div>   
    )

}

export default Navbar;
 
 
 
  
