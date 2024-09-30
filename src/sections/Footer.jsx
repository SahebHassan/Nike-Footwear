import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
        <div className="flex justify-between items-start max-lg:flex-col gap-20 flex-wrap">
            <div className="flex flex-col items-start">
                <a href="/">
                <img src={footerLogo} width={150} height={46} />
                </a>
                <p className="font-montserrat text-base text-white-400 mt-6 sm:max-w-sm leading-7">Get shoe ready for the new term at your nearest nike store. Find your perfect size in store . Get Rewards</p>
            </div>
            <div className="flex gap-5 items-center mt-8">
                {socialMedia.map((icon)=>(
                    <div className="flex justify-center items-center bg-white rounded-full h-12 w-12">
                        <img 
                        src={icon.src} 
                        alt={icon.alt} 
                        width={24}
                        height={24}
                        />
                    </div>
                ))}
            </div>
        </div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                {footerLinks.map((section)=>(
                    <div key={section}>
                        <h4 className="text-white font-montserrat mb-6 font-medium text-2xl leading-normal">{section.title}</h4>
                        <ul>
                            {section.links.map((link)=>(
                                <li className="mt-3 text-white-400 cursor-pointer leading-normal text-base hover:text-slate-gray" key={link.name}>
                                <a>{link.name}</a>
                                </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        <div className="flex flex-between text-white-400 mt-24 max-sm:items-center max-sm:flex-col ">
                <div className="flex flex-1 gap-2 justify-start font-montserrat cursor-pointer">
                    <img src={copyrightSign}
                     alt="copyright sign" 
                     width={20}
                     height={20} 
                     className="rounded-full m-0"
                     />
                     <p>Copyright. All right reserved. </p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer