const argsParser = require('./argsParser');
const getTrainTimes = require('./getTrainTimes')
const getStationId = require('./getStationId')

export function trainTimes(args) {
  getStationId(argsParser(args).station, getTrainTimes)
}
