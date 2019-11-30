function tentukanDeretAritmatika(arr) {
    for (i = 1; i < arr.length - 1; i++) {
        var selisih = arr[1] - arr[0] //acuan
        var deret = arr[i + 1] - arr[i]
        var hasil = deret == selisih
    } return hasil
}
// TEST CASES harus berurutan kelipatan
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false