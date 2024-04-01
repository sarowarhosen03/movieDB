'use client';
import {locales} from "@/middleware";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import {useRef, useState} from "react";
import Link from "next/link";

function LanguageSwitcher(props) {
    const router = useRouter();
    const pathname = usePathname();

    const currentLangPath = pathname.split("/")[1];
    const languages = [
        {
            'code': 'en',
            'language': 'English',
            "image": '/assets/icons/usa.png'
        },
        {
            'code': 'bn',
            'language': 'Bangla',
            "image": '/assets/icons/bd.png'
        }
    ]
    const found = languages.find(lang => lang.code == currentLangPath);
    const [selectedLanguage, setSelectedLanguage] = useState(found ?? languages[0]);
    const langDropDwonRef = useRef();

    function handelSwithcLanguage(lang) {
        //i can parsist it via server-side cookie due to courese limitiation i cant make any api call
        const newPathName = pathname.replace(`/${currentLangPath}`, `/${lang.code}`);
        setSelectedLanguage(lang);
        if (pathname.includes("movies"))
            window.location.replace(newPathName) //to bypassRouteInterception
        else
            router.push(newPathName);
        langDropDwonRef.current.classList.toggle("opacity-0");
    }

    return (
        <div className="relative">
            <button onClick={() => {
                langDropDwonRef.current.classList.toggle("opacity-0");

            }} className="flex items-center gap-2">
                <Image className="max-w-8" src={selectedLanguage.image} height={20} width={20}
                       alt={selectedLanguage.language}/>
                {selectedLanguage.language}
            </button>


            <div ref={langDropDwonRef}
                 className="absolute right-0 top-full mt-2 w-40 rounded-md bg-body p-2 z-10 shadow-lg opacity-0">
                <ul>
                    {languages.filter((lang) => lang.code != found.code).map((lang, index) => (
                        <li key={index}
                            onClick={() => handelSwithcLanguage(lang)}
                            className="flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 hover:bg-primary ">

                            <img className="max-w-8" src={lang.image} alt={lang.language}/>
                            {lang.language}

                        </li>

                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LanguageSwitcher;