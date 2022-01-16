'use stric';
const BaseCommand = require('./base_command');

module.exports = class VersionCommand extends BaseCommand {
  constructor() {
    super('version');
  }

  command() {
    try {
      console.log(`Version: ${require('../../package.json').version}`);
      
    } catch (err) {
      console.error((err.message));
    }
  }
}