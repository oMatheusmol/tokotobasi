import arg from 'arg';
const commands = require('../src/commands');
const command_const = require('./constants/command.const');


function parseArgumentsIntoOptions(rawArgs){
    const args = arg(
        {
            '--version': Boolean,
            '--git': Boolean,
            '--install': Boolean,
            '-v': '--version',
            '-g': '--git',
            '-i': '--install'

        },
        {
            argv: rawArgs.slice(2)
        }
    );

    return {
        version: args['--version'] || args['-v'],
        git: args['--git'] || args['-g'],
        install: args['--install'] || args['-i']
    };

}



export function cli(argv) {
    let options = parseArgumentsIntoOptions(argv);
    if(options.install){
       new commands.install_command(argv[3]).command()
    }
}