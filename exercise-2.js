function fpb(angka1, angka2) {
    // you can only write your code here!
    var tempAngkaSatu = []
    var tempAngkaDua = []
    var perbandinganArr = []

    for (var i = 1; i < angka1; i++) {
        if (angka1 % i === 0) {
            tempAngkaSatu.push(i)
        }
    }

    for (var i = 1; i < angka2; i++) {
        if (angka2 % i === 0) {
            tempAngkaDua.push(i)
        }
    }
    // console.log(tempAngkaSatu, tempAngkaDua)

    var temp = []
    for (var i = 0; i < tempAngkaSatu.length; i++) {
        for (var j = 0; j < tempAngkaDua.length; j++) {
            if (tempAngkaSatu[i] === tempAngkaDua[j]) {
                temp.push(tempAngkaSatu[i])
            }
        }
    }
    // console.log(temp)
    var max = temp[0]
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] > max) {
            max = temp[i]
        }
    }
    return max
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1