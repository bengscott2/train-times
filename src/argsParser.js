const arg = require('arg')

module.exports = function argsParser (rawArgs) {
  const args = arg(
    {
      '--station': String,
      '-s': '--station'
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    station: args['--station'] || false
  }
}
