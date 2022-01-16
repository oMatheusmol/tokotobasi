const commands = require('./commands');

export function cli(argv) {
    if(argv[2] ===('create') || argv[2] ===('c')){
       new commands.create_command(argv[3]).command()
    }

    if(argv[2] === ('--version') || argv[2] ===('-v')){
       new commands.version().command()
    }
}