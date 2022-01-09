import arg from 'arg';
const commands = require('../src/commands');
const command_const = require('./constants/command.const');


function parseArgumentsIntoOptions(rawArgs){
    const args = arg(
        {
            '--version': Boolean,
            '--git': Boolean,
            '--create': Boolean,
            '-v': '--version',
            '-g': '--git',
            '-c': '--create'

        },
        {
            argv: rawArgs.slice(2)
        }
    );

    return {
        version: args['--version'] || args['-v'],
        git: args['--git'] || args['-g'],
        create: args['--create'] || args['-c']
    };

}



export function cli(argv) {
    let options = parseArgumentsIntoOptions(argv);
    console.log(options);
    if(options.create){
       new commands.create_command(argv[3]).command()
    }
}