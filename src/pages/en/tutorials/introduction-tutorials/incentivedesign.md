---
# Page settings
id: module5
lang: en
url: /tutorials/introduction-tutorials/module5/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "Decentralization", "DAO", "EUTxO", "Tutorial", "Data Tools", "DeFi", "Education", "Mechanism Design", "Standards", "Regulation", "Video series", "Cardano", "Game Theory", "Control Theory", "Cyber-Physical systems", "CPS", "Incentive", "Token Design", "Governance", "Decentralised Governance", "Economic Design", "Legal Code", "Techno-ethics", "Networks", "alphabond", "augmented bonding curve", "assurance contract", "quadratic funding", "competitive contestable funding", "plutocratic", "ISPO", "ICO", "airdrops", "capital formation", "project funding", "ledger", "money"]

comments: false

# Hero section
title: "Incentive Design"
description: "Module 5: Incentive Design, is the fifth and final part of our tutorial series. We explore the history of ledgers as institutions and the role of money in society. We explain how the new digital code re-defines capital, and how we can build network native organisations upon it. We also discuss capital formation techniques such as Initial Coin Offers (ICOs), Initial Stake Pool Offerings (ISPOs), and Airdrops. While also looking at other project funding mechanisms like quadratic funding, and innovative tools like augmented bonding curves and risk-adjusted bonding curves."

# Author box
author:
    title: Token Engineering Tutorials
    title_url: '/tutorials/introduction-tutorials/introduction/'
    external_url: true
    description: Become a leader in the transformative field of token engineering. Learn skills to build robust, equitable, and sustainable digital economies.

# Micro navigation
micro_nav: true

# Page navigation
nav:
    index:
        content: Back to tutorial series overview
        url: '/tutorials/introduction-tutorials/introduction/'

---
@[youtube](TXiLbqse86s)

## Introduction

Information communication technologies—from tally sticks to printing presses, phones, and the internet—have always transformed how we coordinate and collaborate. The easier it becomes to communicate and trust each other's contributions, the easier it is to work together effectively. This is the promise of token engineering: a field that draws on diverse expertise to develop and optimise economic mechanisms using tokens. Digital tokens serve as tools to account for actions, encoding digital rights to access services, secure ownership, and participate in decision-making processes. Token mechanisms incentivise beneficial collective behaviour while making undesirable actions costly.

Underpinning these digital economies are distributed ledgers—ordered collections of connected transaction records. By providing transparent, tamper-proof transaction execution, distributed ledgers reduce the cost of trust in the operation of global peer-to-peer institutions. Institutions are sets of rules, and in complex or uncertain environments, their execution is key to building trust across time and space. As economist Douglass North once said, "...when it is costly to transact, institutions matter."[^1]

In this tutorial, we'll explore the history of ledgers as institutions—from ancient clay tablets to modern blockchain technology—and their transformative impact on society. We will examine the nature of money, its role, and how both money and ledgers are transformed by blockchain technology. We will also explore capital formation techniques such as Initial Coin Offers (ICOs), Initial Stake Pool Offerings (ISPOs), and Airdrops. We'll look at other project funding mechanisms like quadratic funding, and innovative tools like augmented bonding curves and risk-adjusted bonding curves. Throughout, we will consider the ethical and legal implications of designing tokenised systems and the responsibility that comes with shaping incentives and influencing human behaviour.

## Token Design Process (Recap)

In a digital micro-economic system, value flow is guided by tokens and smart contracts that account for actions and define the rules of interactions. Tokens are more than digital assets; they are the foundation of economies, shaping interactions and fostering collaboration. However, creating a thriving digital ecosystem requires more than technical skills; it requires understanding the relationship between technology, economics, and human behaviour.

![Network Effects](/assets/images/networkeffects.jpg)

The token design process begins by recognising the responsibility inherent in designing these systems to foster equitable participation. We explored the dynamics of network effects, understanding how to overcome the "cold start problem" (the challenge of attracting initial participants to a network) and build engaged communities, while being mindful of potential power imbalances and unequal influence distribution.[^2]

![Token Design Process](/assets/images/designstages.jpg)

