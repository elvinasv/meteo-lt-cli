import "dotenv/config";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { printData, log, filterWeatherProperties } from "./utils.js";
import { getAllStations, getStationHistory } from "./weather.js";

yargs(hideBin(process.argv))
  .command({
    command: "stations",
    desc: "List all observable stations",
    handler: async (argv) => {
      const stations = await getAllStations();
      log(`List of all observable stations`);
      printData(stations, argv.plain);
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
      log(
        `Getting observations about ${argv.stationId} station on ${argv.date} date`
      );
      const history = await getStationHistory(argv.stationId, argv.date);
      const filtered = argv.all
        ? history.observations
        : filterWeatherProperties(history.observations);

      printData(filtered, argv.plain);
    },
  })
  .option("json", {
    describe: "output as json text",
    type: "boolean",
    default: false,
  })
  .option("all", {
    describe: "include all weather properties",
    type: "boolean",
    default: false,
  })
  .demandCommand(1)
  .help()
  .parse();
