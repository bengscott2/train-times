const getTrainTimes = require('../src/getTrainTimes');
const MockAdapter = require('axios-mock-adapter');
const timesApiMock = require('../src/apiCalls').timesApi
const dotenv = require('dotenv');
dotenv.config()
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const timesMock = new MockAdapter(timesApiMock)
const expect = require('chai').expect
const sinon = require('sinon')

describe('#getTrainTimes', async function () {
  it('calls API and returns data for given station', async function () {
    var apiUrl = `https://api.tfl.gov.uk/StopPoint/910GPCKHMQD/Arrivals?app_id=${APP_ID}&app_key=${APP_KEY}`
    timesMock.onGet(apiUrl).reply(200, {
      test: [{data: 'test data'}]
    })
    var stationId = '910GPCKHMQD'
    var printerMock = sinon.spy()
    result = await getTrainTimes(stationId, printerMock)
    expect(result.test[0].data).to.equal('test data')
  })

  it('calls printer function', async function () {
    var apiUrl = `https://api.tfl.gov.uk/StopPoint/910GPCKHMQD/Arrivals?app_id=${APP_ID}&app_key=${APP_KEY}`
    timesMock.onGet(apiUrl).reply(200, {
      test: [{data: 'test data'}]
    })
    var stationId = '910GPCKHMQD'
    var printerMock = sinon.spy()
    result = await getTrainTimes(stationId, printerMock)
    expect(printerMock.called).to.equal(true)
  })
})
