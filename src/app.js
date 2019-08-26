const argsParser = require('./argsParser');
const getTrainTimes = require('./getTrainTimes')

export function trainTimes(args) {
  getTrainTimes(argsParser(args))
}
