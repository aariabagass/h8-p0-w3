var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(input) {
    for (i = 0; i <= input.length - 1; i++) {
        console.log('Nomor ID:  ' + input[i][0]) //baris 1
        console.log('Nama:  ' + input[i][1]) //baris 2
        console.log('TTL:  ' + input[i][2] + ' ' + input[i][3]) //baris 3 & 4
        console.log('Hobi:  ' + input[i][4]) //baris 5
        console.log('')
    }
}
dataHandling(input)

