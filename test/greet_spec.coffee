Greet = require("../greet");
describe 'greet', () ->
  it "should greet a person by name", () ->
    expect((new Greet()).greet("zzq")).to.match(/^hello/);
  
  it "should greet a person flirtatiously if drunk", () ->
    expect((new Greet()).greet("drunk", "zzq")).to.match(/^bonjour/);

