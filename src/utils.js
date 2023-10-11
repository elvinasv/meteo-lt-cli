export const meteoApiUrl =
  process.env.WEATHER_API_URL || "https://api.meteo.lt/v1";

export const fetchData = async (url = "") => {
  try {
    const response = await fetch(
      "https://api.meteo.lt/v1/stations/vilniaus-ams/observations/latest"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
