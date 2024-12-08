function compare(a, b) {
  if (a < b) {
    return -1; 
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

console.log(compare(1, 2)); // -1
console.log(compare(2, 1)); // 1
console.log(compare(1, 1)); // 0
console.log(compare(NaN, NaN)); // 0, this is unexpected