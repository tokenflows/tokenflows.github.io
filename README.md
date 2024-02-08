# Tokenflow Base Site

TokenFlows a hub to share and learn Token Engineering on EUTxO blockchains.

To install and update you must have [nix installed](https://determinate.systems/posts/graphical-nix-installer) 
first and ideally you have installed [direnv](https://direnv.net/) into your nix system configuration.

The website is built with [Deno](https://deno.com/) and the static site generator [Lume](https://lume.land/).
With Nix installed, checkout this repository and change into the project directory. Run ``direnv Allow .`` to
setup the necessary environment with Nix. Then run ``deno task dev`` to build and run a local instance of the 
website.