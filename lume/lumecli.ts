// Typical way of setting up lume is to use `echo \"import 'lume/cli.ts'\" | deno run --unstable -A -``
// but that makes it difficult to pass arguments to the script as part-of a deno task. Hence creating 
// this simple import. See deno.json for the use of this file.
//
// TODO: Set up a better way to generate this file from the flake. Either as a entry shell script or
//       as a derivation.
//
import "lume/cli.ts";