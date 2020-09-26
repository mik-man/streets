function clearStreetName(dirtyName) {
  // delete spaces (beg-end) and double quotes
  return dirtyName.trim().replace(/"/g,'');
 // replaceAll does not work! Fuck!
}

console.log(clearStreetName('abc"0"1""2"""3'));
