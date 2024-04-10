import AsideBar from "@/components/AsideBar";


function movieLayout({children, movie, params: {lang}}) {
    return (
        <main>
            {movie}
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <AsideBar lang={lang}/>
                {children}
            </div>
        </main>
    );
}

export default movieLayout;