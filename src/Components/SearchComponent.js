import { Box, TextField, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";

const options = [
  { value: true, label: "Short" },
  { value: false, label: "Full" },
];

export default function SearchComponent({ onSearch }) {
    
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [movieTitle, setMovieTitle] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("Movie Title:", movieTitle);
    console.log("Year:", year);
    console.log("Selected Option:", selectedValue);
    onSearch({ movieTitle, year, selectedValue });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: 'end',
        alignItems: 'center',
        height: 50,
        width: '100%', 
      }}
    >
      <TextField 
        variant="outlined"  
        name="name" 
        label="Movie title" 
        value={movieTitle} 
        onChange={(e) => setMovieTitle(e.target.value)} 
      />
      <TextField 
        variant="outlined" 
        sx={{ marginLeft : 2 }} 
        name="year" 
        label="Year"
        value={year} 
        onChange={(e) => setYear(e.target.value)} 
      />

      <Select
        labelId="select-label"
        value={selectedValue}
        onChange={handleChange}
        sx={{ width: 'fit-content', marginLeft : 2 }} 
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <Button 
        variant="contained" 
        sx={{ height: 54, marginLeft : 2 }} 
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
}
