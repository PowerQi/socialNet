var assert = require("assert");
exports.add = add;
function add(num) {
  var value = function(otherNum) {
    return add(num + otherNum);
  };
  value.valueOf = function() { return num; };
  return value;
}

