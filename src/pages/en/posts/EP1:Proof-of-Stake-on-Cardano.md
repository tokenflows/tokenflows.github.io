---
# Page settings
id: proofOfStakeOnCardano
lang: en
url: /posts/proofofstakeoncardano/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "EUTxO", "Proof-Of-Stake"]
comments: false

# Hero section
title: "Episode 1: Proof-of-Stake on Cardano"
description: Some explanation here...

# Author box
author:
    title: "EP2: Selecting a Stake Pool on Cardano"
    title_url: '/posts/selectingstakepooloncardano/'
    external_url: true
    description: Episode 2 description...

# Micro navigation
micro_nav: true

# Page navigation
nav:
    index:
        content: Back to our blog
        url: '/blog/'
---
Checkout [Episode 1]( https://www.youtube.com/watch?v=jqQe0Vk7GGc&t)

{{< anchor Selecting-a-Stake-Pool-on-Cardano---A-look-a-metrics-and-delegation-eit6h5 >}}

Decentralised finance continues the evolution of digital asset infrastructure toward lightweight forms of global finance. And like the crypto-currency era that underpins this radical experiment in economics, it comes with its own rapidly evolving uses and confusing language.

Tēnā koutou katoa, I'm Jack. Thanks for tuning in because I'll be focusing on Cardano's newly minted Shelly release, and with it, a process called Stake-Pool delegation. A process where you can accumulate ADA, earning income while supporting the operation of the Cardano Network— A genuinely decentralised network that doesn't burn through the electricity of a small island nation to solve cryptographic puzzles.

I'll be covering Cardano a lot in this channel, but for my first one, I thought I would walk through what Staking is, why you should care, what makes it useful and why it represents the first step toward Defi on Cardano.

## Recap on Blockchains

Before getting into some of the details, lets do a quick recap on Blockchains and their central idea.

![](/gif/ep1/laptop_and_phone_2.gif)

Wallet software on your laptop or smartphone creates transactions to spend or transfer funds. Full-nodes in the network receive the new transactions. These nodes validate the transactions then send them onto other peers. Depending on the rules of block production, the node may produce a new block that aggregates all new transactions together and links to a prior block. Eventually, new blocks propagate through the full-nodes in the network and a network-wide consensus forms over which blocks are authoritative. 

## Proof-of-Stake vs Proof-of-Work

Cardano's blockchain consensus protocol, called Ouroboros Praos, is based on the idea of Proof-of-Stake. Blockchains like Cardano and Bitcoin use to randomly decide which full-nodes in the network can produce blocks. How that lottery operates in Cardano is fundamentally different to Bitcoin or Ethereum; both these networks use something called Proof-of-Work to pick who can produce a block.

![](/gif/ep1/factory_3.gif)

Proof-of-Work is like an industrial aluminium smelter requiring specialised facilities and lots of electricity. While anyone in principle can spend the capital to do this, in practice consolidation of miners occurs. Proof-of-Stake, on the other hand, is more like liquid democracy. Stake-Pool operators, Cardano's equivalent to Bitcoin miners, participate in operating the network depending on the amount of ADA delegated to them. Roughly the more Ada stake the better the chance of producing a block. 

## What is ADA used for?

Ada is the native cryptocurrency of Cardano used for, among other things, to pay transaction fees and reward all the Stake-Pools operating the network. The goal is to distribute block production amongst the community, and around the planet. 

![](/gif/ep1/Coins.gif)

## Decentralisation

The term decentralisation is often used to describe a blockchain network and implies a broad community runs the system. It is a claim about who controls information flows in the network. It has other technical meanings too, but I'm focusing on the control aspect since this is a critical value proposition of many blockchain projects.

## Byron federation vs Shelly Decentralisation

Before the Shelly era, the Cardano network operated as a federation— the Cardano Foundation, Emurgo, and IOHK all managed nodes on the network's Mainnet and controlled block production as a result. While this helped secure the first operation of the system, it isn't ideal from a control and power perspective. The Shelly era optimises for decentralised community operation of the Mainnet.

![](/gif/ep1/cardano_federation.gif)

Ideally, one thousand community nodes will make up the core of running the network eventually— these community nodes, called Stake-Pools, can be set-up and operated by anyone technically competent enough to manage computers connected to the Internet and ensure the node performs it's protocol obligations. Unlike Bitcoin or Ethereum you don't need optimised hardware or cheap electricity. However, Stake-Pool Operators do need to convince the rest of the Ada holders to delegate their Ada to them.

## Epochs

The Ouroboros protocol breaks up the block production process into epochs. Epochs drive and account for the unit economics of the network's operation. Each epoch lasts for around five days so there are 73 epochs in a year.  Each Epoch is made-up of time-slots that are roughly one-to-two seconds each.

![](/gif/ep1/Epoch_clock.gif)

## How stake pools Produce Blocks

A Stake-Pool, the full-nodes in the network, are randomly assigned to be a slot-leader able to produce a block at different points within an epoch. If they don't show up in time or accept the task then they can be penalised by reducing the amount of rewards the pool receives and their community standing. 

![](/gif/ep1/lottery_slot_epoch_thing.gif)

The goal is to have the network produce a block approximately every twenty seconds. After an epoch has finished pool performance, distribution of fees, rewards, and monetary policy awards are calculated. 

## Incentive Design for Staking

The community as a whole has a vested interest in ensuring control does not collapse into a handful of Stake-Pools. Designing suitable incentives and associated mechanisms to balance out decentralisation, security, and community participation are tricky. 

Sustainably operating a Stake-Pool contributes to the public good of the network. We want to protect against attacks, they need to cover their costs; ideally, they should make a suitable profit; and we should all share in the profitable operation of the network. For community members not able or willing to run a Stake-Pool, the protocols need to incentivise participation in other ways, and that is what Staking does.

So what is Staking? Think of it like delegating your voting rights to someone else. In this case, the vote is about which Stake-Pools produce blocks and how often during an epoch.

Fortunately, the hall-mark of Cardano is thorough peer-reviewed research across disciplines. Coupled with solid software engineering the design objective of the Ouroboros protocol incentive structure is to create a stable equilibrium of  eventually 1000 community-run, and selected Stake-Pools that through collective action, operate the Cardano network in a long-term sustainable way. Frankly, when you dig into the details, this is all just pure awesome.

![](/gif/ep1/peer_review_paper_web.gif)

## Review of Rewards and Delegating

I hope I've created enough to help you understand some of the more essential ideas behind Proof-of-Stake and how Cardano implements it. With all of that out of the way in the next episode I take a closer look at actually setting up a Wallet, selecting a Stake-Pool then delegating that Wallet to it. I'm going to explain the process using the Shelly Testnet version of the Daedalus Wallet. Maybe giving you the motivation to obtain some Ada, Testnet or Mainnet, and give Staking a try.  

Despite a lot of testing in the Shelly Testnet and solid attempts to understand performance metrics, Mainnet deployment is still early days, and the performance of the Stake-Pools will fluctuate before achieving a stable equilibrium. 

Don't be too concerned about your Staking return at the moment; you can always re-delegate to a new pool at any time. Also you always have full control of your Ada. Delegating is lending your voting rights on block production capacity to a Stake-Pool, never ever giving them spending authority.

Overall, the Cardano Network is well-engineered and with the release of the Shelly era able to evolve continually. It is shaping up to be a compelling project, network, and community.

Ka kite anō au I a koe and i’ll see you in the next one.

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