In our [prior tutorial](/tutorials/introduction-tutorials/module4/), we discussed the role of analysis, models, and simulations in the design process to highlight the truly multifaceted nature of token engineering. The token design process involves weaving together diverse threads of knowledge, from the legal landscape of token regulation to the economic design principles that drive network growth and sustainability. For example, individuals and roles within a social network vary. Bargaining power is influenced not only by token holdings but also by social capital and strategic positioning. Hence we highlighted the role of governance in addressing power dynamics, ensuring our systems are resilient, decentralised, and responsive through collective decision-making mechanisms.

## Ledgers in Society

![Ledgers](/assets/images/ledgers.jpg)

Ledgers have been central to human civilisation for millennia, from ancient Sumerian clay tablets used to track grain[^3], to modern blockchain networks supporting decentralised finance. They have witnessed the rise and fall of empires, the flourishing of trade, and the evolution of societies. Today, ledgers exist as blockchain networks or within the servers that power our global financial systems, underpinning token flows and ensuring trust. Their defining structure—chronologically recorded information with unique identifiers—ensures transaction data is traceable and verifiable. This makes ledgers a trusted system-of-record, providing a solid foundation for decentralised economies and the design of digital micro-economies.

Ledgers are a record-keeping system so versatile it can capture anything from the exchange of a digital coin to the history of a community's decisions. That's the power of a ledger—a tool that allows us to track and verify information over time, ensuring it remains accurate and tamper-evident.

A distributed ledger, often called a blockchain, takes this concept further by sharing and synchronising a transaction database across a distributed and decentralised network. This makes ledger records robust and harder to incorrectly alter. Blockchains can record or anchor various types of data, such as financial transactions, registering ownership and control, accounting for social interactions, or linking to other types of data. Blockchains store data in 'blocks,' each uniquely identified and cryptographically linked to the one before it, creating a chain of information verified by network participants using a consensus mechanism. This immutability ensures data integrity and builds trust among participants, making blockchains a powerful evolution of traditional ledgers.

## Code and Capital

![Code and Capital](/assets/images/codeandcapital.jpg)

Blockchains and smart contracts can transform how we create value and govern communities. Through legal systems, businesses, and governments, code has shaped our social and economic interactions. Now, small groups and individuals can use code to define value, create digital jurisdictions, and govern globally without geographic limits. This new code isn't just about transforming how we organise ourselves; it's also redefining the very nature of capital.

### The Alchemy of Money

Money is a kind of magic. We use it daily to purchase goods and services, often without considering what it is or how it works. Money serves as a medium of exchange, allowing us to acquire what we need. National currencies act as standards for measuring and accounting for value, simplifying economic calculations within a country. When inflation is low, money can also store value over short periods.

But money is also a social construct, deeply embedded in our relationships and institutions. It shapes our identities and influences behaviours.[^4] Giving someone a tip reflects not just an economic exchange but also social norms and expectations about service and gratitude. Similarly, debt creates obligations, dependencies, and power dynamics.[^5] As Georg Simmel aptly put it, "money is a claim upon society."[^6]

![Rai Stones](/assets/images/raistones.jpg)

Throughout history, various commodities have served as money, including shells, giant stones, tally sticks, and salt. The invention of metal coins revolutionised commerce, providing a standardised, portable, and durable form of money.[^7] The form of money continuously evolves to meet the needs of the economy, from coins to paper, plastic, and now digital forms like mobile payments.

In 1922, Thomas Edison proposed backing the U.S. currency with agricultural output, linking its value to tangible goods[^8]. Though unsuccessful, this idea inspired later concepts like Will Ruddick's [Community Inclusion Currencies](https://www.grassrootseconomics.org/community-inclusion). In *Identity is the New Money*, David Birch argues that our online reputations, built through social networks and digital interactions, are increasingly valuable and influential, encompassing not just who we are but also our trustworthiness.[^9] Today, the form and properties of money are being reimagined for the digital age. Bitcoin, Ada, and other cryptocurrencies are complementing existing national currencies, offering features suitable for a globally connected internet.

### Capital and Digital Codes

![Capital and Digital Code](/assets/images/capitalanddigitalcodes.jpg)

It is not just money that evolves—property and capital are also transforming. Blockchain, combined with smart contracts, can establish and enforce digital property rights without relying on existing legal systems. Instead, mechanised proofs, decentralised verification, and cryptography replace traditional legal mechanisms for value transfers, shaping digital capital.

