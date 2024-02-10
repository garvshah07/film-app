import { gql } from "@apollo/client";

const ALL_FILMS = gql`
  query AllFilms {
    allFilms {
      films {
        id
        title
        producers
        director
        releaseDate
      }
    }
  }
`;

export { ALL_FILMS };
