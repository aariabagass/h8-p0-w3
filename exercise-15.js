function groupAnimals(animals) {
  animals.sort();
  var grupArray = [];
  var counter = 0;

  for (i = 0; i < animals.length; i++) {
    if (grupArray.length == 0) {
      grupArray.push([animals[i]])
    } else if (grupArray[counter][0][0] == animals[i][0]) {
      grupArray[counter].push(animals[i])
    } else {
      grupArray.push([animals[i]])
      counter++;
    }
  }
  return grupArray
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil']]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]
