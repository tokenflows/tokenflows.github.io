---
# Page settings
id: module3
lang: en
url: /tutorials/introduction-tutorials/module3/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "Decentralization", "DAO", "EUTxO", "Tutorial", "Data Tools", "DeFi", "Market Design", "Education", "Auction", "Mechanism Design", "Standards", "Regulation", "Video series", "Cardano", "Game Theory", "Control Theory", "Cyber-Physical systems", "CPS", "Incentive"]

comments: false

# Hero section
title: "Game theory, Mechanism Design & Control Theory"
description: "Module 3: Game theory, Mechanism Design & Control Theory, is the third part of our five-part tutorial series. We explore how game theory can be applied to designing complex systems. How control theory and cyber-physical systems help us understand self-regulation and adaptation of token economies. And how well designed mechanisms can be used as a tool for coordinating social behaviour."

# Author box
author:
    title: Token Design Process
    title_url: '/tutorials/introduction-tutorials/module4/'
    external_url: true
    description: Fourth part of our five-part tutorial series.

# Micro navigation
micro_nav: true

# Page navigation
nav:
    index:
        content: Back to tutorial series overview
        url: '/tutorials/introduction-tutorials/introduction/'

---
@[youtube](KRJdENvkZLY)

## Introduction

In the dynamic landscape of Web3, tokens are evolving far beyond simple digital assets. They're the lifeblood of decentralised economies, enabling new forms of governance, finance, and social and environmental impact. But to truly harness their transformative potential, we need to understand the underlying mechanisms that drive their optimal use and shape the communities they serve.

In this tutorial, we'll explore how game theory helps us analyse expected behaviour and design aligned incentives. We'll uncover how cyber-physical systems and control theory can be applied to token-based systems, illuminating how they adapt and self-regulate to ensure stability and longevity. And finally, we'll examine how mechanism design can help craft rules and incentives that encourage truthfulness, fairness, and overall system efficiency.

Through real-world examples like bonding curves, conviction voting, and prediction markets, we'll showcase how these powerful tools coordinate social behaviour and drive positive outcomes.

## Market Design (Recap):

In our [previous tutorial](/tutorials/introduction-tutorials/module2/), we discussed that markets aren't just a place to buy and sell stuff; they're intricate systems of rules that shape our behaviour and collective well-being. We explored how markets can be strategically designed to incentivise participation, aggregate preferences, and foster effective decentralised decision-making. As Friedrich Hayek eloquently put it, markets act as a "marvel" of information processing, utilising price signals to efficiently allocate resources across a vast network of participants.

Trust and well-designed rules are paramount in this process; they reduce transaction costs and create a level playing field. For markets to function effectively, these rules must align individual incentives with collective goals, encouraging actions that benefit the entire system.

However, markets are not without their challenges. Incomplete contracts create Information asymmetries causing  principal-agent issues that can lead to inefficient outcomes. Fortunately, innovative market design, informed by game theory and other analysis techniques help us design incentive compatible systems that can reduce their effect.

Adam Smith's vision of a free market, unburdened by "rent-seekers" who extract value without contributing to it, remains an aspiration. But as Eric Beinhocker reminds us in *The Origin of Wealth*[^1], economics often operates in theory, detached from real-world complexities. This disconnect can have painful consequences, as Mike Tyson famously said, "Everyone has a plan until they get punched in the face"[^2]. Without grounding our economic systems in empirical data, we're vulnerable to unforeseen shocks and suboptimal outcomes.

## What is game theory and how can it be applied when designing complex systems

Game theory is a powerful framework for understanding strategic decision-making. It helps us analyse situations where many people interact, each pursuing their own goals while also considering the actions of others. In any game, some people may choose to cooperate or compete while, others may seek to benefit without contributing.

At its core, game theory assumes that individuals are *strategic* actors, making *rational* choices to maximise their own *selfishness*. Although behavioural economics shows that this isn't always true, this concept allows us to model and predict behaviours in complex systems with many interacting players. Consider a blockchain network: validators, users, and developers all have different goals, yet their actions collectively shape the system's performance and security.

When designing cryptoeconomic systems, game theory becomes an invaluable tool. It helps us anticipate how participants might behave under different incentive structures and mitigate potential vulnerabilities, like collusion or market manipulation. By modelling various scenarios, we can create robust token economies that remain stable and beneficial even when participants act in their own self-interest.

