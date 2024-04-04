---
id: stakepoolmodel
lang: en
url: /models/stakepoolmodel/
layout: layouts/default.njk
keywords:
  - Token
  - Token Engineering
  - EUTxO
  - ADA
  - Decentralisation
  - Cryptocurrency
  - Cardano
  - Modelling
  - Stakepool
  - Simulation
  - Economics Design
comments: false
title: Developing a Cardano Stakepool cadCAD Model
description: We are going to be using a Cardano Stake pool model as the foundation of our project to help you master cadCAD and token engineering. The objective is to construct a cadCAD model that maps out the incentives and operational dynamics specific to running a stake pool within Cardano's Proof-of-Stake (PoS) system that is used to secure the settlement layer of the network.
buttons:
  - content: Button
    url: "#"
    external_url: false
  - icon: github
    content: Button with icon
    url: "#"
    external_url: true
author:
  title: Project Catalyst Proposals
  title_url: /catalyst
  external_url: true
  description: Proposals to advance the art and science of token engineering on Cardano, including tutorials for mechanism design and models for analysis.
micro_nav: true
---

We have developed a cadCAD model of a Cardano stake pool using Jupyter notebooks. This serves as a practical example of token engineering skills applied to addressing a real-world challenge. This tool is designed to benefit stake pool operators, and the communities that often run stake pools, by providing insights into expected revenue and rewards based on set parameters and system variability.

We've crafted three notebooks to illustrate:

1. **Expected Blocks:** This notebook calculates the expected number of blocks a stake pool will produce in the current epoch, drawing on the pool's performance over the last 50 epochs.
2. **Stake Pool Parameter Sweep:** Here we evaluate expected pool performance, anticipated rewards, fee rewards, and pool stake across several epochs. It allows users to explore various combinations of pledge and pool margin fee to determine their impact on expected outcomes. This is particularly useful for stake pool operators to adjust parameters and understand their influence on the business strategies of the operator.
3. **Pool Comparison:** This notebook facilitates the comparison of three selected pools, showing expected performance and rewards based on the operator's settings, such as margin fee, pledge, and fixed cost. It offers insights into the strategies of high- or low-performing pools and their outcomes.

The genesis of these models was our curiosity about the potential rewards of launching a stake pool and its revenue contribution to our DAO. This led us to question the optimal settings for pool parameters like pledge and margin fee. To address these questions, we chose to develop a cadCAD model to conduct various 'what-if' analyses and pinpoint the best parameters within our constraints of budget and timeframe.

Constructing the model required a deep dive into the design of a Cardano stake pool. We meticulously reviewed IOHK's (now IOG) papers on the Cardano's [Ouroboros Protocol](https://eprint.iacr.org/2016/889.pdf) and the [Design Specification for Delegation and Incentives in Cardano](https://eprint.iacr.org/2016/889.pdf), along with numerous other resources to gain a practical understanding.

Subsequently, we established a Cardano node locally and synchronised it. We then utilised Cardano-DB-Sync to transfer on-chain data from the node to a  Postgres database, also hosted locally .

With this setup, we developed a Jupyter notebook to:

- Outline assumptions and usage instructions
- Detail calculations and underlying logic
- Fetch on-chain data from the Cardano Mainnet
- Input this data and initial parameters into the model's behaviour and mechanisms
- Simulate the model, incorporating uncertainty through Monte Carlo runs
- Analyse the results via interactive charts and tables

This approach offers a thorough and effective method to explore 'what-if' scenarios. While developing these models required significant investment, the anticipated value for our team and the community is substantial. These open-source models invite further development to demonstrate their true potential as more system aspects are integrated into the model.

We aim to enhance these models to increase their speed, enable seamless and interactive browser execution, deliver more insightful simulation outcomes, and integrate machine learning for improved precision. Our proposal to initiate this improvement process and share our progress with you can be found in the latest Project Catalyst fund.
