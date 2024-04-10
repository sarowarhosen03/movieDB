import Image from "next/image";
import {getDictionary} from "@/lib/getDictionary";
import getImportedMovies from "@/lib/getImportedMovies";
import {notFound} from "next/navigation";

async function MovieDeatils({id, lang}) {
    const movies = await getImportedMovies();
    const movie = movies.find(movie => movie.id === parseInt(id))
    if (!movie) {
        return notFound()
    }
    const {title, overview, poster_path, backdrop_path, release_date, vote_average, vote_count, popularity} = movie;
    const {
        release_date: relaseDate,
        popularity: popularityDict,
        average_vote,
        vote_count: voteCount,
        download_hd,
        steam_hd
    } = await getDictionary(lang);

    return (
        <section>
            <div>
                <Image className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                       src={backdrop_path} alt="backdrop image"
                       height={859} width={483}
                       draggable={false}
                       priority
                />
            </div>

            <div className="grid grid-cols-12 py-12 gap-8">
                <div className="col-span-2">
                    <Image src={poster_path} height={300}
                           width={200} alt="poster path" draggable={false}/>
                </div>
                <div className="col-span-8">
                    <h2 className="font-bold text-slate-300 text-2xl">{title}</h2>
                    <p className="my-2 text-slate-400 italic">{overview}</p>
                    <ul className="text-slate-300 space-y-2 my-8">
                        <li>{relaseDate} :{release_date}</li>
                        <li> {average_vote}: {vote_average}</li>
                        <li>{voteCount} : {vote_count}</li>
                        <li>{popularityDict} : {popularity}</li>
                    </ul>

                </div>
                <div className="col-span-2 space-y-4">
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {steam_hd}
                    </button>
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {download_hd}
                    </button>
                </div>
            </div>
        </section>

    );
}

export default MovieDeatils;