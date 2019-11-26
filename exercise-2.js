//Reverse

function balikString(str) {
    var tampung = [];
    for (i = str[0].length - 1; i >= 0; i--) { //index ke 0
        tampung += str[0][i];
    }
    return tampung;
}
console.log(balikString(['hello world!']));
