const removeFromArray = function(arr, input1, input2, input3, input4) {
   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === input1 || arr[i] === input2 || arr[i] === input3 || arr[i] === input4) {
            arr.splice(i, 1);
            i--;
        } 
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
