import "dotenv/config";
import yargsGlobal from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { printData, log } from "./utils";
import {
  getAllStations,
  getStationHistory,
  getAllPlaces,
  getForecast,
  filterForecastProperties,
  filterHistoryProperties,
  filterForecastDataByPeriod,
} from "./weather";

yargsGlobal(hideBin(process.argv))
  .command({
    command: "stations",
    desc: "List of all observable stations",
    handler: async (argv) => {
      const stations = await getAllStations();
      log("All observable stations");
      printData(stations, argv.plain);
    },
  })
  .command({
    command: "places",
    desc: "List of places where forecast is available",
    handler: async (argv) => {
      const places = await getAllPlaces();
      printData(places, argv.plain);
    },
  })
  .command({
    command: "history [stationId] [date]",
    aliases: ["observations"],
    desc: "History from the specified station",
    builder: (yargs) => {
      yargs
        .positional("stationId", {
          type: "string",
          default: "vilniaus-ams",
        })
        .positional("date", {
          describe: "date in YYYY-MM-DD format or `latest`",
          type: "string",
          default: "latest",
        });
    },
    handler: async (argv) => {
      log(`Observations: ${argv.stationId} station on the ${argv.date} date`);
      const history = await getStationHistory(argv.stationId, argv.date);
      const filtered = argv.all
        ? history.observations
        : filterHistoryProperties(history.observations);

      printData(filtered, argv.plain);
    },
  })
  .command({
    command: "forecast [placeCode]",
    desc: "Forecast for the place",
    builder: (yargs) => {
      yargs.positional("placeCode", {
        type: "string",
        default: "vilnius",
      });
    },
    handler: async (argv) => {
      log(`Forecast: ${argv.placeCode}`);
      const forecast = await getForecast(argv.placeCode);

      const filteredByPeriod = filterForecastDataByPeriod(
        forecast.forecastTimestamps,
        argv.period,
      );
      const filteredByProperty = argv.all
        ? filteredByPeriod
        : filterForecastProperties(filteredByPeriod);

      printData(filteredByProperty, argv.plain);
    },
  })
  .option("plain", {
    describe: "output as plain text",
    type: "boolean",
    default: false,
  })
  .option("all", {
    describe: "Include all weather properties",
    type: "boolean",
    default: false,
  })
  .option("period", {
    alias: ["time"],
    choices: ["today", "tomorrow", "week"],
    describe: "Weather forecast period",
    default: "today",
  })
  .demandCommand(1)
  .help()
  .parse();
