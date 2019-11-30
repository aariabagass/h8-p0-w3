function targetTerdekat(arr) {
    var koordinatO = []; //o
    var koordinatX = [];//x
    var jarak = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 'o') { //count o
            koordinatO.push(i);
        }
        if (arr[i] == 'x') { //count x
            koordinatX.push(i);
        }
    }
    if (koordinatO < koordinatX[0]) { //ketemu duluan
        jarak = koordinatX[0] - koordinatO;
        return jarak;
    } else if (koordinatO > koordinatX[0]) {
        jarak = koordinatO - koordinatX[koordinatX.length - 1]
        return jarak;
    } else {
        return 0
    }
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
