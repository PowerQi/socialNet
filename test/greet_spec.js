// Generated by CoffeeScript 1.7.1
var add;

add = require("../greet");

describe('greet', function() {
  it("should greet a person by name", function() {
    return expect(add.add(1)(2).valueOf()).to.equal(3);
  });
  
});
  