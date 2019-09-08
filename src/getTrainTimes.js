const dotenv = require('dotenv');
dotenv.config({path: __dirname + '/.env'});
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;
const timesApi = require('./apiCalls').timesApi


module.exports = async function getTrainTimes (stationId, trainTimesPrinter) {
  var apiResponse;
  await timesApi.get(`${stationId}/Arrivals?app_id=${APP_ID}&app_key=${APP_KEY}`)
  .then(function (response) {
    apiResponse = response.data
    console.log(trainTimesPrinter(apiResponse))
  })
  .catch(function (error) {
    console.log(error)
  })
  return apiResponse
}
