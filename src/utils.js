const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

export const fetchData = async (url = "") => {
  if (!isValidUrl(url)) {
    return null;
  }

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const printData = (data, plain) => {
  if (plain) {
    console.log(data);
  } else {
    console.table(data);
  }
};

export const log = (text, prefix = "🚀 meteolt: ") => {
  console.log("\x1b[1;33m%s\x1b[0m", prefix, text);
};

const weatherSummaryProperties = [
  "observationTimeUtc",
  "airTemperature",
  "windSpeed",
  "precipitation",
  "conditionCode",
];

export const filterWeatherProperties = (
  data = [],
  filterArray = weatherSummaryProperties
) => {
  return data.map((item) => {
    const summary = {};
    filterArray.forEach((prop) => {
      summary[prop] = item[prop];
    });
    return summary;
  });
};
