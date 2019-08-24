var argsParser =require('../src/argsParser');
var expect = require('chai').expect
describe('#argsParser', function () {
  it('turns raw args into options object', function () {
    var rawArgs = [
      '/usr/local/Cellar/node/12.4.0/bin/node',
      '/usr/local/bin/train-times',
      '--station',
      'shoreditch'
    ]
    var result = argsParser(rawArgs)
    expect(result.station).to.equal('shoreditch')
    expect(result).to.be.a('object')
  })
})
