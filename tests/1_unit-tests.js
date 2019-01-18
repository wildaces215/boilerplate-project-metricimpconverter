/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      var input = "32L";
      var inputTwo = "45l";
      var inputThree = "567r";
      assert.equal(convertHandler.getNum(input), 32);
      assert.equal(convertHandler.getNum(inputTwo), 45);
      assert.equal(convertHandler.getNum(inputThree), 567);
      done();
    });

    test("Decimal Input", function(done) {
      var input = "3.45";
      var inputTwo = "5.67";
      var inputThree = "2.67";
      assert.equal(convertHandler.getNum(input), 3.45);
      assert.equal(convertHandler.getNum(inputTwo), 5.67);
      assert.equal(convertHandler.getNum(inputThree), 2.67);
      done();
    });

    test("Fractional Input", function(done) {
      var input = "3/4";
      var inputTwo = "1/2";
      var inputThree = "8/9";
      assert.equal(convertHandler.getNum(input), 3 / 4);
      assert.equal(convertHandler.getNum(inputTwo), 1 / 2);
      assert.equal(convertHandler.getNum(inputThree), 8 / 9);
      done();
    });

    test("Fractional Input w/ Decimal", function(done) {
      var input = "3.45/4";
      assert.equal(convertHandler.getNum(input), 0.8625);
      done();
    });

    test("Invalid Input (double fraction)", function(done) {
      done();
    });

    test("No Numerical Input", function(done) {
      var input = "helloworld!";
      var inputTwo = "What???";
      var inputThree = "Who is this!";
      assert.equal(convertHandler.getNum(input), -1);
      assert.equal(convertHandler.getNum(inputTwo), -1);
      assert.equal(convertHandler.getNum(inputThree), -1);
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG"
      ];
      input.forEach(function(ele) {
        //assert
      });
      done();
    });

    test("Unknown Unit Input", function(done) {
      //done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      //see above example for hint
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function() {
    test("Gal to L", function(done) {
      var input = [5, "gal"];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("L to Gal", function(done) {
      //done();
    });

    test("Mi to Km", function(done) {
      //done();
    });

    test("Km to Mi", function(done) {
      //done();
    });

    test("Lbs to Kg", function(done) {
      //done();
    });

    test("Kg to Lbs", function(done) {
      //done();
    });
  });
});
