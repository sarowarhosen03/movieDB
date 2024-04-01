
import Link from "next/link";
import Image from "next/image";
import {getDictionary} from "@/lib/getDictionary";

async function AsideBar({lang}) {
    const {trending, new_releases,coming_soon,favourites,watch_later} = await getDictionary(lang)

    return (

        <aside>
            <ul className="space-y-2">
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                        <Image src="/assets/icons/trending.svg" width="24" height="24" alt="trending"/>
                        <span>{trending}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/assets/icons/newRelease.svg" width="24" height="24" alt="new relsease"/>
                        <span>{new_releases}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/assets/icons/commingSoon.svg" width="24" height="24" alt=""/>
                        <span>{coming_soon}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/assets/icons/favourite.svg" width="24" height="24" alt=""/>
                        <span>{favourites}</span>
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <Image src="/assets/icons/watchLater.svg" width="24" height="24" alt=""/>
                        <span>{watch_later}</span>
                    </Link>
                </li>
            </ul>
        </aside>


    );
}

export default AsideBar;