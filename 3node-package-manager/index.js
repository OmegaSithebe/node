
const lodash = require('lodash');

const names = ['john', 'lilly', 'siphiwe', 'sipho', 'tim'];
const capatalize = lodash.map(names, lodash.capatalize);

console.log(capatalize);


