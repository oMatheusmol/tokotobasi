'use stric';
const BaseCommand = require('./base_command');
const pluralize = require('pluralize');
const path = require('path');

module.exports = class CreateCommand extends BaseCommand {
  constructor(schematic) {
    super('install');
    this.name = schematic;
    this.home = `./${pluralize.singular(this.name)}`
  }

  command() {
    try {
      console.log(('Building project ...'));
      this.generateDepedencies();
      this.generateVsCode();
      this.generatePresentation();
      this.generateInfrastructure();
      //this.generateCommon();
      
    } catch (err) {
      console.error(('Fail create new project'));
      console.error((err.message));
    }
  }

  generateInfrastructure() {
    this.generateExpress();
    this.generateKnex();
  }

  generateExpress() {
    this.generateAdapters();
    this.generateDocs();
    this.generateMiddlewares();
    this.generateSetups();
    this.generateServer();
    this.generateModules();
  }

  generateModules() {
    this.generateModulesAuth();
    //this.generateModulesUsers();
  }

  generateModulesAuth(){
    this.generateModulesAuthController();
    this.generateModulesAuthDocs();
    this.generateModulesAuthFactory();
    this.generateModulesAuthInterface();
    this.generateModulesAuthRepository();
    this.generateModulesAuthRouter();
    this.generateModulesAuthUseCase();
    this.generateModulesAuthValidation();
  }

  generateModulesAuthValidation(){
    const signInRequiredFieldsValidation = path.join(this.home, 'src', 'infrastructure', 'express' ,'modules', 'auth', 'validation', 'sign-in-required-fields-validation.ts');
    const signInRequiredFieldsValidationGenerate = require('../templates/infrastructure/express/modules/auth/validation/sign-in-required-fields-validation.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/validation',
      signInRequiredFieldsValidation,
      signInRequiredFieldsValidationGenerate.get(),
    );

    const signInValidation = path.join(this.home, 'src', 'infrastructure', 'express' ,'modules', 'auth', 'validation', 'sign-in-validation.ts');
    const signInValidationGenerate = require('../templates/infrastructure/express/modules/auth/validation/sign-in-validation.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/validation',
      signInValidation,
      signInValidationGenerate.get(),
    );
  }

  generateModulesAuthUseCase(){
    const refreshTokenUseCase = path.join(this.home, 'src', 'infrastructure', 'express' ,'modules', 'auth', 'use-case', 'refresh-token-use-case.ts')
    const refreshTokenUseCaseGenerate = require('../templates/infrastructure/express/modules/auth/use-case/refresh-token-use-case.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/use-case',
      refreshTokenUseCase,
      refreshTokenUseCaseGenerate.get(),
    );

    const signInUseCase = path.join(this.home, 'src', 'infrastructure', 'express' ,'modules', 'auth', 'use-case', 'sign-in-use-case.ts')
    const signInUseCaseGenerate = require('../templates/infrastructure/express/modules/auth/use-case/sign-in-use-case.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/use-case',
      signInUseCase,
      signInUseCaseGenerate.get(),
    );
  }

  generateModulesAuthRouter(){
    const authRoute = path.join(this.home, 'src', 'infrastructure', 'express' ,'modules', 'auth', 'router', 'auth-route.ts');
    const authRouteGenerate = require('../templates/infrastructure/express/modules/auth/router/auth-route.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/router',
      authRoute,
      authRouteGenerate.get(),
    );
  }

  generateModulesAuthRepository(){
    const createTokenRepository = path.join(this.home, 'src', 'infrastructure', 'express' ,'modules', 'auth', 'repository', 'create-token-repository.ts');
    const createTokenRepositoryGenerate = require('../templates/infrastructure/express/modules/auth/repository/create-token-repository.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/repository',
      createTokenRepository,
      createTokenRepositoryGenerate.get(),
    );

    const findByTokenRepository = path.join(this.home, 'src', 'infrastructure', 'express' ,'modules', 'auth', 'repository', 'find-by-token-repository.ts');
    const findByTokenRepositoryGenerate = require('../templates/infrastructure/express/modules/auth/repository/find-by-token-repository.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/repository',
      findByTokenRepository,
      findByTokenRepositoryGenerate.get(),
    );
  }

  generateModulesAuthInterface(){
    const createTokenRepositoryInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'create-token-repository-interface.ts');
    const createTokenRepositoryInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/create-token-repository-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      createTokenRepositoryInterface,
      createTokenRepositoryInterfaceGenerate.get(),
    );

    const findTokenByTokenRepositoryInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'find-token-by-token-repository-interface.ts');
    const findTokenByTokenRepositoryInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/find-token-by-token-repository-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      findTokenByTokenRepositoryInterface,
      findTokenByTokenRepositoryInterfaceGenerate.get(),
    );

    const refrashTokenUseCaseInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'refresh-token-use-case-interface.ts');
    const refrashTokenUseCaseInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/refresh-token-use-case-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      refrashTokenUseCaseInterface,
      refrashTokenUseCaseInterfaceGenerate.get(),
    );

    const signInUseCaseInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'sign-in-use-case-interface.ts');
    const signInUseCaseInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/sign-in-use-case-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      signInUseCaseInterface,
      signInUseCaseInterfaceGenerate.get(),
    );

    const signInRequestModelInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'sign-in-request-model-interface.ts');
    const signInRequestModelInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/sign-in-request-model-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      signInRequestModelInterface,
      signInRequestModelInterfaceGenerate.get(),
    );

    const signInResponseModelInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'sign-in-response-model-interface.ts');
    const signInResponseModelInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/sign-in-response-model-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      signInResponseModelInterface,
      signInResponseModelInterfaceGenerate.get(),
    );

    const tokenInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'token-interface.ts');
    const tokenInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/token-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      tokenInterface,
      tokenInterfaceGenerate.get(),
    );

    const tokenRequestModelInterface = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'interface', 'token-request-model-interface.ts');
    const tokenRequestModelInterfaceGenerate = require('../templates/infrastructure/express/modules/auth/interfaces/token-request-model-interface.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/interface',
      tokenRequestModelInterface,
      tokenRequestModelInterfaceGenerate.get(),
    );
  }

  generateModulesAuthFactory(){
    const refreshUserControllerFactory = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'factory', 'refresh-user-controller-factory.ts');
    const refreshUserControllerFactoryGenerate = require('../templates/infrastructure/express/modules/auth/factory/refresh-user-controller-factory.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/factory',
      refreshUserControllerFactory,
      refreshUserControllerFactoryGenerate.get(),
    );

    const signInUserControllerFactory = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'factory', 'sign-in-controller-factory.ts');
    const signInUserControllerFactoryGenerate = require('../templates/infrastructure/express/modules/auth/factory/sign-in-controller-factory.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/factory',
      signInUserControllerFactory,
      signInUserControllerFactoryGenerate.get(),
    );
  }

  generateModulesAuthDocs(){
    const authDefinitionsSwagger = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'docs', 'auth-definitions.swagger.ts');
    const authDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/auth/docs/auth-definitions.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/docs',
      authDefinitionsSwagger,
      authDefinitionsSwaggerGenerate.get(),
    );

    const createSignInDefinitionsSwagger = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'docs', 'create-sign-in-definitions.swagger.ts');
    const createSignInDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/auth/docs/create-sign-in-definitions.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/docs',
      createSignInDefinitionsSwagger,
      createSignInDefinitionsSwaggerGenerate.get(),
    );

    const refreshTokenDefinitionsSwagger = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'docs', 'refresh-token-definitions.swagger.ts');
    const refreshTokenDefinitionsSwaggerGenerate = require('../templates/infrastructure/express/modules/auth/docs/refresh-token-definitions.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/docs',
      refreshTokenDefinitionsSwagger,
      refreshTokenDefinitionsSwaggerGenerate.get(),
    );
  }

  generateModulesAuthController(){
    const refreshTokenPath = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'controller', 'refresh-token-controller.ts');
    const refreshTokenGenerate = require('../templates/infrastructure/express/modules/auth/controller/refresh-token-controller.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/controller',
      refreshTokenPath,
      refreshTokenGenerate.get(),
    );

    const signInPath = path.join(this.home, 'src', 'infrastructure', 'express', 'modules', 'auth', 'controller', 'sign-in-controller.ts');
    const signInGenerate = require('../templates/infrastructure/express/modules/auth/controller/sign-in-controller.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/modules/auth/controller',
      signInPath,
      signInGenerate.get(),
    );
  }

  generateKnex(){
    this.generateKnexFile();
    this.generateKnexConfig();
    this.generateKnexMigrations();
  }

  generateKnexMigrations(){
    const createUsersMigrationPath = path.join(this.home, 'src', 'infrastructure', 'knex', 'migrations', '20211201171705_create_users.ts');
    const createUsersMigrationGenerate = require('../templates/infrastructure/knex/migrations/create_users.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/knex/migrations',
      createUsersMigrationPath,
      createUsersMigrationGenerate.get()
    );

    const createRolesMigrationPath = path.join(this.home, 'src', 'infrastructure', 'knex', 'migrations', '20211207230955__create_roles.ts');
    const createRolesMigrationGenerate = require('../templates/infrastructure/knex/migrations/create_roles.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/knex/migrations',
      createRolesMigrationPath,
      createRolesMigrationGenerate.get()
    );

    const createUsersRolesMigrationPath = path.join(this.home, 'src', 'infrastructure', 'knex', 'migrations', '20211207231042_create_users_roles.ts');
    const createUsersRolesMigrationGenerate = require('../templates/infrastructure/knex/migrations/create_users_roles.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/knex/migrations',
      createUsersRolesMigrationPath,
      createUsersRolesMigrationGenerate.get()
    );

    const createTokensMigrationPath = path.join(this.home, 'src', 'infrastructure', 'knex', 'migrations', '20211207231110_create_tokens.ts');
    const createTokensMigrationGenerate = require('../templates/infrastructure/knex/migrations/create_tokens.command.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/knex/migrations',
      createTokensMigrationPath,
      createTokensMigrationGenerate.get()
    );    
  }

  generateKnexConfig(){
    const knexConfigPath = path.join(this.home,'src', 'infrastructure', 'knex', 'config', 'knex.dataBase.ts');
    const knexConfigTemplate = require('../templates/infrastructure/knex/knex.dataBase.template.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/knex/config',
      knexConfigPath,
      knexConfigTemplate.get(),
    );
  }


  generateKnexFile(){
    const knexFilePath = path.join(this.home, 'src', 'infrastructure', 'knex', 'knexfile.ts');
    const knexGenerate = require('../templates/infrastructure/knex/knexfile.template.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/knex',
      knexFilePath,
      knexGenerate.get(),
    );
  }
  
  generateServer(){
    const serverPath = path.join(`${this.home}/src/infrastructure/express/server.ts`)
    const serverGenerate = require('../templates/infrastructure/express/server.template.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express',
      serverPath,
      serverGenerate.get(),
    );
  }

  generateSetups() {
    this.generateSetUpApp();
    this.generateSetUpAsyncErrors();
    this.generateSetUpGlobalMiddlewares();
    this.generateSetUpRoutes();
  }

  generateSetUpApp() {
    const setUpAppPath = path.join(`${this.home}/src/infrastructure/express/setup/setup-app.ts`)
    const setUpAppGenerate = require('../templates/infrastructure/setup/setup-app.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/setup',
      setUpAppPath,
      setUpAppGenerate.get(),
    );
  }

  generateSetUpAsyncErrors() {
    const setUpAsyncErrorsPath = path.join(`${this.home}/src/infrastructure/express/setup/setup-async-errors.ts`)
    const setUpAsyncErrorsGenerate = require('../templates/infrastructure/setup/setup-async-errors.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/setup',
      setUpAsyncErrorsPath,
      setUpAsyncErrorsGenerate.get(),
    );
  }

  generateSetUpGlobalMiddlewares() {
    const setUpGlobalMiddlewaresPath = path.join(`${this.home}/src/infrastructure/express/setup/setup-global-middlewares.ts`)
    const setUpGlobalMiddlewaresGenerate = require('../templates/infrastructure/setup/setup-global-middlewares.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/setup',
      setUpGlobalMiddlewaresPath,
      setUpGlobalMiddlewaresGenerate.get(),
    );
  }

  generateSetUpRoutes() {
    const setUpRoutesPath = path.join(`${this.home}/src/infrastructure/express/setup/setup-routes.ts`)
    const setUpRoutesGenerate = require('../templates/infrastructure/setup/setup-routes.template.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/setup',
      setUpRoutesPath,
      setUpRoutesGenerate.get(),
    );
  }

  generateMiddlewares() {
    this.generateAuthentication();
    this.generateFactory();
    this.generateInterface();
    this.generateRepository();
    this.generateRateLimit();
  }

  generateInterface() {
    this.generateFindUserWithRolesRepositoryInterface();
    this.generateUserWithRolesInterface();
  }

  generateFindUserWithRolesRepositoryInterface() {
    const findUserWithRolesRepositoryInterfacePath = path.join(`${this.home}/src/infrastructure/express/middlewares/interface/find-user-with-roles-repository-interface.ts`)
    const findUserWithRolesRepositoryInterfaceGenerate = require('../templates/infrastructure/middlewares/interface/find-user-with-roles-repository-interface.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/middlewares/interface',
      findUserWithRolesRepositoryInterfacePath,
      findUserWithRolesRepositoryInterfaceGenerate.get(),
    );
  }

  generateUserWithRolesInterface() {
    const userWithRolesInterfacePath = path.join(`${this.home}/src/infrastructure/express/middlewares/interface/user-with-roles-interface.ts`)
    const userWithRolesInterfaceGenerate = require('../templates/infrastructure/middlewares/interface/user-with-roles-interface.template.js');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/middlewares/interface',
      userWithRolesInterfacePath,
      userWithRolesInterfaceGenerate.get(),
    );
  }

  generateRateLimit() {
    const rateLimitPath = path.join(`${this.home}/src/infrastructure/express/middlewares/rate-limit.ts`)
    const rateLimitGenerate = require('../templates/infrastructure/middlewares/rate-limit.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/middlewares',
      rateLimitPath,
      rateLimitGenerate.get(),
    );
  }

  generateAuthentication() {
    const authenticationPath = path.join(`${this.home}/src/infrastructure/express/middlewares/authentication/is-authenticated.ts`)
    const authenticationGenerate = require('../templates/infrastructure/middlewares/authentication/is-authenticated.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/middlewares/authentication',
      authenticationPath,
      authenticationGenerate.get(),
    );
  }

  generateFactory() {
    const factoryPath = path.join(`${this.home}/src/infrastructure/express/middlewares/factory/is-authenticated-middleware-factory.ts`)
    const factoryGenerate = require('../templates/infrastructure/middlewares/factory/is-authenticated-middleware-factory.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/middlewares/factory',
      factoryPath,
      factoryGenerate.get(),
    );
  }
  
  generateRepository() {
    const repositoryPath = path.join(`${this.home}/src/infrastructure/express/middlewares/repository/find-one-with-roles-repository.ts`)
    const repositoryGenerate = require('../templates/infrastructure/middlewares/repository/find-one-with-roles-repository.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/middlewares/repository',
      repositoryPath,
      repositoryGenerate.get(),
    );
  }

  generateDocs() {
    this.generateDefinitionsSwagger();
    this.generateDocsSwagger();
    this.generatePathsSwagger();
  }

  generateDefinitionsSwagger() {
    const definitionsSwaggerPath = path.join(`${this.home}/src/infrastructure/express/docs/definitions.swagger.ts`)
    const definitionsSwaggerGenerate = require('../templates/infrastructure/docs/definitions.swagger.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/docs',
      definitionsSwaggerPath,
      definitionsSwaggerGenerate.get(),
    );
  }

  generateDocsSwagger() {
    const docsSwaggerPath = path.join(`${this.home}/src/infrastructure/express/docs/docs.swagger.ts`)
    const docsSwaggerGenerate = require('../templates/infrastructure/docs/docs.swagger.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/docs',
      docsSwaggerPath,
      docsSwaggerGenerate.get(),
    );
  }

  generatePathsSwagger() {
    const pathsSwaggerPath = path.join(`${this.home}/src/infrastructure/express/docs/paths.swagger.ts`)
    const pathsSwaggerGenerate = require('../templates/infrastructure/docs/paths.swagger.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/docs',
      pathsSwaggerPath,
      pathsSwaggerGenerate.get(),
    );
  }

  generateAdapters() {
    this.generateExpressMiddlewareAdapter();
    this.generateExpressRouterAdapter();
  }

  generateExpressMiddlewareAdapter() {
    const expressMiddlewareAdapterPath = path.join(`${this.home}/src/infrastructure/express/adapters/express-middleware-adapter.ts`);
    const expressMiddlewareAdapterGenerate = require('../templates/infrastructure/adapters/express-middleware-adapter.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/adapters',
      expressMiddlewareAdapterPath,
      expressMiddlewareAdapterGenerate.get(),
    );
  }

  generateExpressRouterAdapter() {
    const expressRouterAdapterPath = path.join(`${this.home}/src/infrastructure/express/adapters/express-route-adapter.ts`);
    const expressRouterAdapterGenerate = require('../templates/infrastructure/adapters/express-router-adapter.template');

    this.generate(
      `${this.home}`+'/src/infrastructure/express/adapters',
      expressRouterAdapterPath,
      expressRouterAdapterGenerate.get(),
    );
  }

  generatePresentation() {
    this.genaricCreatedResponse();
    this.genaricDeletedResponse();
    this.genaricUpdatedResponse();
    this.genaricMessageResponse();
    this.genaricSuccessResponse();
  }

  genaricCreatedResponse() {
    const genaricCreatedPath = path.join(
      `${this.home}/src/presentation/responses/generic-created-response.ts`,
    );
    const genaricCreatedGenerate = require('../templates/presentation/generic-created-response.template');

    this.generate(
      `${this.home}`+'/src/presentation/responses',
      genaricCreatedPath,
      genaricCreatedGenerate.get(),
    );
  }

  genaricDeletedResponse() {
    const genaricDeletedPath = path.join(
      `${this.home}/src/presentation/responses/generic-deleted-response.ts`,
    );
    const genaricDeletedGenerate = require('../templates/presentation/generic-deleted-response.template');

    this.generate(
      `${this.home}`+'/src/presentation/responses',
      genaricDeletedPath,
      genaricDeletedGenerate.get(),
    );
  }

  genaricUpdatedResponse() {
    const genaricUpdatedPath = path.join(
      `${this.home}/src/presentation/responses/generic-updated-response.ts`,
    );
    const genaricUpdatedGenerate = require('../templates/presentation/generic-updated-response.template');

    this.generate(
      `${this.home}`+'/src/presentation/responses',
      genaricUpdatedPath,
      genaricUpdatedGenerate.get(),
    );
  }

  genaricMessageResponse() {
    const genaricMessagePath = path.join(
      `${this.home}/src/presentation/responses/generic-message-response.ts`,
    );
    const genaricMessageGenerate = require('../templates/presentation/generic-message-response.template');

    this.generate(
      `${this.home}`+'/src/presentation/responses',
      genaricMessagePath,
      genaricMessageGenerate.get(),
    );
  }

  genaricSuccessResponse() {
    const genaricSuccessPath = path.join(
      `${this.home}/src/presentation/responses/generic-success-response.ts`,
    );
    const genaricSuccessGenerate = require('../templates/presentation/generic-success-response.template');

    this.generate(
      `${this.home}`+'/src/presentation/responses',
      genaricSuccessPath,
      genaricSuccessGenerate.get(),
    );
  }
  
  generateDepedencies() {
    this.generatePackage();
    this.generateTsConfig();
    this.generateJestConfig();
    this.generateDocker_Compose();
    this.generateCommitLint();
    this.generateBabelConfig();
    this.generatePrettierConfig();
    this.generateGitIgnore();
    this.generateEsLintConfig();
    this.generateDotEnv();
    this.generateEditorConfig();
  }

  generateVsCode() {
    const vsCodePath = path.join(
      `${this.home}/.vscode/launch.json`,
    );
    const vsCodeGenerate = require('../templates/vsCode.template');

    this.generate(
      `${this.home}`+'/.vscode',
      vsCodePath,
      vsCodeGenerate.get(),
    );
  }  

  generatePackage(){
    const packagePath = path.join(
      `${this.home}/package.json`,
    );
    const packageGenerate = require('../templates/package.template');

    this.generate(
      this.home,
      packagePath,
      packageGenerate.get(this.name),
    );
  }

  generateTsConfig() {
    this.generateTsConfig_Normal();
    this.generateTsConfig_Build();
  }

  generateTsConfig_Normal() {
    const tsConfigPath = path.join(
      `${this.home}/tsconfig.json`,
    );
    const tsConfigGenerate = require('../templates/tsconfig.template');

    this.generate(
      this.home,
      tsConfigPath,
      tsConfigGenerate.get(),
    );
  }

  generateTsConfig_Build() {
      const tsConfigPath = path.join(
        `${this.home}/tsconfig.build.json`,
      );
      const tsConfigGenerate = require('../templates/tsconfig.build.template');

      this.generate(
        this.home,
        tsConfigPath,
        tsConfigGenerate.get(),
      );
  }

  generateJestConfig() {
    const jestConfigPath = path.join(
      `${this.home}/jest.config.js`,
    );
    const jestConfigGenerate = require('../templates/jest.template');

    this.generate(
      this.home,
      jestConfigPath,
      jestConfigGenerate.get(),
    );
  }

  generateDocker_Compose() {
    const dockerComposePath = path.join(
      `${this.home}/docker-compose.yml`,
    );
    const dockerComposeGenerate = require('../templates/docker-compose.template');

    this.generate(
      this.home,
      dockerComposePath,
      dockerComposeGenerate.get(),
    );
  }

  generateCommitLint() {
    const commitLintPath = path.join(
      `${this.home}/commitlint.config.js`,
    );
    const commitLintGenerate = require('../templates/commitlint.template');

    this.generate(
      this.home,
      commitLintPath,
      commitLintGenerate.get(),
    );
  }

  generateBabelConfig() {
    const babelConfigPath = path.join(
      `${this.home}/babel.config.js`,
    );
    const babelConfigGenerate = require('../templates/babel.template');

    this.generate(
      this.home,
      babelConfigPath,
      babelConfigGenerate.get(),
    );
  }

  generatePrettierConfig() {
    const prettierConfigPath = path.join(
      `${this.home}/.prettierrc.js`,
    );
    const prettierConfigGenerate = require('../templates/prettier.template');

    this.generate(
      this.home,
      prettierConfigPath,
      prettierConfigGenerate.get(),
    );
  }

  generateGitIgnore() {
    const gitIgnorePath = path.join(
      `${this.home}/.gitignore`,
    );
    const gitIgnoreGenerate = require('../templates/gitignore.template');
 
    this.generate(
      this.home,
      gitIgnorePath,
      gitIgnoreGenerate.get(),
    );
  }

  generateEsLintConfig() {
    this.generateEsLint();
    this.generateEsLint_Ignore();
  }

  generateEsLint() {
    const esLintPath = path.join(
      `${this.home}/.eslintrc.js`,
    );
    const esLintGenerate = require('../templates/eslint.template');

    this.generate(
      this.home,
      esLintPath,
      esLintGenerate.get(),
    );
  }

  generateEsLint_Ignore() {
    const esLintIgnorePath = path.join(
      `${this.home}/.eslintignore`,
    );
    const esLintIgnoreGenerate = require('../templates/eslintignore.template');

    this.generate(
      this.home,
      esLintIgnorePath,
      esLintIgnoreGenerate.get(),
    );
  }

  generateDotEnv() {
    const dotEnvPath = path.join(
      `${this.home}/.env`,
    );
    const dotEnvGenerate = require('../templates/dotenv.template');

    this.generate(
      this.home,
      dotEnvPath,
      dotEnvGenerate.get(),
    );
  }

  generateEditorConfig() {
    const editorConfigPath = path.join(
      `${this.home}/.editorconfig`,
    );
    const editorConfigGenerate = require('../templates/editorconfig.template');

    this.generate(
      this.home,
      editorConfigPath,
      editorConfigGenerate.get(),
    );
  }
};
