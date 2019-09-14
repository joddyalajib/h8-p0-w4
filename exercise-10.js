function changeMe(arr) {
    // you can only write your code here!
    // var res = []
    var object = {}
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1 + ". " + arr[i][0] + " " + arr[i][1])
        object["firstName"] = arr[i][0]
        object["lastName"] = arr[i][1]
        object["gender"] = arr[i][2]
        object["age"] = arr[i][3]
        if (object["age"] === undefined) {
            object["age"] = 'Invalid Birth Year'
        }
        console.log(object)
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""