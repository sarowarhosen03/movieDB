
import MovieItem from "@/components/MovieItem";
import {getDictionary} from "@/lib/getDictionary";
import getImportedMovies from "@/lib/getImportedMovies";

async function MoviList({lang}) {
    const movies = await getImportedMovies()
    const {no_movie_found} = await getDictionary(lang)
const gnreIdList = await  import('@/db/gnre-id.json');
    return (
        <div className="content ">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 h-dvh overflow-y-scroll">
                {!movies && <div className=" h-dvh  flex items-center justify-center  text-center">

                    <p className="  text-2xl dark:text-whit ">
                        {no_movie_found}
                    </p></div>}
                {movies.map((movie) => (
                    <MovieItem key={movie.id} lang={lang} gnreIdList={gnreIdList} {...movie}/>
                ))}

            </div>
        </div>
    );
}

export default MoviList;