Auction design is a prime example of game theory in action. In first-price auctions (like an art sale), bidders should strategically *underbid their true value to maximise their potential gain -* by how much depends on what they think others are bidding. In contrast, second-price (Vickery) auctions incentivise bidding your true value, regardless of other player's strategies since, it's *mathematically* *guaranteed to be optimal*[^3]. However, Vickery auctions are vulnerable to collusion and typically regulations aim to disincentivise it.

By applying game-theoretic principles, we can create robust, self-sustaining systems that encourage desired behaviours and discourage harmful ones, without relying on centralised control. This approach is essential in cryptoeconomics, where traditional governance mechanisms often don't apply.

## The Types of Games and their Relevance

Game theory encompasses various game types, each with mathematical insight into their optimal strategies. Knowing which strategy to use for analysis, in which game is crucial for designing effective mechanisms in complex systems.

**Simultaneous Games** involve players acting concurrently, without knowledge of each other's choices. A classic example is rock-paper-scissors. Finding the Nash equilibrium, i.e. where no player benefits by changing their approach, is the key strategy for this game type. In automated market makers (AMMs), this could mean finding the optimal balance of liquidity required to maximise rewards while minimising risks.

**Sequential Games** see players taking turns, with later actions influenced by earlier choices. For example, chess or negotiating a deal. Crowdfunding and P2P equity platforms exemplify this, where investors assess project proposals and then decide whether to contribute, influenced by the actions of prior investors.

**Cooperative Games** like team sports, are where players collaborate to achieve mutually beneficial outcomes. In decentralised autonomous organisations (DAOs), cooperative game theory is crucial for designing governance mechanisms that encourage collective decision-making and resource allocation.

