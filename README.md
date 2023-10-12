# Meteo.lt powered weather CLI app

## About

Weather in Lithuania CLI app (powered by [api.meteo.lt](https://api.meteo.lt/)). This is a proof of concept app that is not intended for production use but rather testing [yargs](https://github.com/yargs/yargs) library.

<img width="797" alt="image" src="https://github.com/elvinasv/meteo-lt-cli/assets/10553848/ce869723-481a-4615-906a-666919166448">

## Installation

TBC

## TODO

- [ ] Add caching for places
  - [ ] fetch places if results older than 1 week
  - [ ] write results to the file
- [ ] Add typescript
- [ ] Allow to run globally

## Usage

You can use the `meteo-lt-cli` CLI with the following commands and options:

```
node index.js history
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

```
node index.js places
```

### `stations`

List of all observable stations

```
node index.js stations
```

### `forecast [placeCode]`

Get the weather forecast for a specific place.

```
node index.js forecast "kaunas" --period="week"
```

#### Positionals:

- `placeCode`: The code for the place (default: "vilnius")

### `history [stationId] [date]`

Retrieve historical weather data from the specified station.

```
node index.js history "vilniaus-ams" "2020-01-01"
```

#### Positionals:

- `stationId`: The ID of the station (default: "vilniaus-ams")
- `date`: Date in YYYY-MM-DD format or "latest" (default: "latest")
