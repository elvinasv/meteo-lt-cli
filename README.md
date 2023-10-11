# Meteo.lt powered weather CLI app

## About

Weather in Lithuania CLI app (powered by [api.meteo.lt](https://api.meteo.lt/)). This is a proof of concept app that is not intended for production use but rather testing [yargs](https://github.com/yargs/yargs) library.

## Installation

TBC

## TODO

- [ ] Add basic CLI functionality
- [ ] Fetch data from meteo.lt
- [ ] Display data in CLI
- [ ] Add typescript
- [ ] Allow to run globally

## Usage

- meteolt [command] [options]

### Commands

- Station list
  - `meteolt stations`
- Observations
  - `meteolt observations [stationId]`
- places
  - `meteolt places`
- forecast [placeId]
  - `meteolt forecast [placeId]`