In *The Code of Capital*, Katharina Pistor highlights how traditional legal systems play a central role in using the power of the state to define the properties of capital.[^10] However, the UK Law Commission's Digital Assets report states that 'data objects' have characteristics that 'exist independently of the legal system.'[^11] This means that 'data objects,' such as digital assets, are distinct from other intangible assets like intellectual property or contractual rights. This distinction supports a common law framework that allows digital assets, and therefore digital capital, to exist as personal property.

Smart contracts, self-executing with the terms directly written into code, enable the frictionless execution of certain kinds of agreements without the need for intermediaries. This can create significant efficiencies but also transform sectors like finance and supply chain management, creating new forms of digital assets and unlocking liquidity.

![Institutional Technology](/assets/images/institutionaltechnology.jpg)

This ability to embed traditional features of capital into code—such as durability, priority, universality, and convertibility—enables digital assets to function as a new form of capital, co-existing and potentially competing with traditional forms. However, this new digital code also presents challenges. As Lawrence Lessig noted in *Code and Other Laws of Cyberspace*, code itself acts as a form of regulation, enabling new forms of property rights and shaping behaviour and access in the digital realm.[^12] Therefore, we must carefully consider the broader societal implications of these developments.

### Network States, digital geography & jurisdictions: Escaping the geographic limits for the rest-of-us!

![Network States](/assets/images/networkstates.jpg)

