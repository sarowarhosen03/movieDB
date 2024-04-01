

function movieLayout({children, movie}) {
    return (
    <main>
        {movie}
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            {children}
        </div>
    </main>

    );
}

export default movieLayout;