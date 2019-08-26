const axios = require('axios')
var timesApiUrl = `https://api.tfl.gov.uk/StopPoint/`
var idApiUrl = `https://api.tfl.gov.uk/StopPoint/Search/`

module.exports =  {
  timesApi: axios.create({
    baseURL: timesApiUrl
  }),
  idApi: axios.create({
    baseURL: idApiUrl
  })
}
