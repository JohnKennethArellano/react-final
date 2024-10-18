import { Box } from "@mui/material";
import MovieComponent from "./MovieComponent"; 

export default function BodyComponent({ movies }) {
  return (
    <Box 
      sx={{
        marginTop: 2,
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {movies.map(movie => (
        <MovieComponent key={movie.imdbID} movie={movie} />
      ))}
    </Box>
  );
}
