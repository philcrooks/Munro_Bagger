var Mountain = require("../models/mountain");
var assert = require("assert");

describe("Mountain", function(){

  var mountain;

  before(function(){

    mountain = new Mountain({

      _id: "57f6c141fcff223d05f1ebe0",
      name: "A'Bhuidheanach Bheag",
      height: 936.1,
      gridRef: {
        letters: "NN",
        eastings: "66069",
        northings: "77600"
      },
      latLng: {
        lat: 56.87039900,
        lng: -4.1988390
      },
      city: {
        id: 2645409,
        name: "Kingussie",
        latLng: {
          lat: 57.07996,
          lng: -4.05231
        }
      }
    })
  });

  it("should have id", function(){
    assert.strictEqual(mountain.id, "57f6c141fcff223d05f1ebe0");
  });

  it("should have name", function(){
    assert.strictEqual(mountain.name, "A'Bhuidheanach Bheag");
  });

  it("should have height", function(){
    assert.strictEqual(mountain.height, 936.1);
  });

  it("should have gridref", function(){
    assert.strictEqual(mountain.gridRef.toString(), "NN660776");
  });

  it("should have latlng", function(){
    assert.deepStrictEqual(mountain.latLng, {lat: 56.87039900, lng: -4.1988390});
  });

  // it("should not be bagged", function(){
  //   assert.strictEqual(mountain.bagged, false)
  // });

  it("weather 'city' should have an id", function(){
    assert.strictEqual(mountain.weatherStation.id, 2645409);
  });

  it("weather 'city' should have name", function(){
    assert.strictEqual(mountain.weatherStation.name, "Kingussie");
  });

  it("weather 'city' should have latlng", function(){
    assert.deepStrictEqual(mountain.weatherStation.latLng, {lat: 57.07996, lng: -4.05231});
  });
})
