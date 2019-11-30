function pasanganTerbesar(num) {
    var ubah = String(num)
    var tampung = ''
    var banding = 0;

    for (i = 0; i < ubah.length; i++) {
        tampung = ubah[i] + ubah[i + 1] //64,41,15.. dalam bentuk string
        var convert = Number(tampung) //tampung string angka,convert
        if (convert > banding) {
            banding = convert
        }
    }
    return banding
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99