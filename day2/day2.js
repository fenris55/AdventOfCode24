// Part 1

function getReports() {
  const fs = require('fs');
  const filePath = 'day2.txt';
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.split('\n');

  return lines.map(l => {
    report = l.split(/\s/);
    return report.map(n => Number(n));
  });
}

function validDescending(report) {
  return report.every((n, i) => i == 0 || (n < report[i - 1] && report[i - 1] - n <= 3));
}

function validAscending(report) {
  return report.every((n, i) => i == 0 || (n > report[i - 1] && n - report[i - 1] <= 3));
}

function safeReport(report) {
  return validAscending(report) || validDescending(report);
}

function countSafeReports(reports) {
  return reports.filter(r => safeReport(r)).length;
}

function day2Part1(reports) {
  return countSafeReports(reports);
}

// Part 2

function reportDampener(report) {
  for (let i = 0; i < report.length; i++) {
    if (safeReport([...report.slice(0, i), ...report.slice(i + 1)])) {
      return true;
    }
  }
  return false;
}

function getUnsafeReports(reports) {
  return reports.filter(r => !safeReport(r));
}

function countDampenedReports(reports) {
  const unsafe = getUnsafeReports(reports);
  return unsafe.filter(r => reportDampener(r)).length;
}

function day2Part2(reports) {
  return countDampenedReports(reports);
}

function day2() {
  const reports = getReports();
  const safeReports = day2Part1(reports);
  const dampenedReports = day2Part2(reports);
  console.log('Safe Reports:', safeReports);
  console.log('Safe Reports with Problem Dampener:', dampenedReports + safeReports);
}

day2();