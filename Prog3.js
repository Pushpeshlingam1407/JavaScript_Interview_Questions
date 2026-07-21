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

// //Method 2: Using reduce method
// let count = name.split("").reduce((acc, ch) => {
//   acc[ch] = (acc[ch] || 0) + 1;
//   return acc;
// }, {});
