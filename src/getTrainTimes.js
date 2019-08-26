const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config()
const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

const stationIdList = {
  QueensRoadPeckham: '910GPCKHMQD'
}

module.exports = async function getTrainTimes (station, trainTimesPrinter) {
  var stationId = stationIdList[station.station]
  var apiUrl = `https://api.tfl.gov.uk/StopPoint/${stationId}/Arrivals?app_id=${APP_ID}&app_key=${APP_KEY}`
  var apiResponse;
  await axios.get(apiUrl)
  .then(function (response) {
    apiResponse = response
  })
  .catch(function (error) {
    apiResponse = response
  })
  .finally(function () {
    console.log(trainTimesPrinter(apiResponse.data))
  })
  return apiResponse.data
}
