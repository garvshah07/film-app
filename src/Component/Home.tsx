import useAllFilms from "../lib/hooks/index";
import MovieDetails from "./MovieDetails";

interface Film {
  id: string;
  title: string;
  director: string;
}

const Home = () => {
  const { data, loading, error } = useAllFilms();

  if (loading) {
    return (
      <div className="flex justify-center text-4xl text-gray-950 ">
        Loading...
      </div>
    );
  }
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.allFilms?.films?.map((film: Film) => (
        <MovieDetails key={film.id} film={film} />
      ))}
    </div>
  );
};

export default Home;
