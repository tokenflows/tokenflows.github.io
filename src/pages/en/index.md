---
# Page settings
id: home
lang: en
url: /

layout: layouts/index.njk
keywords: ["Token", "Token Engineering", "EUTxO" ]

# Hero section
title: Token Flows
description: Token Engineering on EUTxO Blockchains
buttons:
    - icon: arrow-right
      content: Getting Started
      url: '/tokenengineering/'
      external_url: false
    - icon: github
      content: Token Flows on Github
      url: 'https://github.com/tokenflows'
      external_url: true

# Author box
author:
    title: EUTXO Blockchains
    title_url: 'https://btcpeers.com/cardanos-extended-utxo-model-vs-ethereums-account-based-model/#:~:text=Cardano%20uses%20an%20extended%20unspent,tradeoffs%20of%20each%20blockchain%20network'
    external_url: false
    description: Token Engineering is agnostic to blockchain architectures, however most people learn by example. Current TE teaching assume Ethereums Balance Account model, we want to change that.

# Grid navigation
grid_navigation:
    - title: What is Token Engineering
      excerpt: Token Engineering is an emerging field that combines elements of economics, computer science, and systems engineering to design and analyze blockchain-based tokens. The primary focus in Token Engineering is on creating tokens that are secure, efficient, and equitable, ensuring they align with the overall system goals.
      cta: Getting Started
      url: '/tokenengineering'
    - title: Project Catalyst Proposals
      excerpt: We have actively participated in the "Project Catalyst" funding rounds. Our continued submissions reflect our commitment to advancing the ecosystem through token engineering education and tools.
      cta: Our Proposals
      url: '/catalyst/'
    - title: Modelling and Simulation with cadCAD
      excerpt: cadCAD (complex adaptive dynamics Computer-Aided Design) is an open-source Python library designed for simulating and analysing token models. It is a powerful tool in token engineering, allowing us to test the behavior of token systems under various conditions and scenarios.
      cta: Learn cadCAD
      url: '/posts/workingwithcadcad'
    - title: Cards, Maps, Canvases, and Calculators
      excerpt: The design of a token ecosystem requires a structured approach to capture and analyze requirements. This is where tools like Cards, Wardley Maps, Canvases, and Calculators play a pivotal role in developing the vision, strategy, and mechanics of a token model.
      cta: More on Design Methods
      url: '/methods/cardsandcanvases/'
    - title: Developing a Cardano Stakepool cadCAD Model
      excerpt: Cardano uses a Proof-of-Stake (PoS) system to secure the settlement layer of the network. To optimise and understand the dynamics of running a Cardano stakepool, we are designing a cadCAD model of Cardano's Stake-pool incentives.
      cta: Help us
      url: '/models/stakepoolmodel/'
    - title: EUTxO 'Process' Accounting
      excerpt: Cardano's Extended Unspent Transaction Output (EUTXO) model extends Bitcoins underlying process UTXO accounting methodology. However the EUTXO is unfarmiliar to most drawing parallels with the REA (Resource-Event-Agent) accounting ontology we compare and contrast the Ethereum balance accounting model.
      cta: Read More
      url: '/posts/eutxoaccounting/'
---
