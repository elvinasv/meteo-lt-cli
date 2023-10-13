import { fetchData } from "./utils.js";

export const meteoApiUrl =
  process.env.WEATHER_API_URL || "https://api.meteo.lt/v1";

export const getAllStations = async () => fetchData(`${meteoApiUrl}/stations`);

export const getStationHistory = async (stationCode, date) =>
  fetchData(`${meteoApiUrl}/stations/${stationCode}/observations/${date}`);

export const getAllPlaces = async () => fetchData(`${meteoApiUrl}/places`);

export const getForecast = async (placeCode) =>
  fetchData(`${meteoApiUrl}/places/${placeCode}/forecasts/long-term`);

export const observationSummaryProperties = [
  "observationTimeUtc",
  "airTemperature",
  "windSpeed",
  "precipitation",
  "conditionCode",
];

export const forecastSummaryProperties = [
  "forecastTimeUtc",
  "airTemperature",
  "windSpeed",
  "totalPrecipitation",
  "conditionCode",
];

const filterWeatherProperties = (data = [], filterArray = []) =>
  data.map((item) => {
    const summary = {};
    filterArray.forEach((prop) => {
      summary[prop] = item[prop];
    });
    return summary;
  });

export const filterHistoryProperties = (data = []) =>
  filterWeatherProperties(data, observationSummaryProperties);

export const filterForecastProperties = (data = []) =>
  filterWeatherProperties(data, forecastSummaryProperties);

export const filterForecastDataByPeriod = (data = [], period = "today") => {
  const result = data.filter(({ forecastTimeUtc = null }) => {
    const today = new Date();
    const date = new Date(forecastTimeUtc);
    const isToday = date.getDate() === today.getDate();
    const isTomorrow = date.getDate() === today.getDate() + 1;

    switch (period) {
      case "today":
        return isToday;
      case "tomorrow":
        return isTomorrow;
      case "week":
        return true;
      default:
        return true;
    }
  });

  return result;
};
