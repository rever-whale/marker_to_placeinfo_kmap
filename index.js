const fs = require('fs');
const path = require('path');
const DATA_PATH = path.resolve(__dirname, './markerInfo.json');
const OUTPUT_PATH = path.resolve(__dirname, './output.json');
const { data } = JSON.parse(fs.readFileSync(DATA_PATH));

let count = 0;
const parsedData = data.map(({display1, display2, key, x, y }) => {
  count++;
  return {
    place_name: display1,
    address_name: display2,
    id: key,
    x,
    y
  }
});

fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ data: parsedData }));
console.log(`${count} completed`);
