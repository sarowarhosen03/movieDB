'use client';
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import {useCallback, useEffect, useRef, useState} from "react";
import {locales} from "@/middleware";

function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLangPath = pathname?.split("/")[1];
    const languages = locales;

    const found = languages.find(lang => lang.code === currentLangPath);
    const [selectedLanguage, setSelectedLanguage] = useState(found ?? languages[0]);
    const langDropDwonRef = useRef();
    function toggleMenu() {
        langDropDwonRef.current?.classList.toggle("hidden");

    }


    async function handelSwithcLanguage(lang) {
        //set preferred language in cookie
        document.cookie = `lang=${lang.code}; path=/`;

        //i can parsist it via server-side cookie due to courese limitiation i cant make any api call
        const newPathName = pathname.replace(`/${currentLangPath}`, `/${lang.code}`);
        setSelectedLanguage(lang);
        if (pathname.includes("movies")) window.location.replace(newPathName) //to bypassRouteInterception
        else router.push(newPathName, {
            scroll: false
        });
        toggleMenu()
    }

    const  escapeMenu= useCallback((e)=>{
        if (e.key === "Escape"&&!langDropDwonRef.current?.classList.contains("hidden")) toggleMenu()

    },[])

    useEffect(() => {
        document.addEventListener('keydown', escapeMenu)
        return () => document.removeEventListener('keydown', escapeMenu)

    }, [escapeMenu])


    return (<div className="relative">
        <button onClick={toggleMenu} className="flex items-center gap-2">
            <Image className="max-w-8" src={selectedLanguage.image} height={20} width={20}
                   alt={selectedLanguage.image}/>
            {selectedLanguage.language}
        </button>

        <div  ref={langDropDwonRef} className="hidden">
            <div onClick={toggleMenu}  className="fixed inset-0  h-screen w-screen  "></div>

            <div
                 className="absolute right-0 top-full mt-2 w-40 rounded-md bg-amber-50 dark:bg-body p-2 z-10 shadow-lg  ">
                <ul>
                    {languages?.filter((lang) => lang.code !== found?.code)
                        .map((lang, index) => (<li key={index}
                                                   onClick={() => handelSwithcLanguage(lang)}
                                                   className="flex items-center justify-between gap-2 p-2 rounded-md cursor-pointer dark:hover:text-body  hover:bg-primary ">

                                <Image className="max-w-8" src={lang.image} alt={lang.image} height={20} width={20}/>
                                {lang.language}

                            </li>

                        ))}
                </ul>
            </div>
        </div>

    </div>);
}

export default LanguageSwitcher;