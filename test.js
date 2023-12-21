//testing of the js file
const assert = require('assert')
const app = require('./app')

assert.strictEqual(app.sayhello(),'Hello World');