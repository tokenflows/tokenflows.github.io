{
  description = "Development environment for working with the yūmi.ai website. test";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    # Flake compatability
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat.url = "github:edolstra/flake-compat";
    flake-compat.flake = false;

    # devenv: See [documentation](https://devenv.sh/getting-started/)
    #
    # BROKEN: Using the current release v0.6.3 `processes`are broken in flakes. 
    #         See [issue: devenv up broken with flakes #756](https://github.com/cachix/devenv/issues/756)
    #         If you need to run processes with `devenv up`then switch the inputs. 
    #
    devenv.url = "github:cachix/devenv/9ba9e3b908a12ddc6c43f88c52f2bf3c1d1e82c1";
    # devenv.url = "github:cachix/devenv";  # Project Devshell
  };

  outputs = { self, nixpkgs, flake-utils, flake-compat, devenv, ... }@inputs:
    flake-utils.lib.eachSystem ["aarch64-darwin" "x86_64-darwin"] (system: 
    let
      pkgs = nixpkgs.legacyPackages.${system}; 
      projectRoot = builtins.getEnv "PWD"; # fyi. Impure!
    in {  
      devShells.default = devenv.lib.mkShell {
        inherit inputs pkgs;
        modules = [
          ({ config, pkgs, ... }: {
            packages = [ pkgs.deno pkgs.ponysay pkgs.crowdin-cli ];
            scripts.lume.exec = "${pkgs.deno}/bin/deno task $1";
            env = {
              DENO_DIR="${projectRoot}/.deno";
              INIT_CWD="${projectRoot}/src";
              LUME_DEST_DIR="../site";
              LUME_CONFIG_FILE="_config.ts";
            };

            # BROKEN: Processes in v0.6.3 are broken. See comment above about devenv input.  
            processes.lume.exec = "${pkgs.deno}/bin/deno task --cwd \"${projectRoot}/src\" dev";
          })
        ];
      };
  });
}