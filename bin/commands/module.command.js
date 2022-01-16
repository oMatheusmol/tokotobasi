'use stric';
const BaseCommand = require('./base_command');
const pluralize = require('pluralize');
const path = require('path');

module.exports = class ModuleCommand extends BaseCommand {
    constructor(schematic) {
        super('module');
        this.name = schematic;
        this.home = `./${pluralize.singular(this.name)}`
    }

    command() {
        try {
            console.log(`Creating module ${this.name}`);
            // this.generateModulesAuthentication();
            // this.generateModulesController();
            // this.generateModulesDocs();
            // this.generateModulesFactory();
            // this.generateModulesMiddleware();
            // this.generateModulesInterface();
            // this.generateModulesRepository();
            // this.generateModulesRouter();
            // this.generateModulesUseCase();
            // this.generateModulesValidation();
            console.log(`Module ${this.name} created`);
        
        } catch (err) {
        console.error((err.message));
        }
    }
}