const dotenv = require('dotenv');
dotenv.config()
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const trainTimesPrinter = require('./trainTimesPrinter')
const idApi = require('./apiCalls').idApi


module.exports = async function getStationId (stationName, getTrainTimes) {
  var apiResponse;
  await idApi.get(`${stationName}?app_id=${APP_ID}&app_key=${APP_KEY}`)
  .then(function (response) {
    if (response.data.total > 0) {
      getTrainTimes(response.data.matches[0].id, trainTimesPrinter)
    } else {
      console.log('The name of the station you entered returned 0 results');
    }
  })
  .catch(function (error) {
    console.log(error.response)
  })
}
