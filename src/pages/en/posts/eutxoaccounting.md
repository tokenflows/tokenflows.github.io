---
# Page settings
id: eutxoaccounting
lang: en
url: /posts/eutxoaccounting/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "EUTxO" ]
comments: false

# Hero section
title: eUTXO and Token Engineering
description: Cardano's Extended Unspent Transaction Output (EUTXO) model extends Bitcoin's underlying 
             process UTXO accounting methodology. Since the EUTXO is unfamiliar, we draw parallels with
             the REA (Resource-Event-Agent) accounting ontology to compare and contrast it with the 
             Ethereum balance accounting model.

# Author box
author:
    title: Cardano's Accounting Model
    title_url: 'https://iohk.io/en/blog/posts/2021/03/11/cardanos-extended-utxo-accounting-model/'
    external_url: true
    description: Cardano is an extended Unspent Transaction Output (EUTXO)
                 blockchain, that uses a Bitcoin-based ledger accounting
                 model. Unlike the account-balance model used in Ethereum, the
                 eUTXO maps directly to the REA accounting ontology (ISO
                 15944-4).

# Micro navigation
micro_nav: true

# Page navigation
nav:
    index:
        content: Back to our blog
        url: '/blog/'
---
Blockchain technology offers a secure digital-native approach to shared transaction execution and record-keeping—an approach that is network-native and can transcend organisational islands. However accounting systems rule the financial world, so understanding blockchain from an accounting perspective is essential. Doing so also helps situate Token Engineering as the discipline of designing micro-economic systems using [triple-entry accounting](https://www.sciencedirect.com/science/article/pii/S2096720921000324) (something we'll discuss in a later post). 

Two primary ledger models serve as the backbone of Blockchain-based [pluralistic economic transformation](https://www.plurality.net/).

Ethereum's account-based model takes inspiration from traditional accounting systems' General Ledger approach, where each account reflects the current financial state of an organisation through a continuous *balance* update mechanism. This model emphasises a single aggregate view of an entity's financial status at any given moment, akin to the snapshot provided by a conventional income statement in accounting. In Ethereum's case, that snapshot is the entire network.

Conversely, we have Cardano's Extended Unspent Transaction Output (eUTXO) model, an evolution of Bitcoin's original UTXO triple-entry architecture. The eUTXO model retains the essence of Bitcoin while incorporating additional features to support more complex transactions constrained by validation rules. The eUTXO accounting approach enables different perspectives on transaction processing, focusing on individual transactions rather than a single cumulative state of accounts.

To bridge the conceptual gap between these blockchain models and traditional financial accounting, we can turn to the REA [REA (Resource-Event-Agent) accounting ontology](https://en.wikipedia.org/wiki/Resources,_Events,_Agents) accounting ontology. REA provides a structured language to analyse economic transactions by identifying the Resources involved, the Events that change Resource states, and the Agents that initiate or are affected by these Events. By applying the REA ontology to a blockchain architecture, we better understand how this digital ledgers mirror, diverge from and potentially enhance traditional accounting practices.

### Understanding Ethereum's Account-Based Model

![Account Balance Model](/assets/images/account-balance.png)

Ethereum's account-based model is the cornerstone of its design, offering a direct analogy to the traditional General Ledger system used in accounting. It also reflects an object-oriented approach (actually an [Actor model](https://en.wikipedia.org/wiki/Actor_model)) in software development. In the account-based model, a blockchain maintains a state that includes the balance of every account, smart contract code, and contract storage. This approach is akin to how a General Ledger tracks the financial status of different accounts, with each message adjusting the balances accordingly.

Each Account in Ethereum can be an Externally Owned Account (EOA), controlled by private keys and capable of initiating transactions, or a Contract Account, governed by its contract code and capable of executing complex operations when triggered. This account duality allows Ethereum to support various decentralised applications (dApps) and financial instruments.

The account-based model's strength lies in its intuitiveness and the ease with which it can represent state changes. The system updates the global state for every message, reflecting changes in account balances and contract states. This continuous update process ensures that the blockchain accurately represents the current ledger state at any given moment, much like a general ledger reflects the current financial standing in traditional accounting.
However, this model also implies that messages must be processed sequentially to maintain state consistency, introducing potential bottlenecks and vectors for attacks such as front-running. Each message's effect on the state must be confirmed before the following message is processed, ensuring that the ledger remains accurate and up-to-date. This sequential processing is crucial for maintaining the system's integrity. Still, it can limit scalability and transaction throughput, which are challenges Ethereum faces as it grows in popularity and usage. The aggregate nature of the state also makes viewing or aggregating a state from a different perspective more cumbersome.

### Diving into Cardano's eUTXO Model

![EUTXO Account Model](/assets/images/eutxo.png)

The [Extended Unspent Transaction Output (eUTXO) model](https://docs.cardano.org/learn/eutxo-explainer/) model, used in Cardano, marks a significant departure from Ethereum's account-based system, building on the foundational principles of Bitcoin's UTXO model while introducing greater flexibility and complexity. In the eUTXO model, the ledger doesn't track account balances; instead, it maintains a set of Unspent Transaction Outputs (UTXOs), each representing a slice of one or more digital assets that have not been spent.

A UTXO in the Cardano ecosystem can carry multiple types of asset units that collectively represent a multidimensional unit of value. The containing transaction also supports data and validation logic, extending the capabilities of Bitcoin's UTXO model to support more sophisticated transactions and agreements. This feature allows for creating complex smart contracts that interact with multiple assets in multiple UTXOs across multiple transactions, making the system highly adaptable to a wide range of decentralised applications.

One of the critical advantages of the eUTXO model is its inherent parallelism. Since transactions consume and produce distinct UTXOs, many transactions can be processed simultaneously, provided they don't attempt to spend the same UTXO. Each transaction also supports many potentially unrelated sub-transactions. This characteristic significantly enhances the scalability of the Cardano network, allowing it to handle a higher volume of genuine transactions than systems where transactions must be processed in a strict sequence. It also enables seamless partitioning of the UTXO graph to increase the total network transaction throughput and privacy.

Furthermore, the eUTXO model provides a high degree of transparency and audit-ability. Each UTXO is a self-contained multidimensional unit-of-value, and with the transaction meta-data and other transaction details, it is easier to trace transactions and verify the flow of funds without understanding the entire system state. This transparency is particularly beneficial in applications requiring a clear audit trail and taking different perspectives of the underlying accounting events, such as supply chain management, accounting, or financial compliance. However, understanding how to design and implement a process-centric model of smart-contract-based distributed applications (DApps) requires a shift in a token engineer's mental model. Such a shift is akin to a Python developer trying to learn [Erlang](https://www.erlang.org/) and functional thinking. It takes some effort.

Cardano's eUTXO model offers flexibility, scalability, and security, making it a robust foundation for developing and deploying decentralised applications that can scale while maintaining high trust and transparency.

### REA Ontology in the Context of eUTXO and Account-Based Models

Using the [*REA (Resource-Event-Agent)* accounting ontology](https://en.wikipedia.org/wiki/Resources,_Events,_Agents) accounting ontology, we can compare Ethereum's account-based model with Cardano's eUTXO model.

The General-Ledger model (Ethereum) assumes a single organisation (entity) controls the accounts— the system state— and is only interested in a single perspective of that state. REA, on the other hand, assumes multiple agents share the system state. Still, they have different interests and perspectives on the events and resource configurations. REA applies a process, or flow, perspective to accounting events. Each agent, such as a buyer and seller, will have a different perspective on a single transaction to which they are both a party. By breaking down economic transactions into Resources, Events, and Agents, the REA framework offers a structured approach to understanding how these blockchain models handle economic activities.

In Ethereum's account-based model, Resources can be equated to the balances within accounts, representing the digital assets under control. Events in this context are messages that modify these balances, whether through transfers, innovative contract executions, or other state-changing operations. Agents are the account holders or smart contracts initiating or participating in the message exchange. The account-based model's continuous state tracking aligns with the REA ontology by providing a clear view of Resource states (balances) and their evolution over time through various Events (messages). However, the account-based model presumes a single view over that state, negating REA's flexibility to take alternative perspectives.

Conversely, the eUTXO model directly embodies the principles of decentralised REA. Each UTXO represents a Resource. Transactions in the eUTXO model are Events that consume existing UTXOs and produce new ones, reflecting changes in Resource ownership and state. State changes reconfigure the relationships across Resources. Reconfiguration encapsulates not just simple value flows but potentially complex data and logic. Agents in this model are the entities that own UTXOs, and smart contracts are made up of validation rules that dictate the conditions under which UTXOs can be reconfigured, i.e. spent.

The eUTXO's transaction-oriented nature offers high transparency and audit-ability in tracking Resources and Events between Agents. Each UTXO's creation and consumption are explicit, making tracing the flow of Resources through the system easier. In contrast the account-based model, which focuses on the cumulative state of resources, obscuring the individual messages (Events) that led to the current state.

The eUTXO and account-based models offer distinct approaches to managing Resources, Events, and Agents when viewed through the REA ontology. The eUTXO model's granularity and parallelism make it well-suited to complex business processes requiring high transaction throughput and explicit resource tracking in a decentralised context.

### Scalability and Computational Advantages

The underlying ledger model plays a pivotal role in evaluating the scalability and computational efficiency of blockchain systems. Ethereum's account-based model and Cardano's eUTXO model present different scalability paradigms.

While intuitive and closely aligned with traditional accounting information systems, Ethereum's account-based model faces challenges inherent to its design. The model's stateful nature requires that each message is processed sequentially to ensure the integrity and consistency of the global state. This sequential processing becomes a bottleneck as the network grows and transaction volume increases. Efforts like Ethereum 2.0 aim to address these challenges through sharding, which divides the network into smaller, more manageable pieces to increase throughput.

On the other hand, the eUTXO model employed by Cardano offers a unique approach to scalability through its inherent support for parallel transaction processing. Since each UTXO is independent and transactions can only consume and produce UTXOs without affecting others, multiple transactions can be processed simultaneously, provided they don't rely on consuming the same UTXO. Additionally, each on-chain transaction can represent several real sub-transactions that transfer multiple asset types in a single UTXO (multidimensional unit-of-value). For example, Cardano can quickly transfer funds to hundreds of different wallets through a single on-chain transaction. This parallelism significantly enhances the network's capacity to handle a large volume of genuine transactions, making the eUTXO model particularly well-suited for applications requiring high throughput and efficiency.

Moreover, the eUTXO design facilitates a relatively straightforward implementation of off-chain designs without introducing different approaches to handling state. State channels or side chains can improve privacy, scalability and efficiency by moving transactions off the main chain. Combined with the model's inherent parallelism, this capability provides a robust foundation for decentralised business process-oriented applications.

### eUTXO's Potential for Advanced Token Engineering

When viewed through the REA accounting ontology, the Extended Unspent Transaction Output (eUTXO) model, as implemented by Cardano, opens up new avenues for token engineering. It provides a flexible and robust framework for designing and deploying sophisticated token systems and decentralised applications (dApps). This model's unique capabilities enable developers to encode complex logic and conditions over collections of token types, i.e. assets.

One of the standout features of the eUTXO model is its ability to embed data and smart contract verification logic directly within the UTXOs. Enabling sets of tokens to carry units of value, information and rules governing their use. For instance, tokens can represent ownership rights, identity credentials, or access permissions, all in a single transaction. The embedded verification logic ensures use of the tokens comply with predefined conditions of the business process. The level of granularity and control is invaluable for creating financial instruments, digital identity, and access control mechanisms.

Moreover, the eUTXO parallel transaction processing and direct multi-asset support significantly enhance the efficiency of complex token interactions. By enabling multiple steps in a smart contract to be processed simultaneously, the eUTXO model ensures that the system can scale to meet the demands of widespread dApp adoption and high-frequency token interactions, i.e. exchanges. It is essential for finance, gaming, and supply chain management applications, where rapid and voluminous state changes in complex processes are the norm.

In addition, each UTXO's history and associated logic are explicitly traceable, providing a clear audit trail for token transactions. This transparency is crucial for regulatory compliance, dispute resolution, and accounting. Together, they build trust in decentralised systems.

The eUTXO's combination of embedded logic, parallel processing capabilities, direct multi-asset support, and transparency offers a powerful toolkit for the token engineer. It enables the creation of sophisticated token-based applications, pushing the boundaries of what's possible in decentralised finance and collaborative processes. However, using the model requires a different mental model to take advantage of the unique features offered. Hence, the practice of token engineering needs a little adaptation to help it use the eUTXO architecture well.

### Blockchain Evolution

Our brief tour of Ethereum's account-based and Cardano's eUTXO models points to a broader narrative on blockchain evolution. Each model presents a unique approach to system state management, reflecting different priorities regarding understanding, scalability, flexibility, and computational efficiency. Ethereum's model offers a familiar, stateful system that aligns well with traditional accounting practices. In contrast, Cardano's eUTXO model introduces a novel framework better suited to network commerce, collaboration, and accounting but is unfamiliar.

The intuitive representation of Account-based state changes and alignment with conventional accounting systems makes the account-based balance model a poor foundation for real-world decentralised applications which are inherently shared across a network of agents. Challenges with scalability and sequential processing highlight the need for ongoing innovation and optimisation, as seen in the development of Ethereum 2.0 and other scalability solutions.

Conversely, the eUTXO model's emphasis on transaction independence, parallel processing, and the ability to embed multi-variant complex logic within transactions offers a different vision for the future of decentralised applications, accounting systems and finance. It is, like REA, a network native model of accounting. The potential to facilitate advanced token engineering and scalable dApps positions it as a driver of real-world blockchain innovation, paving the way for new applications and use cases. As technology evolves, these models' continued exploration and refinement will be crucial in unlocking Blockchains' full potential. Token Engineering practice should be extended to include a broader understanding of REA (and Triple-Entry accounting generally) and the eUTXO in the design of token systems and micro-economies.
