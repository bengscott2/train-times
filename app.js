const argsParser = require('./src/argsParser');
const getTrainTimes = require('./src/getTrainTimes')
const getStationId = require('./src/getStationId')

module.exports = function trainTimes(args) {
  console.log('Searching for train times..');
  getStationId(argsParser(args).station, getTrainTimes)
}