Building on this new digital code, we can reimagine the structure of societies and governance. As we transition from Nation States to Network States, regulating cyberspace becomes challenging due to its global nature, rapid technological advancements, and the difficulty of enforcing laws in a decentralised and often anonymous environment. However, special economic zones like [Catawba](https://catawbadigital.zone/) and [Prospera](https://www.prospera.co/en) illustrate how we can use these zones to experiment with new forms of organisational and civil governance augmented by digital code.

The internet age is dissolving borders—not just between countries, but also between the physical and digital worlds. This shift opens up new possibilities for how we organise, govern, and even define citizenship. Imagine a globally connected community united by a common purpose, building a vibrant knowledge economy virtually, crowdfunding physical territory, or partnering with existing nations to establish a physical presence. This is the essence of a network state—a community unbound by geography, empowered by technology, and driven by shared values, starting virtually and progressively establishing physical centres.[^13]

This shift towards digital communities with their own economies has profound implications for digital geography. Virtual worlds, online platforms, and blockchain-based systems are creating new spaces for interaction and value creation. These spaces foster experiments with different forms of governance and rule-making that are inherently digital.

Escaping the limitations of physical location presents both opportunities and challenges. It allows individuals to join communities that align with their values and tap into collective intelligence. With intent and care, there are opportunities for people to thrive in places that might otherwise struggle due to failing institutions. However, it also has the potential to exacerbate existing social inequities and raises questions about broader accountability. The challenge is to reduce inequity and balance outcomes. The future of governance may lie in embracing these new forms of community and jurisdiction—models that empower communities to shape their destinies in the digital age.

## Capital Formation - Coordinating token sales and project funding

Realising change requires investing in innovation—capital must be invested, not hoarded—and this requires updating our narratives around capital to prove that blockchains can be a durable source for information-rich capital. This is especially true for social impact initiatives, which are often overlooked, difficult to value, and lack financial infrastructure to monitor and measure investments. Building a better financial system, one with greater transparency, will significantly contribute to achieving the UN [Sustainable Development Goals by 2030](https://sdgs.un.org/sites/default/files/publications/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf).

![SDG 2030](/assets/images/sdg.jpg)

Every new venture requires capital to kickstart and build a sustainable economic base. Traditionally, the high costs and risks involved in investing in innovation have limited it. However, the digital era of tokenisation and collective ownership has introduced sophisticated mechanisms for capital formation and deployment. Let's lightly cover some of the options.

### Initial Coin Offerings (ICO’s)

At their peak, Initial Coin Offerings (ICOs) represented both great potential and significant uncertainty. They offered a naïve, accessible approach to early-stage investment, largely driven by speculation. Anyone with an internet connection and cryptocurrency could participate, which led to investors pouring money into projects with little more than a hastily written white-paper and a social media presence. This hype-fuelled craze contributed to explosive growth in the cryptocurrency sector.

![Speculation Word Cloud](/assets/images/speculationwordcloud.jpg)

However, this newfound permission-less access also brought challenges. The ICO market became highly speculative, disconnected from reality, and prone to fraud, with many tokens driven by hype rather than genuine value creation. This environment attracted scams and fraudulent projects, prioritising short-term gains over long-term value, and resulted in significant losses for many investors.

The lack of regulation, combined with regulatory arbitrage, eventually led to a crackdown by governments and regulators. Increased scrutiny, enforcement actions, and stricter compliance requirements made launching ICOs more challenging, signalling a shift towards a more mature approach to raising capital.

### Token Air Drops to bootstrap demand

Token airdrops, often used alongside Initial Coin Offerings (ICOs), have become a popular marketing tool to generate demand for new web3 projects. By leveraging the speculative nature of the cryptocurrency market, airdrops create buzz and attract users by distributing free tokens to a broad audience.

![Sybil & Dusting Attacks](/assets/images/sybildusting.jpg)

However, airdrops also present challenges. Immediate token sales by recipients can create downward price pressure and increase volatility. When designing airdrops, projects must also be cautious of sybil attacks—where individuals create multiple accounts to receive extra tokens—and recipients need to be aware of dusting attacks, which aim to track user activity. By carefully considering the tokenomics and distribution mechanisms, projects can mitigate these risks and use airdrops effectively to build community engagement and foster lasting demand.

To make airdrops more effective, one mechanism can use vesting tokens for short, randomised periods to create a fairer and more sustainable way of bootstrapping demand. This approach can ensure a broader and more diverse group of token holders, contributing to a more resilient and distributed network. Additionally, this mechanism can enhance token liquidity by making it available to a larger market, fostering a more active trading environment.

### Forgoing opportunity costs and Initial Stake-Pool Offers (ISPO's)

Every decision we make involves trade-offs, as our resources—time, money, and energy—are limited. Opportunity cost is the value of the next best alternative that is forgone when making a choice.

In fundraising, Initial Stake Pool Offers (ISPOs) significantly reduce risk and opportunity costs for investors compared to ICO fundraising methods. With ISPOs, investors retain full control of their funds, which remain in their wallets and do not get locked up. This allows investors to redirect their capital as needed, maintaining flexibility. The longer timeframe of an ISPO—typically 3 to 12 months—also fosters long-term engagement and community building.

![ISPO](/assets/images/ispographic.jpg)

In an ISPO, participants delegate their stake to a project's stake pool, foregoing staking rewards in exchange for project tokens. The stake pool sets high margin fees (around 99%) and uses the staking rewards to fund the project. Projects running an ISPO can also partner with existing stake pool operators to increase delegation.

However, challenges exist. Setting up and maintaining a stake pool requires technical expertise. Companies like Maestro help lower this technical barrier by offering ISPO-as-a-service. The extended fundraising timeframe also exposes projects to market fluctuations, and legal fees can be substantial, which is typical for any well-structured fundraising effort.

Like other methods, running an ISPO requires careful consideration of these factors, as they can significantly impact the amount of capital raised. Despite the challenges, ISPOs provide a compelling fundraising model for Cardano projects, fostering community engagement and aligning incentives for long-term success.

### Competitive contestable funding and Catalyst's plutocratic voting system

[Project Catalyst](https://projectcatalyst.io/) is an experiment in decentralised funding, creating a self-sustaining innovation ecosystem on Cardano—run by the community, for the community.

Ideally, funding should be allocated based on merit, with open competition, clear criteria, and impartial evaluation—similar to a thriving market with well-designed rules. However, Catalyst's rapid growth has introduced several challenges. With over a thousand proposals per funding round, it is impractical to thoroughly review and vote on each one. Limited incentives and tight deadlines further discourage comprehensive participation.

As a result, voting often relies on community groups creating proposal lists or individuals promoting projects through direct messages and "shilling". This undermines the goal of impartial evaluation, favouring projects with strong backing or marketing prowess over those with genuine merit.

Moreover, Catalyst's on-chain plutocratic voting system, rooted in the disproportionate distribution of ADA, exacerbates challenges in accurately reflecting community consensus. This system can stifle innovation, leading to a funding landscape that favours those with greater wealth and influence.

While Catalyst has achieved significant success in fostering community-driven innovation, its inadequate incentives and social choice mechanisms pose challenges to equitable funding allocation. As the ecosystem matures, addressing these issues will be essential to ensure Catalyst truly reflects the collective will of the community.

### Estimating funding preferences with Quadratic Funding

Quadratic funding offers a more equitable way to allocate funds and address the challenges of plutocratic systems.[^14] Unlike traditional funding models, where wealth dictates influence, quadratic funding amplifies the voices of smaller contributors, ensuring that projects with broad-based support receive the funding they need.

![Quadratic Funding](/assets/images/quadraticfunding.jpg)

For example, a project receiving many small donations would collect significantly more funds under quadratic funding than a project with the same total donation amount from only a few large donors. This approach captures the breadth of support for a project, not just the financial power of a few individuals. It encourages wider participation, as even small contributions can have a substantial impact.

Quadratic funding is particularly effective for supporting public goods[^14], such as open-source software or environmental conservation. By prioritising projects with widespread support, quadratic funding ensures that resources are directed toward initiatives that reflect the community's values and priorities. It also fosters community ownership and encourages diverse funding sources.

However, quadratic funding is not without vulnerabilities. Sybil attacks, where individuals create fake accounts to inflate support, or collusion among groups to manipulate outcomes are potential risks. Verified digital identities can help mitigate sybil attacks by ensuring that each contributor is a unique individual. Additionally, randomising matching rounds can make it harder for groups to coordinate and manipulate contributions.

Despite these challenges, quadratic funding holds immense promise for creating a more democratic funding landscape and supporting projects that benefit the collective good.

### Assurance contracts and Augmented Bonding Curves

In the web3 space, innovative fundraising mechanisms like augmented bonding curves (ABCs) offer a powerful approach to continuous funding.[^15] By combining the security of assurance contracts with the dynamics of bonding curves, ABCs present a unique solution for project financing.

![Assurance Contract](/assets/images/assurancecontract.jpg)

Imagine a fundraising model where your initial contribution is protected by a built-in guarantee. This is how ABCs leverage assurance contracts. In the initial phase, backers pledge funds with the assurance that if the project doesn't reach its funding target, their contributions are returned. During this period, funds are securely held in escrow, reducing risk and encouraging investment in early-stage projects or public goods that might otherwise struggle to secure funding. This concept is similar to the model used by platforms like Kickstarter.

![Augmented Bonding Curve](/assets/images/ABCgraphic.jpg)

However, ABCs go further. Once the funding goal is met, bonding curve dynamics come into play. These mathematical curves, integrated with a decentralised token exchange (DEX), define the relationship between a token's supply and its price, adjusting dynamically based on market demand. As demand for the token increases, its price rises, incentivising further investment. This creates a self-regulating ecosystem where the token's price reflects the project's value more closely.

To enhance stability and manage speculation, ABCs incorporate additional mechanisms. Vesting periods restrict the sale of tokens for a specific duration, preventing early stakeholders from selling immediately and promoting long-term commitment. Exit taxes, applied when tokens are sold, generate additional revenue for the project, aligning speculation with the project's long-term goals.

Together, these features create a controlled environment that aligns incentives, generates returns, and fosters sustainable growth. The continuous funding model of ABCs, combined with dynamic price discovery and built-in safeguards, provide a robust framework for projects to thrive.

By understanding the unique characteristics of augmented bonding curves, projects can harness their potential to attract funding, build community, and create lasting value.

### Pay-for-Results and Alphabonds

Picture a world where funding is not simply an upfront investment but a reward for achieving real-world impact. This is the promise of pay-for-results mechanisms, which tie financial support directly to measurable outcomes. An Alpha-bond is an advanced mechanism pioneering this approach, offering an innovative way to fund projects that create positive social impact.[^16]

![RABC Overview](/assets/images/RABCoverview.jpg)

Alpha-bonds combine multiple bonding curves, including risk-adjusted bonding curves—an augmented bonding curve (ABC) that adjusts token prices based on performance data. This mechanism ensures that the token's value reflects the project's progress, creating a strong incentive for creators to meet their goals. As the project achieves milestones, the token price increases, rewarding both investors and the project team.

![Risk Adjusted Bonding Curve](/assets/images/RABC.jpg)

This system also incorporates a prediction market, allowing participants to use tokens to express their beliefs about the project's future success. By aggregating these insights, Alphabonds contribute to a more accurate risk assessment, providing investors with risk-adjusted returns that balance potential rewards with evolving project risks.

Alpha-bonds include mechanisms to measure and verify the project's impact, ensuring that funds genuinely make a difference. This could involve tracking environmental improvements, social progress, or other quantifiable metrics.

By aligning incentives and promoting transparency, Alpha-bonds open up new possibilities for impact funding. They empower communities to support projects that align with their values, while ensuring that capital flows to initiatives that generate tangible societal benefits. This innovative approach has the potential to transform how we fund positive change, creating a more sustainable and equitable future.

## Conclusion

Throughout this journey, we have explored principles of incentive design and examined the mechanisms that drive behaviour and shape token economies. From the history of ledgers to the innovative potential of Alpha-bonds, we have highlighted how blockchain technology can be used to create more sustainable micro-economies.

Token engineering is a dynamic and collaborative field. Embrace experimentation, learn from others, and help build a brighter, more inclusive future—one token at a time.

##### Acknowledgements
Thank you to [Yuta](https://x.com/yuta_cryptox) for helping with Japanese translation.

[^1]: North, Douglass. [The New Institutional Economics and Development](https://faculty.sites.iastate.edu/tesfatsi/archive/tesfatsi/NewInstE.North.pdf). Washington University, 1993.
[^2]: Chen, Andrew [The Cold Start Problem: How to Start and Scale Network Effects](https://andrewchen.com/wp-content/uploads/2022/01/ColdStartProb_9780062969743_AS0928_cc20_Final.pdf). Harper Collins, 2021.
[^3]: Civil, Miguel. [Sumerian Harvest Time](https://www.penn.museum/sites/expedition/sumerian-harvest-time/). Expedition Magazine, 1963.
[^4]: Housel, Morgan. [The Psychology of Money: Timeless lessons on wealth, greed, and happiness](https://www.amazon.com.au/Psychology-Money-Timeless-lessons-happiness/dp/1804091049/). Harriman House, 2023.
[^5]: Graeber, David. [Debt: The First 5,000 Years,Updated and Expanded](https://www.amazon.com.au/Debt-First-Years-David-Graeber/dp/1612194192/). Melville House, 2015.
[^6]: Simmel, Georg. [The Philosophy of Money](https://www.eddiejackson.net/web_documents/Philosophy%20of%20Money.pdf). Routledge, 2004 (1900).
[^7]: Weatherford, Jack. [The History of Money](https://www.amazon.com.au/History-Money-Jack-Weatherford/dp/0609801724/r). Crown, 1998.
[^8]: Hammes, David & Wills, Douglas. [Thomas Edison’s Monetary Option](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=7aa251f6bddd4382dbba6cc8fbf9d20341167602#:~:text=Edison%20proposed%20that%20U.S.%20currency,and%20canceled%20within%20the%20year). Journal of the History of Economic Thought, 2006.
[^9]: Birch, David. [Identity Is the New Money](https://www.amazon.com.au/Identity-New-Money-David-Birch/dp/1907994122/). London Publishing Partnership, 2014.
[^10]: Pistor, Katharina. [The Code of Capital: How the law creates wealth and inequality](https://press.princeton.edu/books/hardcover/9780691178974/the-code-of-capital). Princeton University Press, 2019.
[^11]: UK Law Commission. [Digital Assets - Summary of final report](https://s3-eu-west-2.amazonaws.com/cloud-platform-e218f50a4812967ba1215eaecede923f/uploads/sites/30/2023/06/14.294_LC_Digital-assets-summary_v5_WEB.pdf). Crown, 2023.
[^12]: Lessig, Lawrence. [Code: And Other Laws of Cyberspace](https://www.amazon.com.au/dp/046503912X?ref_=mr_referred_us_au_au). Basic Books, 1999.
[^13]: Srinivasan, Balaji. [The Network State](https://thenetworkstate.com/). 2022.
[^14]: Buterin, Vitalik., Hitzig, Zoë. & Weyl, Glen. [A Flexible Design for Funding Public Goods](https://arxiv.org/pdf/1809.06421). Informs, 2019.
[^15]: Titcomb, Abbey. [Deep Dive: Augmented Bonding Curves](https://blog.giveth.io/deep-dive-augmented-bonding-curves-3f1f7c1fa751). Medium, 2019.
[^16]: Blockscience. [Alpha Bonds: Risk-adjusted Bonding Curves for Financing Impact](https://medium.com/block-science/alpha-bonds-risk-adjusted-bonding-curves-for-financing-impact-5be949fbc5a0#:~:text=Alpha%20Bonds%20draw%20their%20name,from%20zero%20to%20100%20percent). Medium, 2022.