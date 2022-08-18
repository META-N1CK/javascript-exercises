const fibonacci = function (num) {
  //Get number
  const fibArray = [0, 1];
  //Loop number
  if (num > 0) {
    for (let i = 2; i <= num; i++) {
      //Store loop of number in an array
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray[num];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
