export  default  async  function  getImportedMovies(){
    const movies = await import("../db/movies.json").then(module => module.default) || [];
    return  movies.results;
}