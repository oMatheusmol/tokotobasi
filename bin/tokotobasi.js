const commands = require('./commands');

export function cli(argv) {
    if(argv[2] === 'create' || argv[2] === 'c')  {
        if(!argv[3]) return console.log('Project name is required');
       new commands.create_command(argv[3]).command()
    }

    if(argv[2] === '--version' || argv[2] === '-v')  {
       new commands.version().command()
    }

    if(argv[2] === 'module' || argv[2] === 'm')  {
        if(!argv[3]) return console.log('Module name is required');
         new commands.module(argv[3]).command()
    }

    if(argv[2] === '--help' || argv[2] === '-h') {
        console.log('Usage: tokotobasi [command] [options]');
        console.log('Available commands:');
        console.log('  create [name] or c [name] Create a new project');
        console.log('  module [name] or m [name] Create a new module');
        console.log('  --version or -v');
    }

    if(
        argv[2] !== 'create' && 
        argv[2] !== 'c' && 
        argv[2] !== 'module' && 
        argv[2] !== 'm' && 
        argv[2] !== '--version' && 
        argv[2] !== '-v' && 
        argv[2] !== '--help' &&
        argv[2] !== '-h'
        ) {
        console.log('Command not found');
        console.log('Use --help to see available commands');
    }
}