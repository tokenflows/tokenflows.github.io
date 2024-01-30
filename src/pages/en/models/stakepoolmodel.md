---
# Page settings
id: stakepoolmodel
lang: en
url: /models/stakepoolmodel/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "EUTxO" ]
comments: false

# Hero section
title: Developing a Cardano Stakepool cadCAD Model
description: Cardano uses a Proof-of-Stake (PoS) system to secure the settlement layer of the network. To optimise and understand the dynamics of running a Cardano stakepool, we are designing a cadCAD model of Cardano's Stake-pool incentives.

buttons:
    - content: Button
      url: '#'
      external_url: false
    - icon: github
      content: Button with icon
      url: '#'
      external_url: true

# Author box
author:
    title: Cardano Stake Pools
    title_url: 'https://cardano.org/stake-pool-operation/'
    external_url: true
    description: All the information about stake pool operation on Cardano.

# Micro navigation
micro_nav: true

---

A cadCAD model of a Cardano stake pool has been made in Jupyter notebooks. This exercise was useful to apply token engineering skills to a real world problem and to create a tool which stake pool operators (+ others) can benefit from.

As a stake pool operator, its useful to know what revenue and rewards can be expected based on the parameters you set and the variability in the system.

We have created three notebooks:

1. **Expected Blocks:** Calculates the number of blocks a stake pool is expected to produce this epoch. This is based off the pools' performance over the past 50 epochs.
2. **Stake Pool Parameter Sweep:** Calculates pool performance, expected rewards, fee rewards and pool stake over a number of epochs. Can see which combinations of pledge and pool margin fee produce expected outputs mentioned above. Useful for stake pool operators to set parameters and analyse how pool performance will impact their business plans.
3. **Pool Comparison:** Compares three pools of your choice. Shows expected performance and rewards based off the pool operator's parameters set, such as margin fee, pledge and fixed cost. Useful to gain insight into what parameters high (or low) performing pools are setting and their relative results.

To create these models, we had a question of our own - If we launch a stake pool, what rewards would it earn and how much of that can provide revenue for our DAO? Which led to the question - what should we set pool parameters such as pledge and margin fee to? We decided to create a cadCAD model in order to run many 'what-if' analysis' and identify optimal parameters to set within our constraints (budget and timeframe).

To build the model it was imperative to understand how a Cardano stake pool is designed. Thus began a thorough read through of IOHK's (now IOG) papers on the design of [Cardano's Ouroboros Protocol](https://eprint.iacr.org/2016/889.pdf) and [Design Specification for Delegation and Incentives in Cardano](https://www.adatainment.com/_downloads/docs/delegation_design_spec.pdf). Plus many other articles and videos to solidify this understanding in a practical context.

Following on, we needed a way to query a Cardano node so we can use on-chain data. A Cardano node was set up on my machine and then fully synced up. Cardano-DB-Sync was used to populate the on-chain data from the node into a Postgres database, also run locally.

Now, we could create a Jupyter notebook where we:

- Stated assumptions + instructions on how to use the notebook
- Explained calculations + logic
- Queried on-chain data from Cardano Mainnet
- Used this data + initial parameters to feed into the model behaviour and mechanisms
- Which can then be simulated, accounting for uncertainty (Monte Carlo runs)
- And analyse this data through interactive charts and tables

This is a robust and comprehensive way to find quality answers for all your 'what-if' questions. Yes, there was a large sunk cost to developing these models rather than just creating a fancy spreadsheet calculator. However, the value for ourselves as well as others within the community should prove to be worth it. These models are open source and can be built upon further; they really start to show their worth as you add more aspects of the system into the model.

We want to improve upon these models so they perform faster, can be run in the browser seamlessly & interactively, provide even more informative simulation results, and incorporate machine learning for greater accuracy. We have put forth a [proposal](https://cardano.ideascale.com/c/idea/114457) in Project Catalyst to make a start on that.
