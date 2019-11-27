/*dengan split
function hitungJumlahKata(kalimat) {
    var pisah = kalimat.split(' ');
    var hitung = pisah.length
    return hitung
}
*/

function hitungJumlahKata(str) {
    tampung = 0;
    tampung++
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') { //jika menemukan spasi
            tampung += 1

        }

    }
    return tampung
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5