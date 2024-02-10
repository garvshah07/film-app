const MovieDetails = ({ film }) => {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">{film?.title}</h2>
      <div>
        <strong>Director:</strong> {film?.director}
      </div>
      <div>
        {" "}
        <strong>Producers:</strong> {film?.producers.join(", ")}
      </div>
      <div>
        <strong>Release Date:</strong> {film?.releaseDate}
      </div>
    </div>
  );
};

export default MovieDetails;
