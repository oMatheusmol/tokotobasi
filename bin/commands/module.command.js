'use stric';
const BaseCommand = require('./base_command');
const pluralize = require('pluralize');
const path = require('path');

module.exports = class ModuleCommand extends BaseCommand {
    constructor(schematic) {
        super('module');
        this.name = schematic;
    }

    command() {
        try {
            //console.log(`Creating module ${this.name}`);
            this.generateModulesAuthentication();
            this.generateModulesController();
            // this.generateModulesDocs();
            // this.generateModulesFactory();
            this.generateModulesMiddleware();
            // this.generateModulesInterface();
            // this.generateModulesRepository();
            this.generateModulesRouter();
            // this.generateModulesUseCase();
            // this.generateModulesValidation();
            //console.log(`Module ${this.name} created`);
        
        } catch (err) {
        console.error((err.message));
        }
    }

    generateModulesController() {
        const createController = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'controller', `create-${this.name}-controller.ts`);
        const createControllerGenerate = require('../templates/infrastructure/express/modules/generate/controller/create-controller.command.js');
    
        this.generate(
          `./src/infrastructure/express/modules/${this.name}s/controller`,
          createController,
          createControllerGenerate.get(this.name),
        );
    
        const deleteController = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'controller', `delete-${this.name}-by-id-controller.ts`);
        const deleteControllerGenerate = require(`../templates/infrastructure/express/modules/generate/controller/delete--by-id-controller.command.js`);
    
        this.generate(
          `/src/infrastructure/express/modules/${this.name}s/controller`,
          deleteController,
          deleteControllerGenerate.get(this.name),
        );
    
        const findAllsController = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'controller', `find-all-${this.name}s-controller.ts`);
        const findAllsControllerGenerate = require(`../templates/infrastructure/express/modules/generate/controller/find-all-controller.command.js`);
    
        this.generate(
          `/src/infrastructure/express/modules/${this.name}s/controller`,
          findAllsController,
          findAllsControllerGenerate.get(this.name),
        );
    
        const findByIdController = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'controller', `find-${this.name}-by-id-controller.ts`);
        const findByIdControllerGenerate = require(`../templates/infrastructure/express/modules/generate/controller/find--by-id-controller.command.js`);
    
        this.generate(
          `/src/infrastructure/express/modules/${this.name}s/controller`,
          findByIdController,
          findByIdControllerGenerate.get(this.name),
        );
    
        const updateController = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'controller', 'update-${this.name}-controller.ts');
        const updateControllerGenerate = require(`../templates/infrastructure/express/modules/generate/controller/update--controller.command.js`);
    
        this.generate(
          `/src/infrastructure/express/modules/${this.name}s/controller`,
          updateController,
          updateControllerGenerate.get(),
        );
    }

    generateModulesMiddleware() {
        const middleware = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'middlewares', `logged--is-target-${this.name}-middleware-factory.ts`);
        const middlewareGenerate = require('../templates/infrastructure/express/modules/generate/middleware.command.js');
      
        this.generate(
          './src/infrastructure/express/modules/'+this.name+'s/middlewares',
            middleware,
            middlewareGenerate.get(this.name),
        );
    }

    generateModulesAuthentication() {
        const auth = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'authentication', `logged--is-target-${this.name}.ts`);
        const authGenerate = require('../templates/infrastructure/express/modules/generate/authentication.command.js');

        this.generate(
            './src/infrastructure/express/modules/'+this.name+'s/authentication',
            auth,
            authGenerate.get(this.name)
        );
    }

    generateModulesRouter() {
        const route = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'router', `${this.name}-route.ts`);    
        const routeGenerate = require('../templates/infrastructure/express/modules/generate/router.command.js');
      
        this.generate(
          './src/infrastructure/express/modules/'+this.name+'s/router',
            route,
            routeGenerate.get(this.name),
        );
    }

}