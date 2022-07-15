const ftoc = function(temp) {
  
  // Subtract 32 and divide by 1.8
  let ftocMath = (temp - 32) / 1.8;

  return Math.round(ftocMath * 10) / 10;

};

const ctof = function(temp) {

  // Multiply by 1.8 then add 32
  let ctofMath = (temp * 1.8) + 32;

  return Math.round(ctofMath * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
