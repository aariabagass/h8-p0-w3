function tentukanDeretGeometri(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        var selisih = arr[1] / arr[0] //acuan
        var geo = arr[i + 1] / arr[i]
        var hasil = geo == selisih
    } return hasil
}
// TEST CASES barisan ukur 
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true 3/1 = 9/3 
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true 4/2 = 8/4
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false 4/2 != 6/4
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true 
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false