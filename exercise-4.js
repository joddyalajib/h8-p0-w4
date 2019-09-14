function cariModus(arr) {
  // you can only write your code here!
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    var index = false
    for (var j = 0; j < temp.length; j++) {
      if (arr[i] === temp[j]) {
        index = true
      }
    }
    if (index === false) {
      temp.push(arr[i])
    }
  }
  // console.log(temp)
  var temp2 = []
  for (var i = 0; i < temp.length; i++) {
    var counter = 0
    var temp3 = []
    for (var j = 0; j < arr.length; j++) {
      if (temp[i] === arr[j]) {
        counter = counter + 1
      }
    }
    temp3.push(temp[i], counter)
    temp2.push(temp3)
  }

  if (temp2.length === 1) {
    return -1
  } else {
    var max = temp2[0]
    for (var i = 0; i < temp2.length; i++) {
      if (max[1] < temp2[i][1]) {
        max = temp2[i]
      }
    }
    if (max[1] === 1) {
      return -1
    } else {
      return max[0]
    }
  }



  console.log(temp2)
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1