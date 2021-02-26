(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{761:function(e,t,o){"use strict";o.r(t);var i=o(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"recommended-folder-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recommended-folder-structure"}},[e._v("#")]),e._v(" Recommended Folder Structure")]),e._v(" "),o("h2",{attrs:{id:"structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),o("p",[e._v("A typical Cosmos SDK module can be structured as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"eC97bW9kdWxlfQrilJzilIDilIAgY2xpZW50CuKUgsKgwqAg4pSc4pSA4pSAIGNsaQrilILCoMKgIOKUgiAgIOKUnOKUgOKUgCBxdWVyeS5nbwrilILCoMKgIOKUgsKgwqAg4pSU4pSA4pSAIHR4LmdvCuKUgsKgwqAg4pSU4pSA4pSAIHJlc3QK4pSCwqDCoCAgICAg4pSc4pSA4pSAIHF1ZXJ5LmdvCuKUgsKgwqAgICAgIOKUlOKUgOKUgCB0eC5nbwrilJzilIDilIAgZXhwb3J0ZWQK4pSCwqDCoCDilJTilIDilIAgZXhwb3J0ZWQuZ28K4pSc4pSA4pSAIGludGVybmFsCuKUgsKgwqAg4pSc4pSA4pSAIGtlZXBlcgrilILCoMKgIOKUgsKgwqAg4pSc4pSA4pSAIGludmFyaWFudHMuZ28K4pSCwqDCoCDilILCoMKgIOKUnOKUgOKUgCBrZWVwZXIuZ28K4pSCwqDCoCDilILCoMKgIOKUnOKUgOKUgCAuLi4K4pSCwqDCoCDilILCoMKgIOKUlOKUgOKUgCBxdWVyaWVyLmdvCuKUgsKgwqAg4pSU4pSA4pSAIHR5cGVzCuKUgsKgwqAgICAgIOKUnOKUgOKUgCBjb2RlYy5nbwrilILCoMKgICAgICDilJzilIDilIAgZXJyb3JzLmdvCuKUgsKgwqAgICAgIOKUnOKUgOKUgCBldmVudHMuZ28K4pSCwqDCoCAgICAg4pSc4pSA4pSAIGV4cGVjdGVkX2tlZXBlcnMuZ28K4pSCwqDCoCAgICAg4pSc4pSA4pSAIGdlbmVzaXMuZ28K4pSCwqDCoCAgICAg4pSc4pSA4pSAIGtleXMuZ28K4pSCwqDCoCAgICAg4pSc4pSA4pSAIG1zZ3MuZ28K4pSCwqDCoCAgICAg4pSc4pSA4pSAIHBhcmFtcy5nbwrilILCoMKgICAgICDilJzilIDilIAgLi4uCuKUgsKgwqAgICAgIOKUlOKUgOKUgCBxdWVyaWVyLmdvCuKUnOKUgOKUgCBhYmNpLmdvCuKUnOKUgOKUgCBhbGlhcy5nbwrilJzilIDilIAgZ2VuZXNpcy5nbwrilJzilIDilIAgaGFuZGxlci5nbwrilJzilIDilIAgbW9kdWxlLmdvCuKUnOKUgOKUgCAuLi4K4pSU4pSA4pSAIHNpbXVsYXRpb24uZ28K"}}),e._v(" "),o("ul",[o("li",[o("code",[e._v("abci.go")]),e._v(": The module's "),o("code",[e._v("BeginBlocker")]),e._v(" and "),o("code",[e._v("EndBlocker")]),e._v(" implementations (if any).")]),e._v(" "),o("li",[o("code",[e._v("alias.go")]),e._v(": The module's exported types, constants, and variables. These are mainly\nto improve developer ergonomics by only needing to import a single package. Note,\nthere is nothing preventing developers from importing other packages from the module\n(excluding"),o("code",[e._v("internal/")]),e._v(") but it is recommended that "),o("code",[e._v("alias.go")]),e._v(" have everything\nexposed that other modules may need. The majority of the exported values here will\ntypically come from "),o("code",[e._v("internal/")]),e._v(" (see below).")]),e._v(" "),o("li",[o("code",[e._v("client/")]),e._v(": The module's CLI and REST client functionality implementation and\ntesting.")]),e._v(" "),o("li",[o("code",[e._v("exported/")]),e._v(": The module's exported types -- typically type interfaces. If a module\nrelies on other module keepers, it is expected to receive them as interface\ncontracts through the "),o("code",[e._v("expected_keepers.go")]),e._v(" (which are detailed below) design to\navoid having a direct dependency on the implementing module. However, these\ncontracts can define methods that operate on and/or return types that are specific\nto the contract's implementing module and this is where "),o("code",[e._v("exported/")]),e._v(" comes into play.\nTypes defined here allow for "),o("code",[e._v("expected_keepers.go")]),e._v(" in other modules to define\ncontracts that use single canonical types. This pattern allows for code to remain\nDRY and also alleviates import cycle chaos.")]),e._v(" "),o("li",[o("code",[e._v("genesis.go")]),e._v(": The module's genesis related business logic (e.g. "),o("code",[e._v("InitGenesis")]),e._v(").\nNote, genesis types are defined in "),o("code",[e._v("internal/types")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("handler.go")]),e._v(": The module's message handlers.")]),e._v(" "),o("li",[o("code",[e._v("internal/")]),e._v(": The module's internal types and implementations. The purpose of\nthis package is mainly two fold. First, it signals that this package is not\nintended to be used or imported anywhere outside the defining module. Secondly,\nit goes hand-in-hand with "),o("code",[e._v("alias.go")]),e._v(" in that it allows public types and functions\nto be used internally while not being exposed outside to the outside world. This\nallows for greater freedom of development while maintaining API stability.\n"),o("ul",[o("li",[o("code",[e._v("internal/types")]),e._v(": The module's type definitions such as messages, "),o("code",[e._v("KVStore")]),e._v("\nkeys, parameter types, and "),o("code",[e._v("expected_keepers.go")]),e._v(" contracts.")]),e._v(" "),o("li",[o("code",[e._v("internal/keeper")]),e._v(": The module's keeper implementation along with any auxiliary\nimplementations such as the querier and invariants.")])])]),e._v(" "),o("li",[o("code",[e._v("module.go")]),e._v(": The module's implementation of the "),o("code",[e._v("AppModule")]),e._v(" and "),o("code",[e._v("AppModuleBasic")]),e._v("\ninterfaces.")]),e._v(" "),o("li",[o("code",[e._v("simulation.go")]),e._v(": The module's simulation messages and related types (if any).")])]),e._v(" "),o("h2",{attrs:{hide:"",id:"next"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),o("p",{attrs:{hide:""}},[e._v("Learn about "),o("RouterLink",{attrs:{to:"/interfaces/interfaces-intro.html"}},[e._v("interfaces")])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);