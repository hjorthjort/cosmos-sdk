(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{913:function(e,v,a){"use strict";a.r(v);var s=a(1),_=Object(s.a)({},(function(){var e=this,v=e.$createElement,a=e._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("strong",[e._v("原文路径:https://github.com/cosmos/cosmos-sdk/blob/master/docs/basics/gas-fees.md")])]),e._v(" "),a("h1",{attrs:{id:"gas-and-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-and-fees"}},[e._v("#")]),e._v(" Gas and Fees")]),e._v(" "),a("h2",{attrs:{hide:"",id:"必备阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必备阅读"}},[e._v("#")]),e._v(" 必备阅读")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/cn/basics/app-anatomy.html"}},[e._v("一个 SDK 程序的剖析")])],1)]),e._v(" "),a("h2",{attrs:{id:"gas-and-fees的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-and-fees的介绍"}},[e._v("#")]),e._v(" "),a("code",[e._v("Gas")]),e._v(" and "),a("code",[e._v("Fees")]),e._v("的介绍")]),e._v(" "),a("p",[e._v("在 Cosmos SDK 中,"),a("code",[e._v("gas")]),e._v("是一种特殊的单位，用于跟踪执行期间的资源消耗。每当对储存进行读写操作的时候会消耗"),a("code",[e._v("gas")]),e._v("，如果要进行比较复杂的计算的话也会消耗"),a("code",[e._v("gas")]),e._v("。它主要有两个目的:")]),e._v(" "),a("ul",[a("li",[e._v("确保区块不会消耗太多资源而且能顺利完成。这个默认在 SDK 的 "),a("a",{attrs:{href:"#block-gas-meter"}},[e._v("block gas meter")]),e._v(" 中保证")]),e._v(" "),a("li",[e._v("防止来自终端用户的垃圾消息和滥用。为此，通常会为 "),a("RouterLink",{attrs:{to:"/cn/building-modules/messages-and-queries.html#messages"}},[a("code",[e._v("message")])]),e._v(" 执行期间的消耗进行定价，并产生 "),a("code",[e._v("fee")]),e._v("("),a("code",[e._v("fees = gas * gas-prices")]),e._v(")。"),a("code",[e._v("fees")]),e._v(" 通常必须由 "),a("code",[e._v("message")]),e._v(" 的发送者来支付。请注意，SDK 并没有强制执行对 "),a("code",[e._v("gas")]),e._v(" 定价，因为可能会有其他的方法来防止垃圾消息(例如带宽方案)。尽管如此，大多数应用程序仍然会使用"),a("code",[e._v("fee")]),e._v(" 方式来防止垃圾消息。这个机制通过 "),a("a",{attrs:{href:"#antehandler"}},[a("code",[e._v("AnteHandler")])]),e._v(" 来完成.")],1)]),e._v(" "),a("h2",{attrs:{id:"gas-meter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-meter"}},[e._v("#")]),e._v(" Gas Meter")]),e._v(" "),a("p",[e._v("在 Cosmos SDK 中 "),a("code",[e._v("gas")]),e._v(" 是一种简单的 "),a("code",[e._v("uint64")]),e._v(" 类型，被称之为 "),a("code",[e._v("gas meter")]),e._v(" 的对象进行管理，Gas meters 实现了 "),a("code",[e._v("GasMeter")]),e._v(" 接口")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2FzTWV0ZXIgaW50ZXJmYWNlIHRvIHRyYWNrIGdhcyBjb25zdW1wdGlvbgp0eXBlIEdhc01ldGVyIGludGVyZmFjZSB7CglHYXNDb25zdW1lZCgpIEdhcwoJR2FzQ29uc3VtZWRUb0xpbWl0KCkgR2FzCglMaW1pdCgpIEdhcwoJQ29uc3VtZUdhcyhhbW91bnQgR2FzLCBkZXNjcmlwdG9yIHN0cmluZykKCUlzUGFzdExpbWl0KCkgYm9vbAoJSXNPdXRPZkdhcygpIGJvb2wKfQ=="}})],1),e._v(" "),a("p",[e._v("这里:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("GasConsumed()")]),e._v(" 返回 "),a("code",[e._v("GasMeter")]),e._v(" 实例中消耗的 "),a("code",[e._v("gas")]),e._v(" 的数量")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("GasConsumedToLimit()")]),e._v(" 返回 "),a("code",[e._v("GasMeter")]),e._v(" 实例消耗的 gas 数量，如果达到上限的话就返回上限")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Limit()")]),e._v(" 返回 "),a("code",[e._v("GasMeter")]),e._v(" 实例的上限，如果是 0 则表示对 "),a("code",[e._v("gas")]),e._v(" 的数量没有限制")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("ConsumeGas(amount Gas, descriptor string)")]),e._v(" 消耗提供的 "),a("code",[e._v("gas")]),e._v("，如果 "),a("code",[e._v("gas")]),e._v(" 溢出了，使用 "),a("code",[e._v("descriptor")]),e._v(" 内容进行报错，如果 "),a("code",[e._v("gas")]),e._v(" 并不是无限的，则超过限制就会报错。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("IsPastLimit()")]),e._v(" 如果 "),a("code",[e._v("gas")]),e._v(" 消耗超过了 "),a("code",[e._v("GasMeter")]),e._v(" 的限制则返回 "),a("code",[e._v("true")]),e._v("，其它返回 "),a("code",[e._v("false")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("IsOutOfGas()")]),e._v(" 如果 "),a("code",[e._v("gas")]),e._v(" 消耗大于或等于了 "),a("code",[e._v("GasMeter")]),e._v(" 的限制则返回 "),a("code",[e._v("true")]),e._v("，其它返回 "),a("code",[e._v("false")])]),e._v(" "),a("p",[a("code",[e._v("GasMeter")]),e._v(" 通常保存在 "),a("RouterLink",{attrs:{to:"/cn/core/context.html"}},[a("code",[e._v("ctx")])]),e._v(" 中，"),a("code",[e._v("gas")]),e._v(" 消耗的方式如下:")],1)])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyhhbW91bnQsICZxdW90O2Rlc2NyaXB0aW9uJnF1b3Q7KQo="}}),e._v(" "),a("p",[e._v("通常，Cosmos SDK 使用两种不同的 "),a("code",[e._v("GasMeter")]),e._v("，"),a("a",{attrs:{href:"#main-gas-metter%5B"}},[e._v("main gas meter")]),e._v(" 和 "),a("a",{attrs:{href:"#block-gas-meter"}},[e._v("block gas meter")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"主-gas-meter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主-gas-meter"}},[e._v("#")]),e._v(" 主 Gas Meter")]),e._v(" "),a("p",[a("code",[e._v("ctx.GasMeter()")]),e._v(" 是应用程序的主 "),a("code",[e._v("GasMeter")]),e._v("，主 "),a("code",[e._v("GasMeter")]),e._v(" 通过 "),a("code",[e._v("BeginBlock")]),e._v(" 中的 "),a("code",[e._v("setDeliverState")]),e._v(" 进行初始化，然后跟踪导致状态转换的执行序列中的 "),a("code",[e._v("gas")]),e._v(" 消耗。也即是说它的更新由 "),a("RouterLink",{attrs:{to:"/cn/core/baseapp.html#beginblock"}},[a("code",[e._v("BeginBlock")])]),e._v("，"),a("RouterLink",{attrs:{to:"/cn/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" 和 "),a("RouterLink",{attrs:{to:"/cn/core/baseapp.html#endblock"}},[a("code",[e._v("EndBlock")])]),e._v(" 进行操作。主 "),a("code",[e._v("GasMeter")]),e._v(" 必须在 "),a("a",{attrs:{href:"#antehandler"}},[a("code",[e._v("AnteHandler")])]),e._v("中 "),a("strong",[e._v("设置为 0")]),e._v("，以便它能获取每个 transaction 的 Gas 消耗")],1),e._v(" "),a("p",[a("code",[e._v("gas")]),e._v("消耗可以手工完成，模块开发者通常在 "),a("RouterLink",{attrs:{to:"/cn/building-modules/beginblock-endblock.html"}},[a("code",[e._v("BeginBlocker")]),e._v(","),a("code",[e._v("EndBlocker")])]),e._v(" 或者 "),a("RouterLink",{attrs:{to:"/cn/building-modules/handler.html"}},[a("code",[e._v("handler")])]),e._v(" 上执行，但大多数情况下，只要对储存区进行了读写，它就会自动完成。这种自动消耗的逻辑在"),a("RouterLink",{attrs:{to:"/cn/core/store.html#gaskv-store"}},[a("code",[e._v("GasKv")])]),e._v("中完成.")],1),e._v(" "),a("h3",{attrs:{id:"块-gas-meter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块-gas-meter"}},[e._v("#")]),e._v(" 块 Gas Meter")]),e._v(" "),a("p",[a("code",[e._v("ctx.BlockGasMeter()")]),e._v(" 是跟踪每个区块 "),a("code",[e._v("gas")]),e._v(" 消耗并保证它没有超过限制的 "),a("code",[e._v("GasMeter")]),e._v("。每当 "),a("RouterLink",{attrs:{to:"/cn/core/baseapp.html#beginblock"}},[a("code",[e._v("BeginBlock")])]),e._v(" 被调用的时候一个新的 "),a("code",[e._v("BlockGasMeter")]),e._v(" 实例将会被创建。"),a("code",[e._v("BlockGasMeter")]),e._v(" 的 "),a("code",[e._v("gas")]),e._v(" 是有限的，每个块的 "),a("code",[e._v("gas")]),e._v(" 限制应该在应用程序的共识参数中定义，Cosmos SDK 应用程序使用 Tendermint 提供的默认共识参数：")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRGVmYXVsdEJsb2NrUGFyYW1zIHJldHVybnMgYSBkZWZhdWx0IEJsb2NrUGFyYW1zLgpmdW5jIERlZmF1bHRCbG9ja1BhcmFtcygpIEJsb2NrUGFyYW1zIHsKCXJldHVybiBCbG9ja1BhcmFtc3sKCQlNYXhCeXRlczogICAyMjAyMDA5NiwgLy8gMjFNQgoJCU1heEdhczogICAgIC0xLAoJCVRpbWVJb3RhTXM6IDEwMDAsIC8vIDFzCgl9Cn0="}})],1),e._v(" "),a("p",[e._v("当通过 "),a("code",[e._v("DeliverTx")]),e._v(" 处理新的 "),a("RouterLink",{attrs:{to:"/cn/core/transactions.html"}},[e._v("transaction")]),e._v(" 的时候，"),a("code",[e._v("BlockGasMeter")]),e._v(" 的当前值会被校验是否超过上限，如果超过上限，"),a("code",[e._v("DeliverTx")]),e._v(" 直接返回，由于 "),a("code",[e._v("BeginBlock")]),e._v(" 会消耗 "),a("code",[e._v("gas")]),e._v("，这种情况可能会在第一个 "),a("code",[e._v("transaction")]),e._v(" 到来时发生，如果没有发生这种情况，"),a("code",[e._v("transaction")]),e._v("将会被正常的执行。在 "),a("code",[e._v("DeliverTx")]),e._v(" 的最后，"),a("code",[e._v("ctx.BlockGasMeter()")]),e._v(" 会追踪 "),a("code",[e._v("gas")]),e._v(" 消耗并将它增加到处理 "),a("code",[e._v("transaction")]),e._v(" 的 "),a("code",[e._v("gas")]),e._v(" 消耗中.")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkJsb2NrR2FzTWV0ZXIoKS5Db25zdW1lR2FzKAogICAgY3R4Lkdhc01ldGVyKCkuR2FzQ29uc3VtZWRUb0xpbWl0KCksCiAgICAmcXVvdDtibG9jayBnYXMgbWV0ZXImcXVvdDssCikK"}}),e._v(" "),a("h2",{attrs:{id:"antehandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antehandler"}},[e._v("#")]),e._v(" AnteHandler")]),e._v(" "),a("p",[a("code",[e._v("AnteHandler")]),e._v(" 是一个特殊的处理程序，它在 "),a("code",[e._v("CheckTx")]),e._v(" 和 "),a("code",[e._v("DeliverTx")]),e._v(" 期间为每一个 "),a("code",[e._v("transaction")]),e._v(" 的每个 "),a("code",[e._v("message")]),e._v(" 处理之前执行。"),a("code",[e._v("AnteHandler")]),e._v(" 相比 "),a("code",[e._v("handler")]),e._v(" 有不同的签名:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQW50ZUhhbmRsZXIgYXV0aGVudGljYXRlcyB0cmFuc2FjdGlvbnMsIGJlZm9yZSB0aGVpciBpbnRlcm5hbCBtZXNzYWdlcyBhcmUgaGFuZGxlZC4KLy8gSWYgbmV3Q3R4LklzWmVybygpLCBjdHggaXMgdXNlZCBpbnN0ZWFkLgp0eXBlIEFudGVIYW5kbGVyIGZ1bmMoY3R4IENvbnRleHQsIHR4IFR4LCBzaW11bGF0ZSBib29sKSAobmV3Q3R4IENvbnRleHQsIHJlc3VsdCBSZXN1bHQsIGFib3J0IGJvb2wpCg=="}}),e._v(" "),a("p",[a("code",[e._v("AnteHandler")]),e._v(" 不是在核心 SDK 中实现的，而是在每一个模块中实现的，这使开发者可以使用适合其程序需求的"),a("code",[e._v("AnteHandler")]),e._v("版本，也就是说当前大多数应用程序都使用 "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),e._v(" module"),a("OutboundLink")],1),e._v(" 中定义的默认实现。下面是 "),a("code",[e._v("AnteHandler")]),e._v(" 在普通 Cosmos SDK 程序中的作用:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("验证事务的类型正确。事务类型在实现 "),a("code",[e._v("anteHandler")]),e._v(" 的模块中定义，它们遵循事务接口：")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHJhbnNhY3Rpb25zIG9iamVjdHMgbXVzdCBmdWxmaWxsIHRoZSBUeAp0eXBlIFR4IGludGVyZmFjZSB7CgkvLyBHZXRzIHRoZSBhbGwgdGhlIHRyYW5zYWN0aW9uJ3MgbWVzc2FnZXMuCglHZXRNc2dzKCkgW11Nc2cKCgkvLyBWYWxpZGF0ZUJhc2ljIGRvZXMgYSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0IHZhbGlkYXRpb24gY2hlY2sgdGhhdCBkb2Vzbid0CgkvLyByZXF1aXJlIGFjY2VzcyB0byBhbnkgb3RoZXIgaW5mb3JtYXRpb24uCglWYWxpZGF0ZUJhc2ljKCkgRXJyb3IKfQ=="}})],1),e._v(" "),a("p",[e._v("这使开发人员可以使用各种类型的应用程序进行交易。 在默认的 auth 模块中，标准事务类型为 StdTx：")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RkVHggaXMgYSBzdGFuZGFyZCB3YXkgdG8gd3JhcCBhIE1zZyB3aXRoIEZlZSBhbmQgU2lnbmF0dXJlcy4KLy8gTk9URTogdGhlIGZpcnN0IHNpZ25hdHVyZSBpcyB0aGUgZmVlIHBheWVyIChTaWduYXR1cmVzIG11c3Qgbm90IGJlIG5pbCkuCnR5cGUgU3RkVHggc3RydWN0IHsKCU1zZ3MgICAgICAgW11zZGsuTXNnICAgICAgYGpzb246JnF1b3Q7bXNnJnF1b3Q7IHlhbWw6JnF1b3Q7bXNnJnF1b3Q7YAoJRmVlICAgICAgICBTdGRGZWUgICAgICAgICBganNvbjomcXVvdDtmZWUmcXVvdDsgeWFtbDomcXVvdDtmZWUmcXVvdDtgCglTaWduYXR1cmVzIFtdU3RkU2lnbmF0dXJlIGBqc29uOiZxdW90O3NpZ25hdHVyZXMmcXVvdDsgeWFtbDomcXVvdDtzaWduYXR1cmVzJnF1b3Q7YAoJTWVtbyAgICAgICBzdHJpbmcgICAgICAgICBganNvbjomcXVvdDttZW1vJnF1b3Q7IHlhbWw6JnF1b3Q7bWVtbyZxdW90O2AKfQ=="}})],1)]),e._v(" "),a("li",[a("p",[e._v("验证交易中包含的每个 "),a("RouterLink",{attrs:{to:"/cn/building-modules/messages-and-queries.html#messages"}},[a("code",[e._v("message")])]),e._v(" 的签名，每个 "),a("code",[e._v("message")]),e._v(" 应该由一个或多个发送者签名，这些签名必须在 "),a("code",[e._v("anteHandler")]),e._v(" 中进行验证.")],1)]),e._v(" "),a("li",[a("p",[e._v("在 "),a("code",[e._v("CheckTx")]),e._v(" 期间，验证 "),a("code",[e._v("transaction")]),e._v(" 提供的 "),a("code",[e._v("gas prices")]),e._v(" 是否大于本地配置 "),a("code",[e._v("min-gas-prices")]),e._v("(提醒一下，"),a("code",[e._v("gas-prices")]),e._v(" 可以从以下等式中扣除"),a("code",[e._v("fees = gas * gas-prices")]),e._v(")"),a("code",[e._v("min-gas-prices")]),e._v(" 是每个独立节点的本地配置，在"),a("code",[e._v("CheckTx")]),e._v("期间用于丢弃未提供最低费用的交易。这确保了内存池不会被垃圾交易填充.")])]),e._v(" "),a("li",[a("p",[e._v("设置 "),a("code",[e._v("newCtx.GasMeter")]),e._v(" 到 0，限制为"),a("code",[e._v("GasWanted")]),e._v("。"),a("strong",[e._v("这一步骤非常重要")]),e._v("，因为它不仅确保交易不会消耗无限的天然气，而且还会在每个 "),a("code",[e._v("DeliverTx")]),e._v(" 重置 "),a("code",[e._v("ctx.GasMeter")]),e._v("(每次 "),a("code",[e._v("DeliverTx")]),e._v(" 被调用的时候都会执行 "),a("code",[e._v("anteHandler")]),e._v("，"),a("code",[e._v("anteHandler")]),e._v(" 运行之后 "),a("code",[e._v("ctx")]),e._v(" 将会被设置为 "),a("code",[e._v("newCtx")]),e._v(")")])])]),e._v(" "),a("p",[e._v("如上所述，"),a("code",[e._v("anteHandler")]),e._v(" 返回 "),a("code",[e._v("transaction")]),e._v(" 执行期间所能消耗的最大的 "),a("code",[e._v("gas")]),e._v(" 数量，称之为 "),a("code",[e._v("GasWanted")]),e._v("。最后实际 "),a("code",[e._v("gas")]),e._v(" 消耗数量记为 "),a("code",[e._v("GasUsed")]),e._v("，因此我们必须使 "),a("code",[e._v("GasUsed =< GasWanted")]),e._v("。当返回时 "),a("code",[e._v("GasWanted")]),e._v(" 和 "),a("code",[e._v("GasUsed")]),e._v(" 都会被中继到共识引擎中.")])],1)}),[],!1,null,null,null);v.default=_.exports}}]);