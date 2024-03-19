---
# Page settings
id: selectingStakePoolOnCardano
lang: en
url: /posts/selectingstakepooloncardano/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "EUTxO", "Proof-Of-Stake"]
comments: false

# Hero section
title: "EP2: Selecting a Stake Pool on Cardano"
description: Some explanation here...

# Author box
author:
    title: Decentralisation
    title_url: '/posts/decentralisation/'
    external_url: true
    description: Episode 3 description...

# Micro navigation
micro_nav: true

# Page navigation
nav:
    index:
        content: Back to our blog
        url: '/blog/'
---
Checkout [Episode 2]( https://www.youtube.com/watch?v=R1FBI7g6iLI&t)

{{< anchor Selecting-a-Stake-Pool-on-Cardano---A-look-a-metrics-and-delegation-eit79v >}}

Thanks for tuning in. In this episode, I'll be focusing on Cardano and a process called stake-pool delegation. 

I'll be covering Cardano a lot in this channel, but in this episode I thought I would walk through understanding stake-pool metrics and how to delegate your Ada. I'll look at setting up a Wallet, selecting a Stake-Pool, then delegating the Wallet to it. I'm going to explain the process using the the Daedalus Wallet. Other Wallets such as Yoroi and Adalight will support staking soon; and custody services such as Coinbase Custody will also eventually enable this. 

The process with these will be similar to what I explain here. If you need a little background to Proof-of-Stake the previous video covers that. 
I've linked to it and the Daelalus Wallet software along with other resources mentioned in the video in the description below.

## What are Wallets?

A Wallet is a public and private key pair. A pair of "magic" cryptographic numbers that help identify, protect, and sign transactions in the network. A Wallet application is a bit of software that helps you manage these cryptographic keys. Since crypto-currency holdings can represent significant value, good practice includes using a hardware wallet— a small physical device specifically engineered to manage private keys. It's the private keys which enable you to spend tokens and perform other tasks so these need to be handled with care. Cardano's best known wallet applications are Daedalus and Yoroi.  

![](/assets/images/gif/ep2/Daedalus_yoroi_master.gif)

Wallet applications to date have focused on Crypto-currencies; but as the use of tokens, certificates, and smart-contracts become more prevalent in the coming years, wallet software will help manage different processes.You can see this evolution in the Daedalus's delegation center, the features of the  application that help you delegate your Ada stake. 

We will be covering this more in a moment, but first we need to install Daedalus.

## Daedalus

Each time you run Daedalus it will sync up with the network but in general that happens in the background. Since Daedalus is a full-node wallet application, which means it pulls down an entire copy of the Cardano Blockchain the first time you run it, Daedalus will need a little bit of time to sync up with the network. Its takes up to 2 hours to sync up the full block so you can see why lite wallets such as Yoroi or Ada light have an advantage.

![](/gif/ep2/Final_wallet_hub_comp.gif)

If this is the first time using Daedalus you'll need to either create a new wallet or restore one from a seed phrase if you've had a Ada wallet in Yoroi for example. In this case I already have Ada in my wallet but you can always go to an exchange or crypto currency retailer to obtain Ada.

![](/gif/ep2/wallet_restoration_creation.gif)

Now that we have a Wallet with Ada in it, we are ready to start making decisions about delegating our Ada. This amounts to deciding on which Stake-Pool we want to delegate to.  Delegation happens at the Wallet level, so if you want to delegate to more than one Stake-Pool, then you'd create more Wallets. 

## Delegating Rules

Ten Ada is the minimum amount required in a wallet for delegating.

Delegating a Wallet creates a special rewards wallet that receives earned rewards, and incurs a small transaction fee to register the delegation on the blockchain. Any changes to delegation preferences require a full epoch to elapse before they take effect. Since this delay will affect the expected return, you don't want to be switching up your delegation preferences too often. 

In other words, we should be making informed decisions about whom to delegate to. 

Keep in mind that Stake-Pools can retire too, so you will need to keep an eye on your stakes over time to ensure they are delegated productively. For simplicity, I'm going to delegate to one Stake-Pool so I've created a single Wallet to do this.

![](/gif/ep2/Retiring_stake_pool.gif)


## Stake Pools

To make the selection process and monitoring straightforward and consistent, Daedalus includes a visual grading system of the publicly registered Stake-Pools. There is also a reward calculator, that I've linked to in the description, that can help us get a sense of expected returns. 

As I mentioned before Daedalus's User Interface includes a Delegation Centre. The area of the Wallet application designed to help you make a decision for wallet delegation. In the "Stake-Pools" tab of Daedalus's Delegation Centre, each Pool is represented as a tile and dynamically ranked according to criteria that help to illuminate the past and expected productivity of the Pool.

Each tile uniformly represents a Stake-Pool: A five character pool symbol, the ranking, an optional retirement badge, and a saturation indicator. Clicking on any tile reveals more information about the Pool:  an ID, a web link, and factors that contribute to the ranking. Each Stake-Pool can be viewed as a micro-enterprise competing for community delegations since this enables them to produce blocks and earn fees. 

![](/gif/ep2/ref_stake_analysis_10.gif)

To help operators promote their Pool, the listing includes a web link. This enables the operator to position themselves uniquely. It includes featuring their set-up, their long-term performance, their contribution to the Cardano ecosystem and even making promises to invest profits to some other causes. 

## Stake Pool Operators

Many operators just provide a dashboard that gives a bit of transparency into the operation of the node, but overtime we can expect Stake-Pool operators to become more sophisticated. A Pools desirability features numerically in the tile as it's rank but also orders the tiles. 

I'll explain some of the factors that contribute to this ranking in a moment.

## Saturation

Each tile shows a Pool's Saturation. A combination of bar length and associated colour offer a quick visual clue to the relative amount of Ada delegated with a Pool.

![](/gif/ep2/Pool_saturation_flux.gif)

The Ouroboros incentive mechanism caps earning potential of a Pool if too much Ada is pledged and delegated to it. The rule prevents a "rich-get-richer" outcome and therefore helps to mitigate consolidation of the stake-pools into a few operators.

![](/gif/ep2/pool_consolidation.gif)

One hundred per cent Saturation is where a pool has an optimal amount of Ada delegated to it. Anything beyond one hundred per cent is non-optimal for distributing block production across the network. The bar colour varies from Green to Orange. Green indicates a pool is undersaturated, and orange indicates an oversaturated one. Since the actual Ada in delegated Wallets can be transferred or spent easily by the owner, Saturation will be dynamic.

## Stake Pool Metrics

Drilling into a Pool's metrics a little deeper we have; Controlled Stake, Pool Margin, Pledge, Cost per Epoch, and Produced blocks. Controlled Stake shows the ratio of Ada delegated to the pool and pool margin is the operation fee charged after the cost is deducted. The Pool margin is the fee charged by the pool operator and is applied to the pool's earned rewards after costs have been deducted. Pledge reveals how much Ada the owners have delegated to their Pool. Pledges signal a commitment to operating a stake-pool and producing blocks, such that it is in the operators and owners interest to be honest.

![](/gif/ep2/pool_detail_final_comp.gif)

The Pledge amount is an opportunity cost to the operator on top of the node's running costs. A higher pledge means a greater level of commitment so they can charge a higher Pool Margin. The pledge amount also factors into the reward calculation, giving a reward boost for higher pledgers. Mitigating something called a Sybil attack and hence operators. This design aims to ensure that pool operators don't masquerade as many different pools or monopolise the system.

The Cost-Per-Epoch, is an operation fee deducted from the Pool's reward after each epoch. 

After the cost and margin are deducted from the pool's reward, what Ada remains is distributed to the Pool's stake reward wallets. Pledge and delegated Ada make up the total stake of a pool, so the rewards are issued on a pro-rata basis to the appropriate reward wallet. 

The Pool's Operator sets the Pool-Margin, Pledge amount, and Cost-Per-Epoch. To offset short-term profit-maximising. These factors all contribute to calculating the desirability and rank of the Pool. 

## Overall Recap

Now all of that is a lot to take in! 

The objective of the overall design is to create a well-distributed, decentralised network. A network topology that can sustain both ongoing operations and encourage continued participation beyond any Ada exchange value speculation. When we've selected the Pool we're going to delegate to, It's a reasonably straightforward process: We select the Pool; click delegate; choose a wallet; then confirm this by entering your spending password.

As discussed before, there is a ten Ada minimum fee to delegate a Wallet to a Stake-Pool. We can transfer Ada in and out at any time. Wallets can be delegated to other Pools at any time. However, any changes to the preferences take a full epoch to take effect and you start seeing rewards. In both cases a transaction fee applies for transfers or delegation. 

How you decide to delegate is entirely up to you but the intention is that you make an informed decision that benefits both you and the Cardano network. 

I research the pools and get to know them a little bit, then factor in the ranking metrics before I delegate. Typically I choose a pool that aligns with building a healthy ecosystem. 

Don't be afraid to delegate to the the slightly lower ranks either! 

Remember that these pools are completely dynamic and are subject to delegation and performance updates. So what might be a slightly lower ranking Stake-Pool, could end-up offering a higher return in the end.

> **Disclaimer**: Just a little note about the Shelley era. At the time of recording, Cardano was in the early days of the Shelley so the ranking and performance of the Stake-Pools is randomised for the moment and the network is slowly moving to being decentralised over the next few months. I've chosen to discuss everything as if this whole decentralisation process has been completed.

I hope I've created enough interest for you to at least experiment with staking on Cardano. Perhaps even motivating you to obtain some Ada yourself and give staking a try. Overall the Cardano Network is well-engineered and able to evolve continually. In the next episode I'll be making an argument for Cardano, what makes it unique with respect to other blockchain projects.

Anyway, thanks for listening Ka kite anō and I’ll see you in the next one.

---

## Resources

Cardano Simply Explained:  https://www.youtube.com/watch?v=Do8rHvr65ZA&t=4s


---

## Support ❤️

Follow me on twitter and paetreon!

Twitter: https://twitter.com/atmetaphor  

Paetreon: https://www.patreon.com/user?u=40044108

and if you like the content and want to support me you can always send me some Ada :D

ADA: addr1qyzl4u7c0299h85unkmd4ap2z7mvcyex3kn3ffecjxrwdw
32gqhx3vvnf7r92epv3qtjh9rl4qfl33kmgvrdj04h0z3qstlnes

BTC: 3GJpGhAHn1ewpiSBonp2JXRxCYmn8XAGYb

ETH: 0xdFF5eD012135B0eC71Bc436F90F7fB6A8bE93934