const iterations = 10000000;

const text = "E-SOLUTIONS";

console.time("Inline split");
for (let i = 0; i < iterations; i++) {
  const chars = text.split("");
  let sum = 0;
  for (let j = 0; j < chars.length; j++) {
    sum += chars[j].charCodeAt(0);
  }
}
console.timeEnd("Inline split");

const preSplit = text.split("");
console.time("Pre-split");
for (let i = 0; i < iterations; i++) {
  let sum = 0;
  for (let j = 0; j < preSplit.length; j++) {
    sum += preSplit[j].charCodeAt(0);
  }
}
console.timeEnd("Pre-split");
