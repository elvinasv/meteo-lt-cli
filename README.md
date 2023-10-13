# Meteo.lt powered weather CLI app

## About

Weather in Lithuania CLI app (powered by [api.meteo.lt](https://api.meteo.lt/)). This is a proof of concept app that is not intended for production use but rather testing [yargs](https://github.com/yargs/yargs) library.

<img width="797" alt="image" src="https://github.com/elvinasv/meteo-lt-cli/assets/10553848/ce869723-481a-4615-906a-666919166448">

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Link the package (creates a symlink in the global `node_modules` folder to the current project)

```bash
npm link
```

4. Run the CLI

```bash
meteolt --help
```

5. Run without symlink

```bash
node index.js --help
```

## Usage

You can use the `meteolt` CLI with the following commands and options:

```bash
meteolt history
```

### Commands:

- `places`: List of places with forecast
- `stations`: List of all observable stations
- `history [stationId] [date]`: History from the specified station
- `forecast [placeCode]`: Forecast for the place

#### Global Options:

- `--version`: Show the version number
- `--plain`: Output as plain text instead of table (default: false)
- `--all`: Include all weather properties (default: false)
- `--period`, `--time`: Weather forecast period (choices: "today," "tomorrow," "week," default: "today")
- `--help`: Show help

### `places`

List of places where forecast is available

```bash
meteolt places
```

### `stations`

List of all observable stations

```bash
meteolt stations
```

### `forecast [placeCode]`

Get the weather forecast for a specific place.

```bash
meteolt forecast "kaunas" --period="week"
```

#### Positionals:

- `placeCode`: The code for the place (default: "vilnius")

### `history [stationId] [date]`

Retrieve historical weather data from the specified station.

```bash
meteolt history "vilniaus-ams" "2020-01-01"
```

#### Positionals:

- `stationId`: The ID of the station (default: "vilniaus-ams")
- `date`: Date in YYYY-MM-DD format or "latest" (default: "latest")
