# SPDX-FileCopyrightText: 2024 tokenflows <https://tokenflows.xyz/>
#
# SPDX-License-Identifier: Apache-2.0

let
  lock = builtins.fromJSON (builtins.readFile ./flake.lock);
  locked = lock.nodes.flake-compat.locked;
  compat = fetchTarball {
    url = "https://github.com/${locked.owner}/${locked.repo}/archive/${locked.rev}.tar.gz";
    sha256 = locked.narHash;
  };

  flake = import compat { src = ./.; };
in
flake.shellNix