**Non-Cooperative Games** assume players act independently, prioritising their own gains. For example, a stake pool operator competing for delegation to maximise their rewards. Finding a dominant strategy or Nash equilibrium is the key for this game. E.g. [Ecopool's](https://ecopool.io/donations/) verifiable 33% monthly donation towards environmental charities is a likeable incentive for delegators with a sustainable world view since, the pool operator bears the expense.

**Repeated Games** are particularly relevant to token economies. Robert Axelrod's *Evolution of Cooperation*[^4] highlights how repeated interactions can foster trust and collaboration even among selfish actors. This is analogous to a perpetual motion machine, where the incentive to maintain a positive reputation for future economic exchanges fuels ongoing cooperation.

**Leader-Follower Games**, also known as Stackelberg competition, offer insights into scenarios where one player acts first, influencing the subsequent actions of others. This dynamic is evident in bonding curves, where the curve creator (leader) sets the parameters, and traders (followers) react accordingly. Sigmoid curves, for instance, incentivise early adoption while deterring speculative behaviour[^5], contributing to a more stable and predictable system.

By using these game types to help us analyse situations, we can tailor mechanisms to produce positive sum interactions i.e. one person's gain also benefits the other person.

I highly recommend you play Nicky Case's 30 minute game [*The Evolution of Trust*](https://ncase.me/trust/), to understand these concepts further.

## Cyber-Physical systems and control theory's application to token systems

Cyber-physical systems (CPS) offer a powerful lens to understand how programmable digital token flows interact with the real world. Advancements in technology enable digital systems to not only affect but also record the real world, effectively bridging the digital, human, and physical realms.

In Cardano's Extended UTXO (EUTXO) model, programmable token flows record individual decisions. When designed well, transaction outputs seamlessly become inputs in a continuous flow, allowing the system to self-regulate. References to data packets, along with their verification and measurement – each potentially recording real-world actions – can be anchored to these transactions.

This wealth of verifiable data becomes invaluable for understanding and improving complex system designs. Analysing the recorded interactions between digital tokens and real-world actions provides insights into CPS effectiveness and identifies areas for optimisation. This data-driven approach allows for continuous refinement and adaptation of CPS, ensuring they evolve to meet the changing needs of our interconnected world.

Control theory, the field of study within CPS focuses on how systems respond to feedback. In token economies, this translates to designing mechanisms that adapt to market fluctuations, user behaviour, and external events, ensuring the system remains stable and achieves its intended goals. This dynamic interplay between control theory, token economics, and real-world data is at the heart of effective CPS design.

![Cybernetic Model](/assets/images/cybernetic.jpg)

The cybernetic model, depicted here, illustrates how system-level behaviour emerges from agent-level responses to rules and incentives[^6]. This feedback loop allows for decentralised autonomy. By creating and refining rules and mechanisms, we can steer the system towards desired outcomes without directly controlling (the often uncontrollable) individual actions. Furthermore, having near real-time tamper-proof data accessible on a shared EUTXO ledger, allows for near real-time steering of our digital economies. Giving ourselves the best chance to make informed decisions by putting humans first, while using machines to handle the cognitive load.

Stafford Beer once said, "[the purpose of a system is what it does](https://en.wikipedia.org/wiki/The_purpose_of_a_system_is_what_it_does)". Meaning, a system doesn't do what it promises or claims to do, but by what it actually does. Tools like [cadCAD](https://cadcad.org/), and real-world verifiable data, empower token engineers to verify and optimise token designs through system modelling and simulation so that the system does what it promises. CadCAD helps us make informed, rigorously tested decisions on how best to modify or interact with the system in order to achieve its goals. Monte Carlo simulations test for randomness and variability, accounting for uncertainty and identifying potential pitfalls. Parameter sweeps help identify the optimal combination of inputs for desired outputs, while A/B testing compares different models to determine the most effective design. cadCAD can be easily integrated with common data science workflows to assist Computer-Aided Governance (CAG) as an example.

By embracing these principles, token engineers can create responsive, resilient, and autonomous systems that thrive in the complex interplay between the digital and physical realms; unlocking the full potential of *tokens for social and economic impact*.

## Seven-Layers of Financial Cryptography and 'Governance as capital'

Financial systems are an integral part of economic systems and with all capital, flows the potential for manipulation and exploitation. Designing secure and reliable financial cryptographic systems is a complex challenge, requiring expertise across diverse and often contrasting disciplines.

![Financial Cryptography in 7 Layers](/assets/images/FC7L.jpg)

Ian Grigg's *Financial Cryptography in Seven Layers*[^7], is a valuable model that helps conceptualise the field of token systems. By examining each layer and its interactions during system design, we can identify and address potential vulnerabilities and ensure a robust and secure foundation.

![Ricardian Contract](/assets/images/ricardian.jpg)

For example, another construct by Grigg that spans layers 3 to 6 is the *Ricardian Contract*[^8]*.* With incomplete contracts and technical implementations there will always be misunderstanding, or manipulation which means any token system must define what the token system does at a human scale and have provisions for handling disputes. A Ricardian Contract bridges legal and technical systems, creating a human and machine-readable agreement. By incorporating legally binding terms directly into smart contracts, we can interface with legal systems, streamline transactions, reduce the cost of dispute resolution, and enhance overall transparency and trust.

Cryptography and good software engineering are paramount for decentralised financial applications. Cardano's [native-asset support](https://docs.cardano.org/developer-resources/native-tokens/) - a fundamental feature of the platform - allows for the creation and management of custom tokens directly on chain, leveraging the network's proven, decentralised consensus mechanism. This eliminates the need for simple smart contracts for tokens (ERC20) and token bundles (ERC1155), reducing costs and vulnerabilities while ensuring a more secure and scalable system.

Owning capital is essentially the power to *design, organise,* and *transform* the economic resources of a social system. Owning tangible resources like shares or utility tokens who's financial value may increase over time, clearly provides benefit. However, intangible resources like social status and governance tokens can also provide benefit. Since, whoever has governance authority over a pool of important resources, also has the potential to direct some of those resources to their own benefit. This concept of ['governance as capital'](https://www.placeholder.vc/blog/2019/2/19/cryptonetwork-governance-as-capital) highlights the importance of designing fair and transparent governance mechanisms that distribute power equitably and ensure the long-term health and sustainability of the system.

## Bringing it together: a closer look at mechanism design and how it can be used as a tool for coordinating social behaviour

Mechanism design is the art and science of crafting rules that align individual incentives with collective goals, making it the cornerstone of token engineering. It's about identifying desired outcomes, whether economic, social or environmental, and designing systems that naturally guide participants towards them while discouraging harmful behaviours. It draws inspiration from three key areas:

**Contract Theory** explores how agreements between parties can be structured to achieve optimal outcomes, even in the face of uncertainty and asymmetric information.

**Auction Theory** looks at how people strategically behave in auctions and the design of auction rules to achieve specific outcomes like maximising revenue or efficiency.

**Matching Theory** provides insights into to how individuals or resources can be paired in a way that is both stable (e.g. no one wants to switch partners) and optimal (e.g. maximises overall welfare).

Nobel laureate Eric Maskin's work highlights three essential properties of well-designed mechanisms:

*Truthfulness, individual rationality*, and *efficiency*. That is, participants are incentivised to report private information truthfully, they are better off participating than not, and the mechanism achieves a desirable outcome for the system, such as maximising total welfare or minimising costs. In decentralised systems, these principles are critical for sustainability. Let's consider a few examples of powerful mechanisms in action.

![Bonding Curve](/assets/images/bondingcurve.jpg)

**Bonding Curves** create dynamic incentives for buying and selling tokens. The leader strategically sets curve parameters to maximise their objective, whether it's bootstrapping liquidity, stabilising price, or achieving a specific fundraising target. Followers (or traders) can then calculate the exact price impact of their actions based on the curve's equation, leading to more rational decision-making.

![Conviction Vote](/assets/images/conviction.jpg)

**Conviction Voting**[^9] allocates resources based on the continuously expressed preferences of participants over time. The longer a choice is held, the more weight it carries. This mitigates the drawbacks of plutocracy, sybil attacks, and last-minute vote swings.

![Prediction Market](/assets/images/predictionmarket.jpg)

**Prediction Markets** allow participants to bet on outcomes such as project success or failure, using tokens. These markets tap into collective wisdom and incentivise honest information sharing due to 'skin in the game'.

These mechanisms, and many others, can be employed to solve specific challenges, like attracting early adopters to new platforms without penalising latecomers. More importantly, well-designed mechanisms are essential for creating token ecosystems that not only function effectively but also reward positive social outcomes. They are the tools we use to transform potential conflicts into powerful collaborations, harnessing self-interest for the collective good.

## Conclusion

Our exploration of game theory, control theory, and mechanism design has revealed powerful tools for shaping token economies. These concepts allow us to create ecosystems that align individual motivations with collective goals, adapting to change while driving social and economic impact.

From predicting behaviour with game theory to autonomously steering systems with control theory, and crafting incentives through mechanism design, we've seen how these principles can address challenges in decentralised systems. Examples like conviction voting, bonding curves, and prediction markets demonstrate their practical applications.

As blockchain technology evolves, even more sophisticated applications will emerge - revolutionising economics, governance, and global interactions. In our next tutorial, we'll delve into practical aspects of designing and managing token economies, exploring governance, network effects, legal considerations, and techno-ethics.

The journey of token engineering is just beginning. Let's use these tools wisely to shape a more cooperative, sustainable, and equitable future.

##### Acknowledgements
Thank you to [Yuta](https://x.com/yuta_cryptox) for helping with Japanese translation.

[^1]: Beinhocker, Eric D. [The Origin of Wealth: the radical remaking of economics and what it means for business and society](https://archive.org/details/originofwealthra0000bein). Harvard Business School Press, 2017.
[^2]: Tyson, Mike. [Everybody has a plan until they get punched in the face](https://www.youtube.com/watch?v=3QRVEL05BCQ), 1987.
[^3]: Roughgarden, Tim. [Twenty Lectures on Algorit](https://arc.net/l/quote/jhytmies)[hmic Game Theory](https://www.amazon.com/Twenty-Lectures-Algorithmic-Game-Theory/dp/131662479X/?content-id=amzn1.sym.f911c8db-3a2b-4b3e-952f-b80fdcee83f4). Cambridge University Press, 2016.
[^4]: Axelrod, Robert M. [The evolution of cooperation](https://archive.org/details/evolutionofcoop000axel). New York Basic Books, 1984.
[^5]: Coutts, Veronica. [An introduction to bonding curves, shapes and use cases](https://medium.com/linum-labs/intro-to-bonding-curves-and-shapes-bf326bc4e11a). Medium, 2019.

[^6]: Voshmgir, Shermin & Zargham, Michael. (2019). [Foundations of Cryptoeconomic Systems](https://assets.pubpub.org/sy02t720/31581340240758.pdf). Vienna University of Economics, 2019.

[^7]: Grigg, Ian. [Financial Cryptography in 7 Layers](https://iang.org/papers/fc7.html). Springer-Verlag LNCS, 2000.

[^8]: Grigg, Ian. [The Ricardian Contract](https://iang.org/papers/ricardian_contract.html). Systemics, Inc. *2004.*

[^9]: Emmett, Jeff. [Conviction Voting: A Novel Continuous Decision Making Alternative to Governance](https://blog.giveth.io/conviction-voting-a-novel-continuous-decision-making-alternative-to-governance-aa746cfb9475). Medium, 2019.
