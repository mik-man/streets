// Отдельно функция для форматирования массива.
// Не нужна, но может пригодится для тестов.
let ar = ['str1', '', 'str3', '"Балка ""Поповка"""', '"Броненосця ""Потьомкін"""'];

let as = arr2s(ar);
console.log(as);

function arr2s(arr) {
  let a = '';
  for (let i = 1; i < arr.length; i++) {
    const streetName = clearStreetName(arr[i]);
    if (streetName.length > 0) {
      a = `${a},\n"${streetName}"`;
    }
  }
  a = `var streets = ["${arr[0]}"${a}]`; //first item has no comma and new line
  return a;
}

function clearStreetName(dirtyName) {
  // delete spaces (beg-end) and double quotes
  return dirtyName.trim().replace(/"/g,'');
}