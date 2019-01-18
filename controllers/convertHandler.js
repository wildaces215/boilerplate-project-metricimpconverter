/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    input = input.replace(/[^0-9 /.//]/g, "");
    console.log(input);
    if (input == "") {
      //input = "";
      console.log(input);
      return -1;
    }
    if (input.indexOf("/") != -1) {
      var split = input.indexOf("/");
      //console.log(split);
      var numberOne, numberTwo;
      numberOne = input.slice(0, split);
      numberTwo = input.slice(split + 1);
      input = numberOne / numberTwo;
      console.log(input);
    }
    //console.log(input);
    var result = input;

    result = Number(result);
    return result;
  };

  this.getUnit = function(input) {
    var result;

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
