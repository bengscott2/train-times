const getTrainTimes = require('../src/getTrainTimes');
const MockAdapter = require('axios-mock-adapter');
const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config()
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const mock = new MockAdapter(axios)
const expect = require('chai').expect

describe('#getTrainTimes', function () {
  it('calls API and returns data for given station', async function () {
    var apiUrl = `https://api.tfl.gov.uk/Line/london-overground/Arrivals/910GPCKHMQD?app_id=${APP_ID}&app_key=${APP_KEY}`
    var dataContent = [{destinationName: 'Highbury', expectedArrival: '2019-08-25T16:03:11Z'}]
    mock.onGet(apiUrl).reply(200, {
      test: [{data: 'test data'}]
    })
    var station = 'QueensRoadPeckham'
    result = await getTrainTimes(station)
    expect(result.test[0].data).to.equal('test data')
  })
})
