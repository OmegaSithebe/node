
const lodash = require('lodash');

const names = ['john', 'lilly', 'siphiwe', 'sipho', 'tim'];
const capatalize = lodash.map(names, lodash.capitalize);

console.log(capatalize);


