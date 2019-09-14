function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var object = {}
        object["penumpang"] = arrPenumpang[i][0]
        object["naikDari"] = arrPenumpang[i][1]
        object["tujuan"] = arrPenumpang[i][2]

        // //hitung bayar
        // var dari = 0
        // var tujuan = 0
        // for (var j = 0; j < rute.length; j++) {
        //     if (arrPenumpang[i][1] === rute[j]) {
        //         dari = j
        //     }

        //     if (arrPenumpang[i][2] === rute[j]) {
        //         tujuan = j
        //     }
        // }
        // var jarak = Math.abs(tujuan - dari)
        // var biaya = jarak * 2000
        // object["bayar"] = biaya
        object["bayar"] = 0
        result.push(object)
    }
    var tempDari = []
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < rute.length; j++) {
            if (result[i].naikDari === rute[j]) {
                tempDari.push(j)
            }
        }
    }
    var tempTujuan = []
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < rute.length; j++) {
            if (result[i].tujuan === rute[j]) {
                tempTujuan.push(j)
            }
        }
    }

    for (var i = 0; i < result.length; i++) {
        var jarak = Math.abs(tempTujuan[i] - tempDari[i])
        result[i].bayar = jarak * 2000
    }
    // var tujuanDimitri = tempTujuan[0] - tempDari[0]
    // var tujuanIcha = tempTujuan[1] - tempDari[1]

    // console.log(tempDari)
    // console.log(tempTujuan)
    // console.log(tujuanDimitri)
    // console.log(tujuanIcha)
    return result
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]