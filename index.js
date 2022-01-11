#!/usr/bin/env node

require = require("esm")(module /*, options*/);
require("./bin/tokotobasi").cli(process.argv);

//node bin/tokotobasi -c new-project