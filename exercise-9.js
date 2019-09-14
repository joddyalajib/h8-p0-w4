function checkAB(num) {
    // you can only write your code here!
    var tempA = []
    var tempB = []
    var number = 0
    for (var i = 0; i < num.length; i++) {
        if (num[i] === "a") {
            tempA.push(i)
        } else if (num[i] === "b") {
            tempB.push(i)
        }
    }
    // console.log(tempA, tempB)
    var result = []
    for (var i = 0; i < tempA.length; i++) {
        for (var j = 0; j < tempB.length; j++) {
            if (tempA[i] !== [] && tempB[j] !== []) {
                result.push(Math.abs(tempA[i] - tempB[j]))
            }
        }
    }
    console.log(result)
    var isVerified = false
    if (result.length >= 1) {
        if (result.includes(4)) {
            isVerified = true
            return isVerified
        }
    }
    // console.log(isVerified)
    if (isVerified === false || result.length < 1) {
        return false
    }

}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false