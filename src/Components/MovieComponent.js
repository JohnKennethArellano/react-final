import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

export default function MovieComponent({ movie }) {
  return (
    <Box 
      sx={{
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: 'flex-start', 
      }}
    >
      <Card sx={{ maxWidth: 300, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          sx={{ height: 240 }}
          image={movie.Poster !== "N/A" ? movie.Poster : movie.Poster} 
          title={movie.Title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" sx={{ color: 'text.primary', fontSize: 14 }}>
            {movie.Title} ({movie.Year})
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
            {movie.Genre || "No Genre Available"}
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ marginLeft: 3, maxWidth: 300, overflowY: 'auto', maxHeight: 400 }}>
        <Typography sx={{ color: "text.primary", fontSize: 14 }}>
          {movie.Actors || "No actors listed"}
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 14, fontStyle: 'italic' }}>
          {movie.Genre || "No Genre Available"}
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 13, maxHeight: 100, overflowY: 'auto' }}>
          {movie.Plot || "No description available."}
        </Typography>
      </Box>
    </Box>
  );
}
