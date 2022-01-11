#!/usr/bin/env node

require = require("esm")(module /*, options*/);
require("../src/cli").cli(process.argv);

//node bin/tokotobasi -c new-project