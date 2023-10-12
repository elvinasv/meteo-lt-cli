import { fetchData } from "./utils.js";

export const meteoApiUrl =
  process.env.WEATHER_API_URL || "https://api.meteo.lt/v1";

export const getAllStations = async () => {
  return await fetchData(`${meteoApiUrl}/stations`);
};
