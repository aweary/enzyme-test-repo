var path = require('path')

const REACT_PACKAGE = require('./node_modules/react/package.json')
const ENZYME_PACKAGE = require('./node_modules/enzyme/package.json')
const JSDOM_PACKAGE = require('./node_modules/jsdom/package.json')

const DELIMITER = '\t* * * * * * * * * * * * * * * * * * * * * * * * * * * \n'

console.log(
  DELIMITER,
  '\n',
  '   This test is being run with React '  + REACT_PACKAGE.version +
  ', enzyme ' + ENZYME_PACKAGE.version + ', and JSDom ' + JSDOM_PACKAGE.version,
  '\n',
  '\n',
  DELIMITER
)
