const assert = require('assert'); // binaire de node.js
const chalk = require('chalk'); // binaire de node.js

// inclus le fichier
// - extenstion optionnelle si js ou json
// - si fichier est local ../ ou ./
const maths = require('../src/maths'); // dans le projet
try {
  assert.strictEqual(maths.sum(1, 2), 3, 'Erreur de la somme'); //3
  console.log(chalk.green('Test ::::::::::::::: [ OK ]'));
} catch (err) {
  console.log(chalk.red('Test ::::::::::::::: [ ERR ]'));
  console.log(`Message : ${err.message}`);
  process.exit(1); // Kill avec erreur
}

