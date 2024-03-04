import Image from "next/image"

const Footer = () => {
    return (
        <div className="bg-primary-100">
            <nav className="container mx-auto"> {/** Start Nav */}
                <div className="flex justify-between h-20 items-center bg-primary-100">      
                    <Image src="/images/logo.png" alt="logo" height={57} width={144} />
                  
                    <div className="md:flex hidden items-end">
                        
                        <span  className="text-base">Copyright @2023. BlogPost</span>                        
                       
                    </div>
                </div>
            </nav> {/* End Nav */}
        </div>   
    )
}

export default Footer;