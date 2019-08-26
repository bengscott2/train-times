const argsParser = require('./argsParser');
const getTrainTimes = require('./getTrainTimes')
const trainTimesPrinter = require('./trainTimesPrinter')

export function trainTimes(args) {
  getTrainTimes(argsParser(args), trainTimesPrinter)
}
