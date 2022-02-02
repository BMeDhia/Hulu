import Image from "next/image";
import Hulu from "../assets/hulu-white.png"
import Headeritem from "/components/Headeritem"

const Header = ({Icon, title}) => {
    return (
        <div className='flex flex-col items-center cursor-pointer group wt-12 sm:w-20 hover:text-white'>
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>

    );
};

export default Header;