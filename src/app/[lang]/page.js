
import AsideBar from "@/components/AsideBar";
import MoviList from "@/components/MoviList";
import {locales} from "@/middleware";



export  function  generateStaticParams(){
    return locales.map(lang => {
        return {
            lang:lang.code
        }
    })
}

export default function Home({params:{lang}}) {
    return (
<>
    <AsideBar lang={lang}/>
    <MoviList lang={lang} />
</>
    );
}
