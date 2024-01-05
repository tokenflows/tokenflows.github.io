---
# Page settings
id: f11modelling
lang: en
url: /catalyst/f11/modelling/

layout: layouts/default.njk
keywords: ["Token", "Token Engineering", "EUTxO", "DAO", "Data Tools", "DeFi", "SDK", "Education", "Standards", "Regulation", "SPO" ]

comments: false

# Hero section
title: Modelling and simulation of token economic systems
description: Developing a set of reproducible Nix Jupyter notebooks for modelling token-based micro-economies on EUTxO chains with cadCAD

# Author box
author:
    title: Catalyst Submissions
    title_url: '/catalyst/'
    external_url: true
    description: View our proposals for Cardano Project Catalsyst Fund 11.

# Micro navigation
micro_nav: true

# Page navigation
nav:
    next:
        content: Next proposal
        url: '/catalyst/f11/designeconomicmechanisms/'
    index:
        content: Catalyst poposals
        url: '/catalyst/'
---

**TL;DR:** Tokens are more than digital money, they are foundational to digital economic systems. 
Pior to coding, token models should be modelled and analysed. That requires an engineering 
discipline and supporting tools.

The aim of our proposal is to create an initial set of reproducible Nix Jupyter notebooks for 
modelling token-based micro-economies on EUTxO chains with cadCAD. Using Cardano chain data and 
with material translated to Japanese.

**Project Duration:** 3 Months

**Project Cost:** ₳170,193  *(USD$64,248 @ ₳0.3775USD)* 

