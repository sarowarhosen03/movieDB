
import {redirect} from "next/navigation";

function MoviePage(props) {
      redirect(`/${props.params?.lang}`)
    return null;
}

export default MoviePage;