function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = [];
    for (var i = 0; i <= Math.ceil(Math.sqrt(angka)); i++) {
        var str = ""
        if (angka % i === 0) {
            str = str + String(angka / i) + String(i)
            temp.push(str)
        }
    }
    // console.log(temp);
    var min = temp[0].length

    for (var i = 0; i < temp.length; i++) {
        if (min > temp[i].length) {
            min = temp[i].length
        }
    }
    return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2