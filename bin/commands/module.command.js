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
            this.generateModulesDocs();
            this.generateModulesFactory();
            this.generateModulesMiddleware();
            // this.generateModulesInterface();
            this.generateModulesRepository();
            this.generateModulesRouter();
            // this.generateModulesUseCase();
            // this.generateModulesValidation();
            //console.log(`Module ${this.name} created`);
        
        } catch (err) {
        console.error((err.message));
        }
    }

    generateModulesRepository() {
        const crateRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'repository', `create-${this.name}-repository.ts`);
        const createRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/repository/create--repository.command.js');

        this.generate(
            './src/infrastructure/express/modules/'+this.name+'s/repository',
            crateRepository,
            createRepositoryGenerate.get(this.name)
        );

        const deleteRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'repository', `delete-${this.name}-by-id-repository.ts`);
        const deleteRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/repository/delete--repository.command.js');

        this.generate(
            './src/infrastructure/express/modules/'+this.name+'s/repository',
            deleteRepository,
            deleteRepositoryGenerate.get(this.name)
        );

        const findAllRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'repository', `find-all-${this.name}s-repository.ts`);
        const findAllRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/repository/find-all-s-repository.command.js');

        this.generate(
            './src/infrastructure/express/modules/'+this.name+'s/repository',
            findAllRepository,
            findAllRepositoryGenerate.get(this.name)
        );

        const findByIdRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'repository', `find-${this.name}-by-id-repository.ts`);
        const findByIdRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/repository/find-by-id-repository.command.js');

        this.generate(
            './src/infrastructure/express/modules/'+this.name+'s/repository',
            findByIdRepository,
            findByIdRepositoryGenerate.get(this.name)
        );

        const updateRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'repository', `update-${this.name}-repository.ts`);
        const updateRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/repository/update--repository.command.js');

        this.generate(
            './src/infrastructure/express/modules/'+this.name+'s/repository',
            updateRepository,
            updateRepositoryGenerate.get(this.name)
        );

        const findByNameRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'repository', `find-${this.name}-by-name-repository.ts`);
        const findByNameRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/repository/find-by-name-repository.command.js');

        this.generate(
            './src/infrastructure/express/modules/'+this.name+'s/repository',
            findByNameRepository,
            findByNameRepositoryGenerate.get(this.name)
        );
    }

    generateModulesFactory() {
      const createControllerFactory = path.join('./', 'src', 'infrastructure', 'express' ,'modules',  `${this.name}s`, 'factory', `create-${this.name}-controller-factory.ts`);
      const createControllerFactoryGenerate = require('../templates/infrastructure/express/modules/generate/factory/create--controller-factory.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/factory`,
        createControllerFactory,
        createControllerFactoryGenerate.get(this.name),
      );
  
      const deleteControllerFactory = path.join('./', 'src', 'infrastructure', 'express' ,'modules',  `${this.name}s`, 'factory', `delete-${this.name}-by-id-controller-factory.ts`);
      const deleteControllerFactoryGenerate = require('../templates/infrastructure/express/modules/generate/factory/delete--controller-factory.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/factory`,
        deleteControllerFactory,
        deleteControllerFactoryGenerate.get(this.name),
      );
  
      const findAllsControllerFactory = path.join('./', 'src', 'infrastructure', 'express' ,'modules',  `${this.name}s`, 'factory', `find-all-${this.name}s-controller-factory.ts`);
      const findAllsControllerFactoryGenerate = require('../templates/infrastructure/express/modules/generate/factory/find-all-s-controller-factory.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/factory`,
        findAllsControllerFactory,
        findAllsControllerFactoryGenerate.get(this.name),
      );
  
      const findByIdControllerFactory = path.join('./', 'src', 'infrastructure', 'express' ,'modules',  `${this.name}s`, 'factory', `find-${this.name}-by-id-controller-factory.ts`);
      const findByIdControllerFactoryGenerate = require('../templates/infrastructure/express/modules/generate/factory/find--by-id-controller-factory.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/factory`,
        findByIdControllerFactory,
        findByIdControllerFactoryGenerate.get(this.name),
      );
  
      const updateControllerFactory = path.join('./', 'src', 'infrastructure', 'express' ,'modules',  `${this.name}s`, 'factory', `update-${this.name}-controller-factory.ts`);
      const updateControllerFactoryGenerate = require('../templates/infrastructure/express/modules/generate/factory/update--controller-factory.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/factory`,
        updateControllerFactory,
        updateControllerFactoryGenerate.get(this.name),
      );
    }

    generateModulesDocs() {
      const createDefinitionsSwagger = path.join('./', 'src', 'infrastructure', 'express' ,'modules',  `${this.name}s`, 'docs', `create-${this.name}-definitions-swagger.ts`);
      const createDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/generate/docs/create--definitions-swagger.command.js');
      console.log(this.name, 'name')
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/docs`,
        createDefinitionsSwagger,
        createDefinitionsSwaggerGenerate.get(this.name),
      );
  
      const deleteByIdDefinitionsSwagger = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'docs', `delete-${this.name}-by-id-definitions-swagger.ts`);
      const deleteByIdDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/generate/docs/delete--by-id-definitions-swagger.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/docs`,
        deleteByIdDefinitionsSwagger,
        deleteByIdDefinitionsSwaggerGenerate.get(this.name),
      );
  
      const findAllsDefinitionsSwagger = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'docs', `find-all-${this.name}s-definitions-swagger.ts`);
      const findAllsDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/generate/docs/find-all-s-definitions-swagger.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/docs`,
        findAllsDefinitionsSwagger,
        findAllsDefinitionsSwaggerGenerate.get(this.name),
      );
  
      const findByIdDefinitionsSwagger = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'docs', `find-${this.name}-by-id-definitions-swagger.ts`);
      const findByIdDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/generate/docs/find--by-id-definitions-swagger.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/docs`,
        findByIdDefinitionsSwagger,
        findByIdDefinitionsSwaggerGenerate.get(this.name),
      );
  
      const updateDefinitionsSwagger = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'docs', `update-${this.name}-definitions-swagger.ts`);
      const updateDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/generate/docs/update--definitions-swagger.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/docs`,
        updateDefinitionsSwagger,
        updateDefinitionsSwaggerGenerate.get(this.name),
      );
  
      const sDefinitionsSwagger = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'docs', `${this.name}s-definitions.swagger.ts`);
      const sDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/generate/docs/s-definitions-swagger.command.js');
  
      this.generate(
        `./src/infrastructure/express/modules/${this.name}s/docs`,
        sDefinitionsSwagger,
        sDefinitionsSwaggerGenerate.get(this.name),
      );
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
    
        const updateController = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'controller', `update-${this.name}-controller.ts`);
        const updateControllerGenerate = require(`../templates/infrastructure/express/modules/generate/controller/update--controller.command.js`);
    
        this.generate(
          `/src/infrastructure/express/modules/${this.name}s/controller`,
          updateController,
          updateControllerGenerate.get(this.name),
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