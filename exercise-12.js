function countProfit(shoppers) {
    // you can only write your code here!
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
    // console.log("===")
    var arr = []
    for (var i = 0; i < listBarang.length; i++) {
        var object = {}
        object["product"] = listBarang[i][0]
        object["shoppers"] = []
        object["leftOver"] = listBarang[i][2]
        object["totalProfit"] = 0
        // console.log(object)
        arr.push(object)
    }
    for (var i = 0; i < shoppers.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (shoppers[i].product === arr[j].product) {
                if (arr[j].leftOver >= shoppers[i].amount) {
                    // console.log(shoppers[i])
                    // console.log(arr[j])
                    console.log("===========================")
                    arr[j].shoppers.push(shoppers[i].name)
                    arr[j].leftOver = arr[j].leftOver - shoppers[i].amount
                    for (var k = 0; k < listBarang.length; k++) {
                        console.log(listBarang[k][0])
                        if (shoppers[i].product === listBarang[k][0]) {
                            arr[j].totalProfit = arr[j].totalProfit + (shoppers[i].amount * listBarang[k][1])
                        }
                    }
                    console.log(arr[j])
                    console.log("===========================")
                }
            }
        }
    }

    console.log(arr)
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]