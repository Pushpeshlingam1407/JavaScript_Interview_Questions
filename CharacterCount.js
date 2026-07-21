//TODO: Count the number of occurrences of each character in a string

// * Method 1: Using for loop
const name = "Pushpesh.Lingam";
let cnt = {};
for (let i = 0; i < name.length; i++) {
  let ch = name[i];
  if (cnt[ch]) {
    cnt[ch]++;
  } else {
    cnt[ch] = 1;
  }
}
console.log(cnt);

// * Method 2: Using reduce method
let count = name.split("").reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log(count);

// * Method 3: Using forEach method
let countForEach = {};
name.split("").forEach((ch) => {
  countForEach[ch] = (countForEach[ch] || 0) + 1;
});
console.log(countForEach);

// * Method 4: Using Map
let countMap = new Map();
name.split("").forEach((ch) => {
  countMap.set(ch, (countMap.get(ch) || 0) + 1);
});
console.log(Object.fromEntries(countMap));
