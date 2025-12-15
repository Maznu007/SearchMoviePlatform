import MovieCard from "../components/MovieCard";
function Home(){
    const movies = [
        {id: 1, title: "Inception", release_date: 2010},
        {id: 2, title: "The Matrix", release_date: 1999},
        {id: 3, title: "Interstellar", release_date: 2014},
    ]
    const handleSearch = (e) => {}
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search movies..." className="search-input"/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
}
export default Home;