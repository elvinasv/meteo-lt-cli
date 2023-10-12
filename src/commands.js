import "dotenv/config";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { printData, log } from "./utils.js";
import { getAllStations } from "./weather.js";

yargs(hideBin(process.argv))
  .command({
    command: "stations",
    desc: "List all observable stations",
    handler: async (argv) => {
      const stations = await getAllStations();
      log(`List of all observable stations`);
      printData(stations);
    },
  })
  .parse();
