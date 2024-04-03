
import Image from "next/image";
import Link from "next/link";

function MovieItem({lang,id,title,gnreIdList, genre_ids, poster_path, vote_average,vote_count}) {

    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image draggable={false} className="w-full object-cover" src={poster_path} height={458} width={305} alt=" psoter path"/>
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{title}</h3>
                <p className=" text-sm mb-2 text-slate-400">{genre_ids?.map(id=>gnreIdList?.[id]||null).join("/")}</p>
                <div className="flex items-center space-x-1 mb-5">
                    {Array(Math.round(vote_average)).fill(null).map((_, index) =>
                        <Image draggable={false} key={index} src="/assets/star.svg" width="14" height="13" alt=""/>
                    )}
                    <span className="text-slate-300 text-sm">({vote_count})</span>
                </div>
                <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href={`/${lang}/movies/${id}`}
                scroll={false}
                >
                    <Image src="/assets/tag.svg" alt="" height={20} width={20}/>
                    <span>Details</span>
                </Link>
            </figcaption>
        </figure>

    );
}

export default MovieItem;