const sumAll = function(inputNum, loopNum) {
    let total = 0;

    if (typeof(inputNum) !== `number` || typeof(loopNum) !== `number`) {
        return `ERROR`;
    }
    else {
        if (inputNum <= 100 && inputNum > 0) {
            for (let i = 0; i < loopNum; i++) {
                total += inputNum;
                inputNum++;
            }
        }
        else if (inputNum >= 100) {
            for (let i = inputNum; i >= loopNum; i--) {
                total += inputNum;
                inputNum--;
            }
        }
        else {
            return `ERROR`;
        }
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
