import Image from "next/image";
import Hulu from "../assets/hulu-white.png"
import HeaderItem from "/components/Headeritem"
import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="HOME" Icon={BadgeCheckIcon}/>
                <HeaderItem title="HOME" Icon={CollectionIcon}/>
                <HeaderItem title="HOME" Icon={SearchIcon}/>
                <HeaderItem title="HOME" Icon={UserIcon}/>
            </div>
            <Image
                className={"object-contain"}
                src={Hulu} width={200} height={100}/>
        </header>
    );
};

export default Header;