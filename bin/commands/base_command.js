'use stric';
const fs = require('fs');

module.exports = class BaseCommand {
  constructor(commandName) {
    this._commandName = commandName;
  }

  command() {
    console.log(`Commando ${this._commandName} works !`);
  }

  commandArgs(args) {
    console.log(`Commando ${this._commandName} works with ${args} !`);
  }

  generate(dir, path, data, log) {
    if (!fs.existsSync(dir)) {
      console.log((`Creating directory ...`));
      fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, data, 'utf-8');
    } else {
      console.log((`Resource project already exists`));
      return true
    }
  }

  trace(message) {
    console.log(c(message));
  }
  warn(message) {
    console.log(c(message));
  }
  error(message) {
    console.log(c(message));
  }
};
