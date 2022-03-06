function getEven(arr) {
  b = arr.filter((x) => {
    if (x % 2 == 0) return x;
  });
  return b;
}

function multiplyByN(arr, n) {
  c = arr.map((x) => x * n);
  return c;
}

function removeNthElement(arr, n) {
  arr.splice(n, 1);
  return arr;
}

module.exports = {
  getEven,
  multiplyByN,
  removeNthElement,
};
