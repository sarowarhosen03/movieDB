
import MovieItem from "@/components/MovieItem";
import {getDictionary} from "@/lib/getDictionary";

async function MoviList({lang}) {
    const movies = await import("../db/movies.json").then(module => module.default) || [];
    const {no_movie_found} = await getDictionary(lang)

    return (
        <div className="content ">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 h-dvh overflow-y-scroll">
                {(!movies || !movies.results) && <div className=" h-dvh  flex items-center justify-center  text-center">

                    <p className="  text-2xl dark:text-whit ">
                        {no_movie_found}
                    </p></div>}
                {movies.results.map((movie) => (
                    <MovieItem key={movie.id} lang={lang} {...movie}/>
                ))}

            </div>
        </div>
    );
}

export default MoviList;