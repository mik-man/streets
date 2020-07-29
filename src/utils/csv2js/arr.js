// Отдельно функция для форматирования массива.
// Не нужна, но может пригодится для тестов.
let ar = ['str1', '', 'str3'];

let as = arr2s(ar);
console.log(as);

function arr2s(arr) {
  console.log(arr);
  let a = '';
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > 0) {
      a = `${a},\n"${arr[i]}"`;
    }
  }
  a = `var streets = ["${arr[0]}"${a}]`; //first item has no comma and new line
  // console.log(a);
  return a;
}