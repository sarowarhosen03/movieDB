import {deleteMovie, getMovie, updateMovie} from "@/db/api-data";

export  async function  GET(request,{params}) {
    const {id} = params;
    if(!id){
        return new Response("Bad Request",{status:400})
    }
    const movie = getMovie(id);
    if(!movie){
        return new Response("Not Found",{status:404})
    }
    return new Response(JSON.stringify(movie),{status:200})
}


export  async function  PATCH(request,{params}) {
    const {id} = params;
    const {title} = await request.json();
    if(!id||!title){
        return new Response("Bad Request",{status:400})
    }
    try {
        const  newMovie = updateMovie({id,title});
        return new Response(JSON.stringify(newMovie),{status:200})
    }catch (error){
        return new Response(error?.message,{status:500})
    }
}

export  async function  DELETE(request,{params}) {
    const {id} = params;
    if(!id){
        return new Response("Bad Request",{status:400})
    }
    try {
        const movie = deleteMovie(id);

        return new Response(JSON.stringify(movie),{status:200})
    }catch (error){
        return new Response(error?.message,{status:500})
    }

}

