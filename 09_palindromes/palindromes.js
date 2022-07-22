const palindromes = function (str) {

    let fwrdStr = str.replace(/[^A-Za-z]/gi, '');
    // let fwrdStr = "";
    let bwrdStr = "";

    // for (let i = 0; i < palnStr.length; i++) {
    //     fwrdStr += palnStr[i];
    // }

    for (let i = fwrdStr.length - 1; i >= 0; i--) {
        bwrdStr += fwrdStr[i];
    }
        
    if (fwrdStr.toLowerCase() === bwrdStr.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
