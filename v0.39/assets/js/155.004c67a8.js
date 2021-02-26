(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{844:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"messages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),n("p",[e._v("In this section we describe the processing of the crisis messages and the\ncorresponding updates to the state.")]),e._v(" "),n("h2",{attrs:{id:"msgverifyinvariant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#msgverifyinvariant"}},[e._v("#")]),e._v(" MsgVerifyInvariant")]),e._v(" "),n("p",[e._v("Blockchain invariants can be checked using the "),n("code",[e._v("MsgVerifyInvariant")]),e._v(" message.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dWZXJpZnlJbnZhcmlhbnQgc3RydWN0IHsKCVNlbmRlciAgICAgICAgIHNkay5BY2NBZGRyZXNzIAoJSW52YXJpYW50Um91dGUgc3RyaW5nCn0K"}}),e._v(" "),n("p",[e._v("This message is expected to fail if:")]),e._v(" "),n("ul",[n("li",[e._v("the sender does not have enough coins for the constant fee")]),e._v(" "),n("li",[e._v("the invariant route is not registered")])]),e._v(" "),n("p",[e._v("This message checks the invariant provided, and if the invariant is broken it\npanics, halting the blockchain. If the invariant is broken, the constant fee is\nnever deducted as the transaction is never committed to a block (equivalent to\nbeing refunded). However, if the invariant is not broken, the constant fee will\nnot be refunded.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);