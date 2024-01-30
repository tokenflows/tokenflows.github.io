---
# Page settings
id: workingwithcadcad
lang: en
url: /posts/workingwithcadcad/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "EUTxO" ]
comments: false

# Hero section
title: Modelling and Simulation with cadCAD
description: cadCAD (complex adaptive dynamics Computer-Aided Design) is an open-source Python library 
             designed for simulating and analysing token models. It is a powerful tool in token engineering, 
             allowing us to test the behavior of token systems under various conditions and scenarios.

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
    title: About cadCAD
    title_url: 'https://www.cadcad.org/'
    external_url: true
    description: cadCAD is a Python package that assists in the processes of designing, testing and validating complex systems through simulation, with support for Monte Carlo methods, A/B testing and parameter sweeping.

# Micro navigation
micro_nav: true

---

cadCAD is an open source software used to model and simulate any complex system. It is used to perform 'what-if' analysis on any complex system model. This model has to be written in Python and structured in a standard notebook layout. Jupyter notebooks is what we use but any suitable alternative can be used (e.g. Google Colab). There is plenty of documentation and free bootcamps to learn how to use [cadCAD](https://www.cadcad.org/). While there are other modelling and simulation tools, we have found cadCAD to be the most comprehensive.

A key aspect of Token Engineering is to be able to test, validate and optimise you token design. This is important because we need to see:

- Whether our design is behaving as expected (or not)
- Then improve it

By running different types of simulations we can gain insights and then optimise our design.

There are three types of simulations we can run:

1. Monte Carlo simulations are used to test randomness and variability within your model. This is useful to account for uncertainty and analyse best/worst case outcomes.

   E.g. Designing a token for a DeFi application. Monte Carlo simulations can be used to predict how market volatility might impact the token's value or how users might react to different reward structures under various market conditions.

2. Parameter sweeps are a way to see which set of inputs provide what set of outputs. This is useful to set optimal parameters for your system e.g. pledge and pool margin fee for your stake pool.

   E.g Consider a token used for governance in a DAO. By performing parameter sweeps, we can determine the ideal number of tokens required for voting rights, or the optimal token distribution model that encourages widespread participation while maintaining fair governance.

1. A/B testing is used to compare different models to each other.

   E.g Experimenting different incentive mechanisms for a token, we can create two models: one with a high transaction fee and high rewards, and another with lower fees and rewards. A/B testing these models can help identify which structure better balances network sustainability with user participation.

More sophisticated analysis can be done too, once the basics have been developed. We can use cadCAD for things such as:

- Machine learning supported sensitivity analysis - useful for decision making in large simulations which can be difficult to directly analyse
- Compare simulation results to real historical data - giving further confidence in model
- Using radCAD (built upon cadCAD) for increased simulation performance
- Create a cadCAD web front-end using Plotly's Dash. This is pretty cool as you can create an interactive web application where simulations can run in the browser.
