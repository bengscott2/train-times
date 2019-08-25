const argsParser = require('./argsParser');
const getTrainTimes = require('./getTrainTimes')

export function trainTimes(args) {
  var options = argsParser(args)
  console.log(options)
  getTrainTimes('Shoreditch')
}
