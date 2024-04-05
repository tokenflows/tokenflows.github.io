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
description: Cardano's Extended Unspent Transaction Output (EUTXO) model
             extends Bitcoins underlying process UTXO accounting methodology.
             The EUTXO is unfamiliar, so drawing parallels with
             the REA (Resource-Event-Agent) accounting ontology, we compare and
             contrast the Ethereum balance accounting model.

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
Accounting systems rule the financial world so understanding Blockchains from an accounting perspective is important. Doing so also helps situate Token Engineering as the decipline of designing of micro-economic systems using [Triple Entry accounting](https://www.sciencedirect.com/science/article/pii/S2096720921000324) (something we'll talk about in a later post). Blockchain technology offers a secure digital native approach to shared transaction execution and record-keeping. An approach that is network native and can transcend organisational islands.

Two primary ledger models serve as the backbone of Blockchain-based [pluralistic economic transformation](https://www.plurality.net/).

Ethereum's account-based model takes inspiration from traditional accounting systems, specifically the General Ledger approach, where each account reflects the current financial state of an organisation through a continuous balance update mechanism. This model emphasises a single agregate view of an entity's financial status at any given moment, akin to the snapshot provided by a conventional income statement in accounting. In Ethereum's case that snapshot is the entire network.

On the other side, we have Cardano's Extended Unspent Transaction Output (eUTXO) model, an evolution of Bitcoin's original UTXO triple-entry architecture. The eUTXO model retains the essence of Bitcoin while incorporating additional features to support more complex transactions, constrained by validation rules. The eUTXO accounting approach enables different perspectives on transaction processing, focusing on the individual transactions themselves rather than single cumulative state of accounts.

To bridge the conceptual gap between these blockchain models and traditional financial accounting, we can turn to the [REA (Resource-Event-Agent) accounting ontology](https://en.wikipedia.org/wiki/Resources,_Events,_Agents). REA provides a structured language to analyse economic transactions by identifying the *Resources* involved, the *Events* that change *Resource* states, and the *Agents* that initiate or are affected by these *Events*. By applying the REA ontology to a blockchain architecture, we gain a clearer understanding of how these digital ledgers mirror, diverge from, and potentially enhance traditional accounting practices.

### Understanding Ethereum's Account-Based Model

![Account Balance Model](/assets/images/account-balance.png)

Ethereum's account-based model is the cornerstone of its design, offering a direct analogy to the traditional General Ledger system used in accounting. And it reflects an Object-Oriented approach (actually an [Actor model](https://en.wikipedia.org/wiki/Actor_model)) in software development. In the account-based model, a blockchain maintains a state that includes the **balance** of every account, smart contract code, and contract storage. This approach is akin to how a General Ledger tracks the financial status of different accounts, with each message adjusting the balances accordingly.

Each *Account* in Ethereum can be an *Externally Owned Account (EOA)*, controlled by private keys and capable of initiating transactions, or a *Contract Account*, governed by its contract code and capable of executing complex operations when triggered. This account duality allows Ethereum to support a wide range of decentralised applications (dApps) and financial instruments.

The account-based model's strength lies in its intuitiveness and the ease with which it can represent state changes. For every message, the system updates the global state, reflecting changes in account balances and contract states. This continuous update process ensures that at any given moment, the blockchain accurately represents the current ledger state, much like a general ledger reflects the current financial standing in traditional accounting.

However, this model also implies that messages must be processed sequentially to maintain state consistency, introducing potential bottlenecks and vectors for attacks such as front-running. Each message's effect on the state must be confirmed before the next message is processed, ensuring that the ledger remains accurate and up-to-date. This sequential processing is crucial for maintaining the integrity of the system but can limit scalability and transaction throughput, challenges Ethereum faces as it grows in popularity and usage. The aggregate nature of the state also makes viewing, or aggregating state from a different perspective more cumbersome.

### Diving into Cardano's eUTXO Model

![EUTXO Account Model](/assets/images/eutxo.png)

The [Extended Unspent Transaction Output (eUTXO) model](https://docs.cardano.org/learn/eutxo-explainer/), used in Cardano, marks a significant departure from Ethereum's account-based system, building on the foundational principles of Bitcoin's UTXO model while introducing greater flexibility and complexity. In the eUTXO model, the ledger doesn't track account balances; instead, it maintains a set of Unspent Transaction Outputs (UTXOs), each representing a slice of one or more digital assets that have not been spent.

A UTXO in the Cardano ecosystem can carry multiple types of asset units that collectivily represent a multi-dimensional unit-of-value. The containing transaction also supports data and validation logic, extending the capabilities of Bitcoin's UTXO model to support more sophisticated transactions and agreements. This feature allows for the creation of complex smart contracts that interact with multiple assets in multiple UTXOs across multiple transactions, making the system highly adaptable to a wide range of decentralized applications.

One of the critical advantages of the eUTXO model is its inherent parallelism. Since transactions consume and produce distinct UTXOs, many transactions can be processed simultaneously, provided they don't attempt to spend the same UTXO. Each transaction also supports many, potentially unrelated, sub-transactions. This characteristic significantly enhances the scalability of the Cardano network, allowing it to handle a higher volume of real transactions compared to systems where transactions must be processed in a strict sequence. It also enables seamless partitioning of the UTXO graph to increase the total network transaction through-put and privacy.

Furthermore, the eUTXO model provides a high degree of transparency and audit-ability. Each UTXO is a self-contained *multi-dimensional* unit-of-value, and with the transaction meta-data and other transaction details it is easier to trace transactions and verify the flow of funds without needing to understand the entire system state. This transparency is particularly beneficial in applications requiring a clear audit trail and take different perspectives of the underlying accounting events. Such as supply chain management, accounting, or financial compliance. However understanding how to design and implement a process-centric model of smart-contract based distributed applications (DApps) requires a shift in a token engineers mental model. Such a shift is akin to a Python developer trying to learn [Erlang](https://www.erlang.org/) and functional thinking. It takes some effort.

Overall, Cardano's eUTXO model offers a blend of flexibility, scalability, and security, making it a robust foundation for developing and deploying decentralised applications that can scale efficiently while maintaining a high degree of trust and transparency.

### REA Ontology in the Context of eUTXO and Account-Based Models


Using the [*REA (Resource-Event-Agent)* accounting ontology](https://en.wikipedia.org/wiki/Resources,_Events,_Agents) we can compare and contrast Ethereum's account-based model and the eUTXO model of Cardano. 

The General-Ledger model (Etherum) assumes a single organisation (entity) is in control of the accounts— the system state— and is only interested in a single perspective of that state. REA on the other hand assumes there are multiple *Agents* that share the system state but all have different interests and perspectives on the *Events* and *Resource* configurations. REA applies a *process*, or *flow*, perspective to accounting events. Each *Agent* such as a buyer and seller, for example, will have a different perspective of a single transaction they are both party to. By breaking down economic transactions into [*Resources, Events, and Agents*](https://en.wikipedia.org/wiki/Resources,_Events,_Agents), the REA framework offers a structured approach to understanding how these blockchain models handle economic activities.

In Ethereum's account-based model, *Resources* can be equated to the balances within accounts, representing the digital assets under control. *Events* in this context are messages that modify these balances, whether through transfers, smart contract executions, or other state-changing operations. *Agents* are the account holders or smart contracts initiating or participating in the message exchange. The account-based model's continuous state tracking aligns with the REA ontology by providing a clear view of *Resource* states (balances) and their evolution over time through various *Events* (messages). However, the account-based model presumes a single view over that state thereby negating REA's flexibility to take alternative perspectives.

Conversely, the eUTXO model directly embodies the decentralised REA principles. Each UTXO represents a *Resource*. Transactions in the eUTXO model are *Events* that consume existing UTXOs and produce new ones, reflecting changes in *Resource* ownership and state. State changes reconfigure the relationships across *Resources*. Reconfiguration encapsulates not just simple value flows but potentially complex data and logic. *Agents* in this model are the entities that own UTXOs and smart contracts are made up of validation rules that dictate the conditions under which UTXOs can be reconfigured i.e. spent.

The eUTXO's transaction-oriented nature offers a high degree of transparency and audit-ability in tracking *Resources* and *Events* between *Agents*. Each UTXO's creation and consumption are explicit, making it easier to trace the flow of *Resources* through the system. This contrasts with the account-based model, where the focus is on the cumulative state of resources, obscuring the individual messages (*Events*) that led to the current state.

When viewed through the REA ontology, both the eUTXO and account-based models offer distinct approaches to managing Resources, Events, and Agents. The eUTXO model's granularity and parallelism provide advantages that make it well-suited to complex business processes requiring high transaction throughput and clear resource tracking in a decentralised context.

### Scalability and Computational Advantages

When evaluating the scalability and computational efficiency of blockchain systems, the underlying ledger model plays a pivotal role. Ethereum's account-based model and Cardano's eUTXO model present different scalability paradigms.

Ethereum's account-based model, while intuitive and closely aligned with traditional accounting information systems, faces challenges inherent to its design. The model's stateful nature requires that each message is processed sequentially to ensure the integrity and consistency of the global state. This sequential processing becomes a bottleneck as the network grows and transaction volume increases. Efforts like Ethereum 2.0 aim to address these challenges through mechanisms such as sharding, which divides the network into smaller, more manageable pieces to increase throughput.

On the other hand, the eUTXO model employed by Cardano offers a unique approach to scalability through its inherent support for parallel transaction processing. Since each UTXO is independent and transactions can only consume and produce UTXOs without affecting others, multiple transactions can be processed simultaneously, provided they don't rely on consuming the same UTXO. Additionally each on-chain transaction can represent several *real* sub-transactions that each can transfer multiple asset types in a single UTXO (multidimensional unit-of-value). For example Cardano can easily transfer funds to hundreds of different wallets in a single on-chain transaction. This parallelism significantly enhances the network's capacity to handle a large volume of real transactions, making the eUTXO model particularly well-suited for applications requiring high throughput and efficiency.

Moreover, the eUTXO design facilitates a relativily straightforward implementation of off-chain designs without introducting different approaches to handling state. State channels or side-chains can further improve privacy, scalability and efficiency by moving transactions off the main chain. This capability, combined with the model's inherent parallelism, provides a robust foundation for decentralised business process-oritented applications.

### eUTXO's Potential for Advanced Token Engineering

When viewed through the REA accounting ontology, the Extended Unspent Transaction Output (eUTXO) model, as implemented by Cardano, opens up new avenues for token engineering, providing a flexible and robust framework for designing and deploying sophisticated token systems and decentralised applications (dApps). This model's unique capabilities enable developers to encode complex logic and conditions over collections of token types i.e. assets.

One of the standout features of the eUTXO model is its ability to embed data and smart contract verification logic directly within the UTXOs. This allows sets of tokens to carry not just value but also information and rules governing their use. For instance, tokens can represent ownership rights, identity credentials, or access permissions all in a single transaction. With the embedded verification logic ensuring these tokens are used in compliance with predefined conditions of the business process. This level of granularity and control is invaluable for creating complex financial instruments, digital identity infrastructure, and access control mechanisms.

Moreover, the eUTXO parallel transaction processing and direct multi-asset support, significantly enhances the efficiency of complex token interactions. By enabling multiple steps in a smart-contract to be processed simultaneously, the eUTXO model ensures that the system can scale to meet the demands of widespread dApp adoption and high-frequency token interactions i.e. exchanges. This is particularly important for applications in sectors like finance, gaming, and supply chain management, where rapid and voluminous state changes in complex processes are the norms.

In addition, each UTXO's history and associated logic are explicitly traceable, providing a clear audit trail for token transactions. This transparency is crucial for regulatory compliance, dispute resolution, and accounting. Together they build trust in decentralised systems.

The eUTXO's combination of embedded logic, parallel processing capabilities, direct multi-asset support, and transparency offers a powerful toolkit for the token engineer. It enables the creation of sophisticated token-based applications, pushing the boundaries of what's possible in decentralised finance and collaborative processes. However using the model requires a different mental model to take advantage of the unique features on offer. Hence the practise of token engineering needs a little adaptation to help it use the eUTXO architecture well.


### Blockchain Evolution

Our brief tour of Ethereum's account-based model and Cardano's eUTXO model points to a broader narrative on blockchain evolution. Each model presents a unique approach to system state management, reflecting different priorities in terms of understanding, scalability, flexibility, and computational efficiency. Ethereum's model offers a familiar, stateful system that aligns well with traditional accounting practices, while Cardano's eUTXO model introduces a novel framework that is better suited to network commerce, collaboration, and accounting but is unfamiliar.

The intuitive representation of Account-based state changes and alignment with conventional accounting systems makes the account-base balance model a poor foundation for real-word decentralised applications which are inheriently shared across a network of agents. Challenges with scalability and sequential processing highlight the need for ongoing innovation and optimisation, as seen in the development of Ethereum 2.0 and other scalability solutions.

Conversely, the eUTXO model's emphasis on transaction independence, parallel processing, and the ability to embed mutli-variant complex logic within transactions offers a different vision for the future of decentralised applications, accounting systems and finance. It is, like REA, a network native model of accounting. The potential to facilitate advanced token engineering and scalable dApps positions it as a driver of real-world blockchain innovation, paving the way for new applications and use cases. As technology evolves, the continued exploration and refinement of these models will be crucial in unlocking Blockchains' full potential. We believe Token Engineering practise should be extended to include a broader understanding of REA (and Triple-Entry accounting generally) and the eUTXO in the design of token systems and micro-economies.
