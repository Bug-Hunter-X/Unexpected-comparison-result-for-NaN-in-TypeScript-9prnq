function compare(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return a === b ? 0 : NaN; // Correctly handle NaN
  } else if (a < b) {
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
console.log(compare(NaN, NaN)); // NaN; this is expected
console.log(compare(NaN, 1)); // NaN; this is expected