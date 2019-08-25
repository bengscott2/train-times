const trainTimesPrinter = require('../src/trainTimesPrinter')
const expect = require('chai').expect

describe('#trainTimesPrinter', function () {
  it('parses data and returns in a train arrival board style', function () {
    expect(trainTimesPrinter(testData)).to.equal('Queens Road Peckham\n----------------------------------\n1. 18:16 Clapham Junction\n2. 18:33 Highbury & Islington\n3. 18:46 Clapham Junction\n4. 19:03 Highbury & Islington')
  })
})

const testData = [
  {
    '$type': 'Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities',
    id: '1877382706',
    operationType: 1,
    vehicleId: '3-V8tMompFB-QHa53SUG_A',
    naptanId: '910GPCKHMQD',
    stationName: 'Queens Road Peckham Rail Station',
    lineId: 'london-overground',
    lineName: 'London Overground',
    platformName: 'Platform 2',
    direction: '',
    bearing: '',
    destinationNaptanId: '910GCLPHMJC',
    destinationName: 'Clapham Junction Rail Station',
    timestamp: '2019-08-25T17:02:55.2452367Z',
    timeToStation: 792,
    currentLocation: '',
    towards: '',
    expectedArrival: '2019-08-25T17:16:07Z',
    timeToLive: '2019-08-25T17:16:07Z',
    modeName: 'overground',
    timing: {
      '$type': 'Tfl.Api.Presentation.Entities.PredictionTiming, ' +
        'Tfl.Api.Presentation.Entities',
      countdownServerAdjustment: '00:00:00',
      source: '0001-01-01T00:00:00',
      insert: '0001-01-01T00:00:00',
      read: '2019-08-25T17:03:07.673Z',
      sent: '2019-08-25T17:02:55Z',
      received: '0001-01-01T00:00:00'
    }
  },
  {
    '$type': 'Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities',
    id: '1901380206',
    operationType: 1,
    vehicleId: '4D-Oy204Zvjg1yS_yrEi9g',
    naptanId: '910GPCKHMQD',
    stationName: 'Queens Road Peckham Rail Station',
    lineId: 'london-overground',
    lineName: 'London Overground',
    platformName: 'Platform Unknown',
    direction: '',
    bearing: '',
    destinationNaptanId: '910GCLPHMJC',
    destinationName: 'Clapham Junction Rail Station',
    timestamp: '2019-08-25T17:02:55.2452367Z',
    timeToStation: 2592,
    currentLocation: '',
    towards: '',
    expectedArrival: '2019-08-25T17:46:07Z',
    timeToLive: '2019-08-25T17:46:07Z',
    modeName: 'overground',
    timing: {
      '$type': 'Tfl.Api.Presentation.Entities.PredictionTiming, ' +
        'Tfl.Api.Presentation.Entities',
      countdownServerAdjustment: '00:00:00',
      source: '0001-01-01T00:00:00',
      insert: '0001-01-01T00:00:00',
      read: '2019-08-25T17:03:07.673Z',
      sent: '2019-08-25T17:02:55Z',
      received: '0001-01-01T00:00:00'
    }
  },
  {
    '$type': 'Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities',
    id: '-230070053',
    operationType: 1,
    vehicleId: '6GtNGOtUYohL9nd5AESA9w',
    naptanId: '910GPCKHMQD',
    stationName: 'Queens Road Peckham Rail Station',
    lineId: 'london-overground',
    lineName: 'London Overground',
    platformName: 'Platform 1',
    direction: 'inbound',
    bearing: '',
    destinationNaptanId: '910GHGHI',
    destinationName: 'Highbury & Islington Rail Station',
    timestamp: '2019-08-25T17:02:55.2452367Z',
    timeToStation: 1812,
    currentLocation: '',
    towards: '',
    expectedArrival: '2019-08-25T17:33:07Z',
    timeToLive: '2019-08-25T17:33:07Z',
    modeName: 'overground',
    timing: {
      '$type': 'Tfl.Api.Presentation.Entities.PredictionTiming, ' +
        'Tfl.Api.Presentation.Entities',
      countdownServerAdjustment: '00:00:00',
      source: '0001-01-01T00:00:00',
      insert: '0001-01-01T00:00:00',
      read: '2019-08-25T17:03:07.673Z',
      sent: '2019-08-25T17:02:55Z',
      received: '0001-01-01T00:00:00'
    }
  },
  {
    '$type': 'Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities',
    id: '-1682274958',
    operationType: 1,
    vehicleId: '92KuF-GKqHi6dzNMaVuEuQ',
    naptanId: '910GPCKHMQD',
    stationName: 'Queens Road Peckham Rail Station',
    lineId: 'london-overground',
    lineName: 'London Overground',
    platformName: 'Platform Unknown',
    direction: 'inbound',
    bearing: '',
    destinationNaptanId: '910GHGHI',
    destinationName: 'Highbury & Islington Rail Station',
    timestamp: '2019-08-25T17:02:55.2452367Z',
    timeToStation: 3612,
    currentLocation: '',
    towards: '',
    expectedArrival: '2019-08-25T18:03:07Z',
    timeToLive: '2019-08-25T18:03:07Z',
    modeName: 'overground',
    timing: {
      '$type': 'Tfl.Api.Presentation.Entities.PredictionTiming, ' +
        'Tfl.Api.Presentation.Entities',
      countdownServerAdjustment: '00:00:00',
      source: '0001-01-01T00:00:00',
      insert: '0001-01-01T00:00:00',
      read: '2019-08-25T17:03:07.673Z',
      sent: '2019-08-25T17:02:55Z',
      received: '0001-01-01T00:00:00'
    }
  }
]
