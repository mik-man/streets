/*
Установил csv-to-array-of-arrays package, но не пользовался, просто смотрел как пример.
*/

import { readFile, writeFile } from 'fs';
var ver = 'ver-01'
console.log(ver);
main();

function main() {
  const csvf = 'streets8.csv';
  // задолбался в попытках прочитать файл в кодировке "windows-1251" (streets.csv),
  // поэтому просто пересохранил файл в utf8 (streets8.csv)
  readFile(csvf, (err, data) => {
    if (err) { return console.log(err); }
    console.log(typeof data);
    let d = data.toString();
    let lines = d.split('\r\n');  // не знаю, откуда берется еще и символ '\r' в конце слова.
    console.log(lines.length);
    const s = arr2s(lines);
    const fname = `streets-${ver}.js`;
    writeFile(fname, s, (err) => {
      if (err) { console.log('Error detected!'); return console.log(err); }
      console.log('The file ' + fname + ' was saved!');
    });
  });
};

function arr2s(arr) {
  let a = '';
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > 0) {
      a = `${a},\n"${arr[i]}"`;
    }
  }
  a = `var streets = ["${arr[0]}"${a}]`; //first item has no comma and new line
  return a;
}
