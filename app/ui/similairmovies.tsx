const SimilairMovies = ({ similairMovies }: any) => {
    return (
      <div className="grid-container">
        {similairMovies.map((movie) => (
          <p key={movie.id}>ddd</p>
        ))}
      </div>
    );
};

export default SimilairMovies;