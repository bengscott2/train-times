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
    apiResponse = response.data.matches[0].id
    getTrainTimes(response.data.matches[0].id, trainTimesPrinter)
  })
  .catch(function (error) {
    console.log(error.response)
  })
  return apiResponse
}
