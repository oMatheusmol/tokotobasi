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
            console.log(`Creating module ${this.name}....`);
            this.generateModulesAuthentication();
            this.generateModulesController();
            this.generateModulesDocs();
            this.generateModulesFactory();
            this.generateModulesMiddleware();
            this.generateModulesInterface();
            this.generateModulesRepository();
            this.generateModulesRouter();
            this.generateModulesUseCase();
            this.generateModulesValidation();
            console.log(`Done!`);
        
        } catch (err) {
        console.log('Fail! to create module');
        console.error((err.message));
        }
    }

    generateModulesInterface() {
      const createBodyRequest = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `create-${this.name}-body-request.ts`);
      const createBodyRequestGenerate = require('../templates/infrastructure/express/modules/generate/interface/create--interface.command.js');
  
      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        createBodyRequest,
        createBodyRequestGenerate.get(this.name),
      );

      const createRepositoryInterface = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `create-${this.name}-repository-interface.ts`);
      const createRepositoryInterfaceGenerate = require('../templates/infrastructure/express/modules/generate/interface/createRepositoryInterface.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        createRepositoryInterface,
        createRepositoryInterfaceGenerate.get(this.name),
      );

      const createUseCaseInterface = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `create-${this.name}-use-case.ts`);
      const createUseCaseInterfaceGenerate = require('../templates/infrastructure/express/modules/generate/interface/createUseCaseInterface.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        createUseCaseInterface,
        createUseCaseInterfaceGenerate.get(this.name),
      );

      const deleteByIdUsecaseInterface = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `delete-${this.name}-by-id-use-case.ts`);
      const deleteByIdUsecaseInterfaceGenerate = require('../templates/infrastructure/express/modules/generate/interface/deleteByIdUsecaseInterface.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        deleteByIdUsecaseInterface,
        deleteByIdUsecaseInterfaceGenerate.get(this.name),
      );

      const deleteById = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `delete-${this.name}-by-id.ts`);
      const deleteByIdGenerate = require('../templates/infrastructure/express/modules/generate/interface/deleteById.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        deleteById,
        deleteByIdGenerate.get(this.name),
      );

      const findAllRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `find-all-${this.name}s-repository.ts`);
      const findAllRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/interface/findAllRepository.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        findAllRepository,
        findAllRepositoryGenerate.get(this.name),
      );

      const findAllUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `find-all-${this.name}s-use-case.ts`);
      const findAllUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/interface/findAllUseCase.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        findAllUseCase,
        findAllUseCaseGenerate.get(this.name),
      );

      const findByIdRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `find-${this.name}-by-id-repository.ts`);
      const findByIdRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/interface/findByIdRepository.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        findByIdRepository,
        findByIdRepositoryGenerate.get(this.name),
      );

      const findByIdUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `find-${this.name}-by-id-use-case.ts`);
      const findByIdUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/interface/findByIdUseCase.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        findByIdUseCase,
        findByIdUseCaseGenerate.get(this.name),
      );

      const findByNameRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `find-${this.name}-by-name-repository.ts`);
      const findByNameRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/interface/findByNameRepository.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        findByNameRepository,
        findByNameRepositoryGenerate.get(this.name),
      );

      const interfaceG = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `${this.name}-interface.ts`);
      const interfaceGenerate = require('../templates/infrastructure/express/modules/generate/interface/interface.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        interfaceG,
        interfaceGenerate.get(this.name),
      );

      const updateBodyRequest = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `update-${this.name}-body-request.ts`);
      const updateBodyRequestGenerate = require('../templates/infrastructure/express/modules/generate/interface/updateBodyRequest.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        updateBodyRequest,
        updateBodyRequestGenerate.get(this.name),
      );

      const updateByIdRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `update-${this.name}-by-id-repository.ts`);
      const updateByIdRepositoryGenerate = require('../templates/infrastructure/express/modules/generate/interface/updateByIdRepository.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        updateByIdRepository,
        updateByIdRepositoryGenerate.get(this.name),
      );

      const updateByIdUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'interface', `update-${this.name}-use-case.ts`);
      const updateByIdUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/interface/updateByIdUseCase.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/interface',
        updateByIdUseCase,
        updateByIdUseCaseGenerate.get(this.name),
      );
    }

    generateModulesValidation() {
      const createValidation = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'validation', `create-${this.name}-validation.ts`);
      const createValidationGenerate = require('../templates/infrastructure/express/modules/generate/validation/create--validation.command.js');
  
      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/validation',
        createValidation,
        createValidationGenerate.get(this.name),
      );

      const deleteValidation = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'validation', `delete-${this.name}-by-id-validation.ts`);
      const deleteValidationGenerate = require('../templates/infrastructure/express/modules/generate/validation/delete--validation.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/validation',
        deleteValidation,
        deleteValidationGenerate.get(this.name),
      );

      const findAllsValidation = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'validation', `find-all-${this.name}s-validation.ts`);
      const findAllsValidationGenerate = require('../templates/infrastructure/express/modules/generate/validation/find-all-s-validation.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/validation',
        findAllsValidation,
        findAllsValidationGenerate.get(this.name),
      );

      const compositeValidation = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'validation', `${this.name}-composite-validation.ts`);
      const compositeValidationGenerate = require('../templates/infrastructure/express/modules/generate/validation/composite-validation.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/validation',
        compositeValidation,
        compositeValidationGenerate.get(this.name),
      );

      const requiredFieldsValidation = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'validation', `${this.name}-required-fields-validation.ts`);
      const requiredFieldsValidationGenerate = require('../templates/infrastructure/express/modules/generate/validation/required-fields-validation.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/validation',
        requiredFieldsValidation,
        requiredFieldsValidationGenerate.get(this.name),
      );

      const updateValidation = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'validation', `update-${this.name}-validation.ts`);
      const updateValidationGenerate = require('../templates/infrastructure/express/modules/generate/validation/update--validation.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/validation',
        updateValidation,
        updateValidationGenerate.get(this.name),
      );
    }

    generateModulesUseCase() {
      const createUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'use-case', `create-${this.name}-use-case.ts`);
      const createUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/use-case/create--use-case.command.js');
  
      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/use-case',
        createUseCase,
        createUseCaseGenerate.get(this.name),
      );

      const deleteUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'use-case', `delete-${this.name}-by-id.ts`);
      const deleteUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/use-case/delete--use-case.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/use-case',
        deleteUseCase,
        deleteUseCaseGenerate.get(this.name),
      );

      const findAllsUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'use-case', `find-all-${this.name}s.ts`);
      const findAllsUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/use-case/find-all-s-use-case.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/use-case',
        findAllsUseCase,
        findAllsUseCaseGenerate.get(this.name),
      );

      const findByIdUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'use-case', `find-${this.name}-by-id.ts`);
      const findByIdUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/use-case/find-by-id-use-case.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/use-case',
        findByIdUseCase,
        findByIdUseCaseGenerate.get(this.name),
      );

      const updateUseCase = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'use-case', `update-${this.name}-use-case.ts`);
      const updateUseCaseGenerate = require('../templates/infrastructure/express/modules/generate/use-case/update--use-case.command.js');

      this.generate(
        './src/infrastructure/express/modules/'+this.name+'s/use-case',
        updateUseCase,
        updateUseCaseGenerate.get(this.name),
      );
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

        const updateRepository = path.join('./', 'src', 'infrastructure', 'express' ,'modules', `${this.name}s`, 'repository', `update-${this.name}-by-id-repository.ts`);
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