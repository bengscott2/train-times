function _stationParser (stationName) {
  return stationName.replace(' Rail Station', '')
}

function _sortArrivals (arrivalsData) {
  return arrivalsData.sort((a, b) => new Date(a.timeToLive).getTime() - new Date(b.timeToLive).getTime())
}

function _timeParser (dateTime) {
  return new Date(dateTime).toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: false }).slice(0,5)
}

function _arrivalParser (arrival) {
  return `${_timeParser(arrival.timeToLive)} ${_stationParser(arrival.destinationName)}`
}

module.exports = function trainTimesPrinter(stationData) {
  const titleBreak = '----------------------------------'
  var header = _stationParser(stationData[0].stationName)
  var printedData = []
  _sortArrivals(stationData).forEach(function(arrival, index) {
    printedData.push(`${index+1}. ${_arrivalParser(arrival)}`)
  })
  return `${header}\n${titleBreak}\n${printedData.join(`\n`)}`
}
