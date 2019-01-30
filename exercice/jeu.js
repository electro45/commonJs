const readline = require('readline');
const chalk = require('chalk');
const { random } = require('./random');

/**
 * @param {number} options.min
 * @param {number} options.max
 */
class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;
    this._min = min;
    this._max = max;
    this._essais = [];
    this._entierAlea = random.getIntInclusive(this._min, this._max);
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  setMin(min) {
    this._min = min;
    return this;
  }
  setMax(max) {
    this._max = max;
    return this;
  }
  generateNumber(typeRandom) {
    this._entierAlea = random[typeRandom](this._min, this._max);
    return this;
  }
  jouer() {
    let entierAlea = this._entierAlea;
    let essais = this._essais;
    let rl = this._rl;
    if (essais.length) {
      console.log(chalk.green(`Vous avez déjà joué : ${chalk.blue(essais.join(chalk.white(' - ')))}`));
    }
    rl.question(chalk.underline.blue('Quel est le nombre entier ? '), (answer) => {
      const entierSaisi = parseInt(answer);
      if (isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : ') + chalk.yellow('il faut saisir un nombre'));
        return this.jouer();
      }
      essais.push(entierSaisi);
      if (entierSaisi < entierAlea) {
        console.log(chalk.magenta('Trop petit'));
        return this.jouer();
      }
      if (entierSaisi > entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }
      console.log(chalk.red('Gagné'));
      rl.close();
    });
  }
}

// module.exports.Jeu = Jeu
exports.Jeu = Jeu;
