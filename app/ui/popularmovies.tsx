const PopularMovies = ({ popularMovies }: any) => {
    return (
      <div className="grid-container">
        {popularMovies.results.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    );
};

export default PopularMovies;