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

//Method 2: Using reduce method
let count = name.split("").reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log(count);

//Method 3: Using forEach method
let countForEach = {};
name.split("").forEach((ch) => {
  countForEach[ch] = (countForEach[ch] || 0) + 1;
});
console.log(countForEach);

//commit message: "Added character count methods using for loop, reduce, and forEach."