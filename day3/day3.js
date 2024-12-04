function getInstructions() {
  const fs = require('fs');
  const instructions = fs.readFileSync('day3.txt', 'utf8');
  return instructions;
}

function parseInstructions(instructions) {
  let groups = instructions.split('mul');
  return groups.map(g => {
    let match =  g.match(/^\(\d+,\d+\)/);
    return match ? match[0] : undefined;
  }).filter(m => m).map(pair => pair.replace(/[()]/g, '').split(',').map(n => Number(n)));
}

function calculate(pairs) {
  return pairs.map(p => p[0] * p[1]).reduce((n, m) => n + m, 0);
}

let i = getInstructions();

function day3Part1(instructions) {
  let pairs = parseInstructions(i);
  return calculate(pairs);
}

console.log('Part 1:', day3Part1()); // Part 1 answer: 189600467

// Part 2 - unfinished
function day3Part2(instructions) {
  const enabledMultiplications = enableInstructions(instructions);
  return day3Part1(enabledMultiplications);
}

function enableInstructions(instructions) {
    let clean = instructions.replace(/(don't\(\)).*(do\(\))/g, '');
    let final = clean.replace(/don't\(\).*/, '')
    return final;
}

//Part 2 answer: 107069718