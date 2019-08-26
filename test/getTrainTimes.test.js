const getTrainTimes = require('../src/getTrainTimes');
const MockAdapter = require('axios-mock-adapter');
const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config()
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const mock = new MockAdapter(axios)
const expect = require('chai').expect
const sinon = require('sinon')

describe('#getTrainTimes', function () {
  it('calls API and returns data for given station', async function () {
    var apiUrl = `https://api.tfl.gov.uk/StopPoint/910GPCKHMQD/Arrivals?app_id=${APP_ID}&app_key=${APP_KEY}`
    mock.onGet(apiUrl).reply(200, {
      test: [{data: 'test data'}]
    })
    var station = {station: 'QueensRoadPeckham'}
    var printerMock = sinon.spy()
    result = await getTrainTimes(station, printerMock)
    expect(result.test[0].data).to.equal('test data')
  })

  it('calls printer function', async function () {
    var apiUrl = `https://api.tfl.gov.uk/StopPoint/910GPCKHMQD/Arrivals?app_id=${APP_ID}&app_key=${APP_KEY}`
    mock.onGet(apiUrl).reply(200, {
      test: [{data: 'test data'}]
    })
    var station = {station: 'QueensRoadPeckham'}
    var printerMock = sinon.spy()
    result = await getTrainTimes(station, printerMock)
    expect(printerMock.called).to.equal(true)
  })
})
