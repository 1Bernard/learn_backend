const lodash = require('lodash');

const names = ["john", "jane", "bob", "joe", "jill", "jack"];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);