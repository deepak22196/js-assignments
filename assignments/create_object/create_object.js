function CreateObject(arr) {
  obj = {};
  size = arr.length;
  for (i = 1; i < size; i = i + 2) {
    obj[arr[i - 1]] = arr[i];
  }

  return obj;
}

module.exports = CreateObject;
