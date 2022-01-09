'use stric';

/**
 * Generate help
 */
module.exports = {
  helpOptions() {
    const table = [
      {
        name: 'controller',
        description: 'Generate a new model',
      },
      {
        name: 'repository',
        description: 'Generate a new model',
      },
      {
        name: 'route',
        description: 'Generate a new route',
      },
      {
        name: 'model',
        description: 'Generate a new model mongoose',
      },
      {
        name: 'dto',
        description: 'Generate a new dto',
      },
      {
        name: 'module',
        description: 'Generate a new module',
      },
      {
        name: 'lib',
        description: 'Generate a new lib',
      },
      {
        name: 'docs',
        description: 'Generate a route/response swagger',
      },
      {
        name: 'install',
        description: 'Generate a route/response install',
      },
    ];
    return table;
  },
};