**Team Members:** [Yohann Irani](https://twitter.com/Yohannirani), [Jack O'Brien](https://poly.me/parduseidolon)

## Proposal Solution

We are proposing to provide the initial set of supporting tools and knowledge to bootstrap token 
engineering in the Cardano ecosystem. Token engineering is the pragmatic application of science 
to economic problems using tokens and market mechanisms.

Rich token systems have complex interactions. The current approach to designing a token system 
is to copy a successful design and tweak it to come up with a set of parameters that you 'feel' 
are right. The approach is hit-or-miss, it could very well work however, may not be efficient 
or effective. It's like building a bridge, you can come up with a cool design based off ten other 
bridges. However the local context will be different and a strong wind causes the 
[bridge to collapse](https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge). Our modern blockchain
equivalent was the 2016 DAO Attack on Ethereum.

Copying previous designs is limiting and ideally you should validate and optimise a design before
investing effort implementing it. The design of Cardano exemplifies a rigorous research led 
engineering project. We would like to apply this approach to the analysis, modelling and simulation
of token-based micro-economic systems.

One open-source tool, specifically engineered for modelling and simulation of dynamic token-based 
systems is cadCAD (complex adaptive dynamics computer-aided design). cadCAD is a powerful tool 
which can be used to model complex systems and run simulations. Simulations such as Monte Carlo 
simulations with parameter sweeps and A/B testing can be performed. These provide insights into 
variability, parameter combinations and model comparisons, respectively. cadCAD and the associated 
practise of token engineering has been used extensively on Ethereum based projects, but only one 
project we are aware of exists in Cardano. We want to change that.

*The core of our proposed solution is to implement and deliver four things:*


1. An extensive Stake-pool cadCAD Model that demonstrates cadCAD and token-engineering tooling 
   using a well known, real-world Cardano example of market mechanism - Stake-Pool revenue and 
   rewards calculation.
2. Chain data availability in SQLite/BigQuery for use in the Stake-pool Model.
3. Documentation and tutorial video covering the design, implementation, and use of the 
   Stake-pool model in cadCAD.
4. Proposal content documentation translated to Japanese, as the first non-english language. 
   Our future plan is to support numerous Asian languages.

All code and tutorial content will be accessible and hosted on the tokenflows community website 
([tokenflows.xyz](https://tokenflows.xyz)) and GitHub organisation ([tokenflows](https://github.com/tokenflows)).
All tutorial text and subtitles will be translated to Japanese to make it accessible to that community.

**Note:** Our intention is to start building a community around token engineering practice. 
As such we are currently developing a website, tokenflows.xyz to be the central place to collect
tutorials, code, and articles on EUTxO token engineering. The initial website will host this 
proposal and be available for community review. All proposal outputs will also be hosted on 
[tokenflows.xyz](https://tokenflows.xyz)

*Depending on our overall progress we also have three stretch-goals we would like to achieve:*

1. Implementing the Nix Flake on Windows WSL.
2. Setup a hosted environment for the stake-pool model using either [AWS](https://aws.amazon.com/) or [Fly.io](http://Fly.io) 
   to make it easier to get started. Using [Nix](https://nixos.org/), 
   [DivNix](https://std.divnix.com/) and [Terraform](https://www.terraform.io/).
3. Translate the stake-pool notebook content into a Japanese version.

The aim is to bootstrap a token engineering community for the Cardano and EUTxO chains. Hence, 
the project will engage developers and engineers to understand the use of complex systems 
modelling in the UTxO environment. By doing so, they can apply token engineering to use tokens 
to coordinate actions.

##  Impact on the Cardano Community

To increase the value of ADA, we need to create more utility on Cardano. To do so, more 
advanced digital micro economies using tokens, beyond Cryptocurrencies and NFTs should be 
created. Transactions, Tokens and Metadata can be used for far more on-chain accounting applications
in Layer 1 and 2, than most current projects demonstrate, enabling us to build advanced token-based
ecosystems.

Ideally, we all want to design and build better things, including better decentralised organisations. 
We believe we can. Using tools for modelling and simulations we can analyse, design, and validate 
the requirements for smart-contract implementations. Using these tools we are more likely to meet 
a project's economic goals. Aside from IOG Research, there is little experience in Cardano's Project 
Catalyst ecosystem on how to design and engineer these digital micro-economies, hence the proposal 
is about improving both.

*The success of this project will bring value in many ways to Cardano:*

- Stake pool model for SPO's to calculate rewards by optimising parameters
- A diverse set of tools that are easy to setup and use make Cardano more accessible leading to 
  greater value and utility for ADA
- Developers to build upon the models and use them for more in depth analysis
- As a result, creating a more attractive environment for quality developers to thrive in.

Our overall goal is to see TE adopted in more projects on Cardano, delivering optimised design 
solutions. Spreading awareness and building understanding of TE in an EUTxO environment will make 
mastering the basics for developers on Cardano simple and accessible.

#### Project Goals

- Knowledge Application: To see an increase in the application of token engineering modelling and 
  simulation in the design and development of projects within the Cardano ecosystem (quantitative) 
  and by observing the discourse in the community (qualitative).
- Content Creation: To produce a video tutorial on the modelling and simulation aspect of token 
  engineering. The success of this objective will be measured by the completion and publication of 
  one video tutorial complete with supporting docs and code, including Japanese text translation.

Tutorial output will be shared through Cardano and Token Engineering (TE) Academy Discord channels. 
We’ll also get distribution through our existing website, Youtube and Tiktok channels, and individual 
social media accounts. Word of mouth will also play a big role in spreading content. We will start 
distribution immediately after completing the content, and follow it with promotional content 
throughout the following months.

The first, main target audience will be developers in Cardano's ecosystem. Up-skilling those looking
to learn and apply Token to their projects.

As people start mastering the concepts, demand for more advanced modelling and simulation
techniques will validate the need for more to be created.

Project outputs will be translated into Japanese (subtitles) using services such as lokalise 
(increasing adoption and utility). There is ever increasing potential in our asian community, so we
want to spread the knowledge as far as we can.

To measure the success of our project, we'll combine both qualitative and quantitative measures 
that reflect its direct and indirect impacts. Here's our plan:

1. Community Engagement: We will assess the quantity and quality of community interaction through
   different communication channels. This includes discussions, feedback, and questions related to 
   our tutorial and notebook, which will provide insights into comprehension and application of the
   content.
2. GitHub Interactions: The GitHub insights to view the number of people raising issues, submitting 
   Pull requests or forking the repo will give us a clear picture of active engagement and adoption
   of the content.
3. Video Metrics: We'll monitor the number of views for the video tutorial on Youtube, providing 
   a direct measure of the interest and reach of our insightful content.
4. Progression of Token Engineering in Project Design: Over time, we expect to see token engineering
   progressively becoming part of the design process for future projects within Cardano, indicating 
   the practice of validating and optimising token designs using modelling and simulation.

These metrics, taken together, will provide a realistic and comprehensive understanding of the direct
outcomes and reach (impact) of our project.

## Delivery Capability

We have spent the last few years getting a understanding of web3, token engineering, Haskell, Nix, 
Plutus.  We have experienced what its like to learn an immense amount of 'new to us', material in 
unfamiliar disciplines of computer science and computational engineering, economics, and law. Along 
with this, we have relevant knowledge from engineering and commercial music degrees, software 
engineering (Haskell/Plutus), commercial and Project Catalyst experience.

Perhaps the biggest reason that we can deliver on what we are outlining in this proposal is that we 
are already very familiar with both the tools, modelling, and the discipline. The challenge for us 
is turning what we know into a public published deliverable that others will be able to use without 
our direct assistance.

Yohann currently works as a token engineer & engineering consultant. He has completed Token 
Engineering, Python, and cadCAD courses (applying this to develop tools in Cardano). He was the 
project engineering manager on a successful $350k NZD project. Additionally, he's had prior 
experience as a math tutor, teaching high school & university students.

Jack has been a software engineer on Cardano for three years with experience writing Haskell and
Plutus. He's contributed to Catalyst projects since fund 2, Co-Founder of the Eastern Town Hall 
community and has experience in audio and video content creation. He has trained many members of 
the Eastern Townhall in translation, using git and several other topics. Check out his previous
content. (He has come a long way since then!)

- [Minting Native Assets](https://www.youtube.com/playlist?list=PLKl4dqDtindkquPR7EVknxtBPCtdM1vDr), 281 
subscribers on Youtube with views 7.1k.

- [Tik Tok](https://www.tiktok.com/@yumi.protocol) with a 110 followers reaching up to 5.7k views.

Our wider team, who we will look to for advice and content validation, have been heavily involved 
in Catalyst since fund 2. They have worked on more than 10 related projects, led challenge teams 
and been catalysts and contributors to several community-led projects.

Relevant technical knowledge and experience, support from established Catalyst community members, 
teaching experience, and having recently studied TE, make delivering this project with high trust 
and accountability a safe bet.

## Key Milestones 

**Milestone 1:** A reproducible, reliable Jupyter Notebook environment.

*Output:* A DivNix Nix Flake installing all the necessary python packages needed to use cadCAD and access 
indexed chain data. The nix flake will be executable on MacOS, NixOS and Linux (Ubuntu) systems. 
Supporting documentation.

*Acceptance criteria:* Nix Flake code and documentation published on Github, accessible to the public.

**Milestone 2:** An extensive Stake-pool cadCAD Model that demonstrates cadCAD and token-engineering 
tooling using a well known, real-world Cardano example of a market mechanism: Stake-Pool revenue and
rewards calculation.

*Output:* A cadCAD Stake-pool model delivered in a Jupyter Notebook.

*Acceptance criteria:* Python code and Notebook published on Github, accessible to the public.

**Milestone 3:** Description: Setting up Chain data availability for use in the stake-pool model 
and modifying the stake-pool model to use on-chain data of stake-pool activity from SQLite/BigQuery.

*Output:* An extension to the Nix flake and model Notebook to setup pre-computed summaries of on-chain data in
SQLLite, and provide access to Google BigQuery for more timely data computation. Along with
supporting documentation.

*Acceptance criteria:* Nix, Python, Notebook code modifications for the proposed features published
on Github, accessible to the public.

**Milestone 4:** Description: Tutorial Documentation and tutorial video covering the design, 
implementation, and use of the Stake-pool model in cadCAD.

Workflow for this milestone: Research; Content creation - scripts, diagrams and animations; 
pre-production review; video production and post-production; Japanese subtitle translation; 
publishing and promotion.

*Output:* A video tutorial posted to youtube with Japanese subtitles and distribution/promotion of 
the content through various channels, with call to visit tokenflows.xyz.

*Acceptance criteria:* Tutorial video and documentation published, accessible to the public.

**Final Milestone:** Japanese translation of all project documentation.

*Output:* Japanese translated versions of documentation. Excluding embedded notebook commentary.

*Acceptance criteria:* Japanese translated documentation published on Github to the public.

## Project Team

Our team are engaged on Discord and Cardano Forums. We have relationships with Project Catalyst 
Fund operational and technical team members and are involved in various communities.

**[Yohann Irani](https://twitter.com/Yohannirani)** *(Token Engineer, Content Creator)*:
Bachelor of Engineering. 3+ years Industry experience in systems design and project management. 
Recent graduate of Python, cadCAD and token engineering courses. Working token engineer, developing 
a Cardano stake pool model using cadCAD and Jupyter notebooks. Developing DAO compensation plans 
into cadCAD models.

**[Jack O'Brien](https://poly.me/parduseidolon)** *(Nix/Haskell and Media Production)*:
Software engineer with experience in Haskell, Plutus, Nix, Rust and Wasm. A graduate of Massey University 
College of Creative Arts, in Commercial Music, Technology major. Experience in music and video production. 
Co-organised the Catalyst Eastern Town-hall; setting up and maintaining the translation pipeline and 
providing open-source training materials and workshops for the community. Studying Evolutionary, 
Institutional Economics, and Mechanism Design.

## Budget and Costs

The requested budget is for our time and expenses for three months of the project from its commencement 
in March to June 2024 to deliver the tutorial video & relevant documentation for each milestone.

Our project will provide a high production value video, cadCAD model, standard developer environment and
Japanese translations - each having their own set of deliverables and associated costs. The estimated 
costs include all overheads and are normalised at an hourly rate of ₳236, adjusted for the short-term 
intermittent nature of project funding. This rate accounts for a 10% project contingency and 20% 
uncertainty cost due to the volatility of ADA over the last six months (we've been using our skills to 
do the modelling!).

The software services and tools we plan to utilise are:

- AWS for data storage and indexing
- Craft for documenting
- Linear for project management
- Figma for designing
- OBS, keystroke pro, cursor pro and desktop curtain for video recording & presentation
- Davinci, Logic and Adobe After Effects for motion graphics, audio and video
- Lokalise (or similar) for translating video subtitles & docs to Japanese

These software costs are included\n in the budget for each milestone.

Description | Items | Cost
----------- | ----: | ----:
**Milestone 1:** Reproducible Jupyter Notebook environment (20%) |  Coding and Testing | ₳27,231
^^   | Publishing | ₳6,808
^^   | **Sub-Total** | **₳34,039**
**Milestone 2:** Stake-pool cadCAD Model (30%) |  Research | ₳7,659
^^   | Coding & Testing | ₳22,976
^^   | Documentation | ₳22,976
^^   | Publishing & Promotion  | ₳12,764
^^   | **Sub-Total** | **₳51,058**
**Milestone 3:** Setting up Chain data availability (20%) |  Research | ₳10,212
^^   | Coding & Testing | ₳13,615
^^   | Notebook Integration | ₳6,808
^^   | Publishing & Promotion  | ₳3,404
^^   | **Sub-Total** | **₳34,039**
**Milestone 4:** Tutorial video and documentation (20%) |  Research & Content Creation | ₳13,615
^^   | Documentation | ₳5,106
^^   | Video Recording & Editing | ₳10,212
^^   | Publishing & Promotion  | ₳5,106
^^   | **Sub-Total** | **₳34,039**
**Final Milestone:** Japanese Translation of all project documentation (10%) |  Translating & Integrating Documentation | ₳13,615
^^   | Publishing & Promotion  | ₳5,106
^^   | **Sub-Total** | **₳17,019**
**Additional Costs** | Software Services (4%) | ₳7,421
^^                   | Verification (8%)      | ₳12,715 
**Total Project Cost**: *(USD$64,248 @ ₳0.3775USD)* || **₳170,193** 

## Value to the Cardano Ecosystem

Modelling and simulating token economies to design better use of tokens is valuable to the Cardano
ecosystem. Token engineering crosses many disciplines- economics, math, design, engineering, software 
development, community building- important to realising a Web3 vision. It can be applied to all manner 
of coordination games, so a significant number of projects in Catalyst can use it for designing and 
engineering better community tokenomics. Hence, developing team skills and engineering better value 
creation systems for communities.

Several year's worth of full time work has gone into learning, applying and testing different modelling
and simulation tools for the Cardano environment. The project's outputs will unlock the ability for many
people to learn, use and develop the cadCAD models we have provided, along with all the backend and
developer environment work.

Designing and building a complex model, all the back end work, content creation, especially useful 
and engaging content takes a lot of time. We ask for the funding to add polish to our work and produce 
code and content to share what we know. Our goal is to build a token engineering community of practise 
on Cardano, which ultimately will help drive the utility and value of Cardano.

Since digital content and software has infinite leverage, even if only 100 developers start using token 
engineering, the value created will be significant (for themselves, users of the tools and Cardano) and 
the impact will last for many years to come. With your support for this project, we can all look forward 
to reading about, and benefiting from the sophisticated incentive designs people have created in future 
Catalyst proposals.
