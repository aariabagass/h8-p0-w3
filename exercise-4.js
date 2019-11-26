var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input) {
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung'); //index ke 1, hapus 2, insert string
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro'); //index ke 4, hapus 1, insert string
    console.log(input)

    var tgl = input[3].split(''); //ambil "21/05/1989" (index ke 3), split jadi index 0-9
    var dd = tgl[0] + tgl[1] // index 0 & 1
    var mm = tgl[3] + tgl[4] // index 3 & 4
    var yyyy = tgl[6] + tgl[7] + tgl[8] + tgl[9]//index 6-9
    var tglwrap = [dd, mm, yyyy]

    switch (mm) { //switch
        case '01': console.log('Januari');
            break
        case '02': console.log('Februari');
            break
        case '03': console.log('Maret');
            break
        case '04': console.log('April');
            break
        case '05': console.log('Mei');
            break
        case '06': console.log('Juni');
            break
        case '07': console.log('Juli');
            break
        case '08': console.log('Agustus');
            break
        case '09': console.log('September');
            break
        case '10': console.log('Oktober');
            break
        case '11': console.log('November');
            break
        case '12': console.log('Desember');
            break
    }
    tglwrap.sort(function (a, b) { return b - a });//sort descending
    console.log(tglwrap);

    tglwrap = tglwrap.join('-'); //join dengan '-' diantaranya
    console.log(tglwrap)

    nama = input[1].slice(0, 15) //ambil string index 1, potong mulai index awal jadi 15 character dari 24
    console.log(nama)
}
dataHandling2(input)
/*
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */