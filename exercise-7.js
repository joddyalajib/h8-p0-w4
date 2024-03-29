function urutkanAbjad(str) {
    // you can only write your code here!
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var number = []
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            if (str[i] === alphabet[j])
                number.push(j)
        }
    }
    number.sort(function (a, b) {
        return a - b
    })
    // return number
    var result = ""
    for (var i = 0; i < number.length; i++) {
        result = result + alphabet[number[i]]
    }
    return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'