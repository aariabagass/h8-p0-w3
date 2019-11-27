function angkaPalindrome(num) {
    while (run = true) { //selagi run, true
        num++ //nambah satu
        var strnumber = String(num) //ubah ke string
        var tampung = '';
        for (i = strnumber.length - 1; i >= 0; i--) {
            tampung += strnumber[i]
            if (tampung == strnumber) {
                run = true;
                return tampung
            }
        }
    }

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001