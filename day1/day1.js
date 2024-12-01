// Part 1
const fs = require('fs');
const filePath = 'day1.txt';
const data = fs.readFileSync(filePath, 'utf8');
const pairs = data.split('\n');

const left_col = [];
const right_col = [];

pairs.forEach(p => {
  pair = p.split(/\s+/);
  left_col.push(Number(pair[0]));
  right_col.push(Number(pair[1]));
});

left_col.sort((a, b) => a - b);
right_col.sort((a, b) => a - b);

const differences = left_col.map((n, i) => {
  return Math.abs(n - right_col[i]);
});

const result = differences.reduce((acc, n) =>  acc += n, 0);

console.log(result); // 2000468 - Part 1 solution

// Part 2
const counts = {};
left_col.forEach(n => counts[n] = 0);

right_col.forEach(n => {
  if (n in counts) {
    counts[n] += 1
  }
});

let similarityScore = 0

left_col.forEach(n => {
  similarityScore += n * counts[n];
});

console.log(similarityScore); // 18567089 - Part 2 solution