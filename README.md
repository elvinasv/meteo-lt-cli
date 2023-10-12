# Meteo.lt powered weather CLI app

## About

Weather in Lithuania CLI app (powered by [api.meteo.lt](https://api.meteo.lt/)). This is a proof of concept app that is not intended for production use but rather testing [yargs](https://github.com/yargs/yargs) library.

## Installation

TBC

## TODO

- [x] Init project
- [ ] Add basic CLI functionality
  - [x] stations
  - [ ] Observations
  - [ ] places
  - [ ] forecast
- [ ] Fetch data from meteo.lt
- [ ] Display data in CLI
- [ ] Add typescript
- [ ] Allow to run globally

## Usage

- meteolt [command] [options]

### Commands

#### Station

List of all stations

- `meteolt stations`

#### Observations

Observations from the station. Latest observation by default. Up to 10 years of historical data provided.
Optional argument stationId (default is vilnius), default date - latest, (other in format YYYY-MM-DD)

- `meteolt observation <stationId> <date>`
  - alias `meteolt -ob <stationId> <date>`
    - `--latest, -l` - show latest only

#### Places

Places - the list of places that have weather forecast

- `meteolt places`

#### Forecast

Forecast for the place. Default place - Vilnius. Verbose - show all forecast data.
Default - short forecast. Default time - today.

- `meteolt forecast <placeId>`
  - details
    - `-v, --verbose` - show all forecast data
    - `-s, --short` - show short forecast data (default)
  - time
    - `-d, --day` - show forecast for the day (default)
    - `-t, --tomorrow` - show forecast for tomorrow
    - `-w, --week` - show forecast for the week
