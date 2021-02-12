(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{813:function(t,r,e){"use strict";e.r(r);var o=e(1),s=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sdk介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk介绍"}},[t._v("#")]),t._v(" SDK介绍")]),t._v(" "),e("h2",{attrs:{id:"什么是cosmos-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是cosmos-sdk"}},[t._v("#")]),t._v(" 什么是Cosmos SDK?")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos-SDK"),e("OutboundLink")],1),t._v(" 是一个架构，用于构建多资产股权证明(PoS)的区块链，比如Cosmos Hub，以及权益证明(PoA)的区块链。使用Cosmos SDK构建的区块链通常称为"),e("strong",[t._v("特定应用区块链")]),t._v("。")]),t._v(" "),e("p",[t._v("Cosmos SDK的目标是允许开发者从头开始轻松创建原生就能同其他区块链相互操作的自定义区块链。我们设想SDK类似于Ruby-on-Rails框架之上构建应用一样，可以很方便在"),e("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint"),e("OutboundLink")],1),t._v("之上构建安全的区块链应用。 基于SDK的区块链通过可组合的模块构建出来的，大部分模块是开源的，并且可供任何开发人员使用。 任何人都可以为Cosmos-SDK 创建一个模块，集成已经构建的模块就像将它们导入到区块链应用程序一样简单。 更重要的是，Cosmos SDK是一个基于"),e("strong",[t._v("能力")]),t._v("（capabilities）的系统，开发人员可以更好地了解模块之间交互的安全性。 要深入了解能力，请跳到"),e("RouterLink",{attrs:{to:"/cn/intro/ocap.html"}},[t._v("OCAP")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"什么是特定应用区块链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是特定应用区块链"}},[t._v("#")]),t._v(" 什么是特定应用区块链?")]),t._v(" "),e("p",[t._v("今天区块链的一个发展模式是像以太坊这样的虚拟机区块链，开发通常围绕着在现有区块链之上通过智能合约构建一个去中心化的应用程序。 虽然智能合约对于像单用途应用程序（如ICO）这样的一些场景非常有用，但对于构建复杂的去中心化平台往往是不够的。 更一般地说，智能合约在灵活性、主权和性能方面受到限制。")]),t._v(" "),e("p",[t._v("特定应用区块链提供了与虚拟机区块链截然不同的开发模式。 特定应用区块链是一个定制的区块链来服务单个应用程序：开发人员可以自由地做出应用程序运行最佳所需的设计决策。 它们还可以提供更好的主权、安全和性能。")]),t._v(" "),e("p",[t._v("要了解有关特定应用区块链的更多信息，可参考"),e("RouterLink",{attrs:{to:"/cn/intro/why-app-specific.html"}},[t._v("这里")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"为什么是-cosmos-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么是-cosmos-sdk"}},[t._v("#")]),t._v(" 为什么是 Cosmos SDK?")]),t._v(" "),e("p",[t._v("Cosmos SDK 是目前用于构建自定义的特定应用区块链的最先进的框架。 以下是一些你可能需要考虑使用 Cosmos SDK 构建去中心化应用的原因：")]),t._v(" "),e("ul",[e("li",[t._v("SDK中默认共识引擎是  "),e("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint Core"),e("OutboundLink")],1),t._v(" 。 Tendermint 是已存在的最成熟（也是唯一的）的BFT共识引擎。 它被广泛应用于行业，被认为是建立股权证明系统（POS）的黄金标准共识引擎。")]),t._v(" "),e("li",[t._v("SDK是开源的，旨在使其易于从可组合模块中构建区块链。 随着开源SDK模块生态系统的发展，使用它构建复杂的去中心化平台将变得越来越容易。")]),t._v(" "),e("li",[t._v("SDK 受基于能力的安全性启发，及多年来解决区块链状态机的经验。 这使得 Cosmos SDK 成为构建区块链的非常安全的环境。")]),t._v(" "),e("li",[t._v("最重要的是，Cosmos SDK已经被许多特定应用区块链产品所使用。 如："),e("a",{attrs:{href:"https://hub.cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cosmos Hub"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://irisnet.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iris"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://docs.binance.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Binance Chain"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://terra.money/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra"),e("OutboundLink")],1),t._v(" or "),e("a",{attrs:{href:"https://lino.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lino"),e("OutboundLink")],1),t._v(" ，除此之外还有很多建立在Cosmos SDK的项目。 你可以在这里查看"),e("a",{attrs:{href:"https://cosmos.network/ecosystem",target:"_blank",rel:"noopener noreferrer"}},[t._v("生态系统"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"开始使用-cosmos-sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始使用-cosmos-sdk"}},[t._v("#")]),t._v(" 开始使用 Cosmos SDK")]),t._v(" "),e("ul",[e("li",[t._v("了解"),e("RouterLink",{attrs:{to:"/cn/intro/sdk-app-architecture.html"}},[t._v("SDK 应用体系架构")]),t._v("的详细信息")],1),t._v(" "),e("li",[t._v("了解如何从头构建特定应用区块链，参考"),e("a",{attrs:{href:"/docs/tutorial"}},[t._v("SDK教程")]),t._v(" 。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);