

import MovieDeatils from "@/components/MovieDeatils";
import AsideBar from "@/components/AsideBar";
import {locales} from "@/middleware";
import getImportedMovies from "@/lib/getImportedMovies";
export async function generateMetadata({ params, searchParams }, parent) {
    const  movies = await getImportedMovies();
    const movie = movies.find(movie => movie.id.toString() === params.id);
if(!movie){
    return {
        title: "Movie not found",
        description: "Movie not found",
    }
}
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: movie?.title + "| Cine Rental",
        openGraph: {
            images: [movie?.poster_path, ...previousImages],
        },
        description: movie?.overview,
    }
}


 export async  function generateStaticParams(){

  const movies = await import("../../../../db/movies.json").then(module => module.default) || [];
  return  locales.reduce((acc, lang) => {
        return acc.concat(movies.results.map(movie => {
            return {
                    lang:lang.code,
                    id: movie.id.toString()

            }
        }))
    }
    , [])

}

function MovieDeatilsPage({params}) {

    return (
        <>
            <AsideBar lang={params.lang}/>
            <MovieDeatils id={params.id} lang={params.lang} />

        </>
    );
}

export default  MovieDeatilsPage;