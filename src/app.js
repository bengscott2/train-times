const argsParser = require('./argsParser');

export function trainTimes(args) {
  console.log(args)
  var options = argsParser(args)
  console.log(options)
}
