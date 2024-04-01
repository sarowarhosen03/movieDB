import Modal from "@/components/Modal";
import MovieDeatils from "@/components/MovieDeatils";

function moviePage({params: {lang, id}}) {
    return (
        <Modal>
            <MovieDeatils lang={lang} id={id}/>
        </Modal>

    );
}

export default moviePage;