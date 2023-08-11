
const record = [
  { year: "2017", result: "N/A"},
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(record) {
  const win = record.find((e) => e.result === "W");
  if (win) {
    return win.year;
  }
}

console.log(superbowlWin(record));