function angkaPrima(angka) {
    // you can only write your code here!
    var temp = 0

    for (var i = 0; i <= angka; i++) {
        // console.log(angka % i)
        if (angka % i === 0) {
            // console.log(angka[i])
            temp = temp + 1
        }
    }
    if (temp !== 2) {
        return false
    } else {
        return true
    }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false