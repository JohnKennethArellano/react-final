import axios from "axios";
import { API_KEY } from "./Keys";

export const getAxios = async (term, year, plot) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(term)}${year ? `&y=${encodeURIComponent(year)}` : ''}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};
