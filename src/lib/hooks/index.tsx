import { useQuery } from "@apollo/client";
import { ALL_FILMS } from "../queries";

const useAllFilms  = () => {
  const { data, loading, error } = useQuery(ALL_FILMS);

  return { data, loading, error };
};

export default useAllFilms;
