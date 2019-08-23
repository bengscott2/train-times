import arg from 'arg';

function argParser (rawArgs) {
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
export function trainTimes(args) {
  var options = argParser(args)
  console.log(options)
}
