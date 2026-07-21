//TODO: Flat the array

let nums = [
  1,
  2,
  3,
  [4, 5, 6, [7, 8, 9], [10, 11, 12, [13, 14, 15, 16, 17]]],
  18,
  19,
  20,
];
console.log(nums);

console.dir(nums, { depth: null }); //* For printing the nested array in a more readable format

//* Using recursion to flatten the array

let arr = [];
function flatArray(nums) {
  nums.forEach((element) => {
    if (Array.isArray(element)) flatArray(element);
    else arr.push(element);
  });
  return arr;
}

console.log(flatArray(nums)); //* Flattened array
