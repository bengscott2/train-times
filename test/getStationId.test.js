const getStationId = require('../src/getStationId');
const MockAdapter = require('axios-mock-adapter');
const idApiMock = require('../src/apiCalls').idApi
const dotenv = require('dotenv');
dotenv.config()
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const idMock = new MockAdapter(idApiMock)
const expect = require('chai').expect
const sinon = require('sinon')

describe('#getStationId', function () {
  it('calls API and searches for station that was entered', async function () {
    var searchStopApiUrl = `https://api.tfl.gov.uk/StopPoint/Search/queensroadpeckham?app_id=${APP_ID}&app_key=${APP_KEY}`
    idMock.onGet(searchStopApiUrl).reply(200, {
      matches: [
          {
              "id": "910GPCKHMQD",
              "name": "Queens Road Peckham Rail Station"
          }
      ],
      total: 1
    })
    stationName = 'queensroadpeckham'
    var getTrainTimesMock = sinon.spy()
    result = await getStationId(stationName, getTrainTimesMock)
    expect(result).to.equal("910GPCKHMQD")
  })

  it('calls getTrainTimes function', async function () {
    var searchStopApiUrl = `https://api.tfl.gov.uk/StopPoint/Search/queensroadpeckham?app_id=${APP_ID}&app_key=${APP_KEY}`
    idMock.onGet(searchStopApiUrl).reply(200, {
      matches: [
          {
              "id": "910GPCKHMQD",
              "name": "Queens Road Peckham Rail Station"
          }
      ],
      total: 1
    })
    var stationName = 'queensroadpeckham'
    var getTrainTimesMock = sinon.spy()
    result = await getStationId(stationName, getTrainTimesMock)
    expect(getTrainTimesMock.called).to.equal(true)
  })
})
