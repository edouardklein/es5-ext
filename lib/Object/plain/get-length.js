// Return number of assigned properties;

var keys = Object.keys
  , f    = require('../../Function/functionalize')

module.exports = f(function () {
	return keys(this).length;
});