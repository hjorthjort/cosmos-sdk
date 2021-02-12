(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{734:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rosetta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rosetta"}},[e._v("#")]),e._v(" Rosetta")]),e._v(" "),a("p",[e._v("Package rosetta implements the rosetta API for the current cosmos sdk release series.")]),e._v(" "),a("p",[e._v("The client satisfies "),a("a",{attrs:{href:"https://github.com/tendermint/cosmos-rosetta-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos-rosetta-gateway"),a("OutboundLink")],1),e._v(" "),a("code",[e._v("Client")]),e._v(" interface implementation.")]),e._v(" "),a("h2",{attrs:{id:"extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension"}},[e._v("#")]),e._v(" Extension")]),e._v(" "),a("p",[e._v("There are two ways in which you can customize and extend the implementation with your custom settings.")]),e._v(" "),a("h3",{attrs:{id:"message-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-extension"}},[e._v("#")]),e._v(" Message extension")]),e._v(" "),a("p",[e._v("In order to make an "),a("code",[e._v("sdk.Msg")]),e._v(" understandable by rosetta the only thing which is required is adding the methods to your message that satisfy the "),a("code",[e._v("rosetta.Msg")]),e._v(" interface.\nExamples on how to do so can be found in the staking types such as "),a("code",[e._v("MsgDelegate")]),e._v(", or in bank types such as "),a("code",[e._v("MsgSend")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"client-interface-override"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-interface-override"}},[e._v("#")]),e._v(" Client interface override")]),e._v(" "),a("p",[e._v("In case more customization is required, it's possible to embed the Client type and override the methods which require customizations.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBjdXN0b21fY2xpZW50CmltcG9ydCAoCgomcXVvdDtjb250ZXh0JnF1b3Q7CiZxdW90O2dpdGh1Yi5jb20vY29pbmJhc2Uvcm9zZXR0YS1zZGstZ28vdHlwZXMmcXVvdDsKJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9zZXJ2ZXIvcm9zZXR0YSZxdW90OwopCgovLyBDdXN0b21DbGllbnQgZW1iZWRzIHRoZSBzdGFuZGFyZCBjb3Ntb3MgY2xpZW50Ci8vIHdoaWNoIG1lYW5zIHRoYXQgaXQgaW1wbGVtZW50cyB0aGUgY29zbW9zLXJvc2V0dGEtZ2F0ZXdheSBDbGllbnQKLy8gaW50ZXJmYWNlIHdoaWxlIGF0IHRoZSBzYW1lIHRpbWUgYWxsb3dpbmcgdG8gY3VzdG9taXplIGNlcnRhaW4gbWV0aG9kcwp0eXBlIEN1c3RvbUNsaWVudCBzdHJ1Y3QgewogICAgKnJvc2V0dGEuQ2xpZW50Cn0KCmZ1bmMgKGMgKkN1c3RvbUNsaWVudCkgQ29uc3RydWN0aW9uUGF5bG9hZChfIGNvbnRleHQuQ29udGV4dCwgcmVxdWVzdCAqdHlwZXMuQ29uc3RydWN0aW9uUGF5bG9hZHNSZXF1ZXN0KSAocmVzcCAqdHlwZXMuQ29uc3RydWN0aW9uUGF5bG9hZHNSZXNwb25zZSwgZXJyIGVycm9yKSB7CiAgICAvLyBwcm92aWRlIGN1c3RvbSBzaWduYXR1cmUgYnl0ZXMKICAgIHBhbmljKCZxdW90O2ltcGxlbWVudCBtZSZxdW90OykKfQo="}}),e._v(" "),a("h3",{attrs:{id:"error-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-extension"}},[e._v("#")]),e._v(" Error extension")]),e._v(" "),a("p",[e._v("Since rosetta requires to provide 'returned' errors to network options. In order to declare a new rosetta error, we use the "),a("code",[e._v("errors")]),e._v(" package in cosmos-rosetta-gateway.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBjdXN0b21fZXJyb3JzCmltcG9ydCBjcmdlcnJzICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC9jb3Ntb3Mtcm9zZXR0YS1nYXRld2F5L2Vycm9ycyZxdW90OwoKdmFyIGN1c3RvbUVyclJldHJpYWJsZSA9IHRydWUKdmFyIEN1c3RvbUVycm9yID0gY3JnZXJycy5SZWdpc3RlckVycm9yKDEwMCwgJnF1b3Q7Y3VzdG9tIG1lc3NhZ2UmcXVvdDssIGN1c3RvbUVyclJldHJpYWJsZSwgJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDspCg=="}}),e._v(" "),a("p",[e._v("Note: errors must be registered before cosmos-rosetta-gateway's "),a("code",[e._v("Server")]),e._v("."),a("code",[e._v("Start")]),e._v(" method is called. Otherwise the registration will be ignored. Errors with same code will be ignored too.")]),e._v(" "),a("h2",{attrs:{id:"integration-in-app-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration-in-app-go"}},[e._v("#")]),e._v(" Integration in app.go")]),e._v(" "),a("p",[e._v("To integrate rosetta as a command in your application, in app.go, in your root command simply use the "),a("code",[e._v("server.RosettaCommand")]),e._v(" method.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBhcHAKaW1wb3J0ICgKCiZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2VydmVyJnF1b3Q7CiZxdW90O2dpdGh1Yi5jb20vc3BmMTMvY29icmEmcXVvdDsKKQoKZnVuYyBidWlsZEFwcENvbW1hbmQocm9vdENtZCAqY29icmEuQ29tbWFuZCkgewogICAgLy8gbW9yZSBhcHAuZ28gaW5pdCBzdHVmZgoJLy8gLi4uCiAgICAvLyBhZGQgcm9zZXR0YSBjb21tYW5kCglyb290Q21kLkFkZENvbW1hbmQoc2VydmVyLlJvc2V0dGFDb21tYW5kKGVuY29kaW5nQ29uZmlnLkludGVyZmFjZVJlZ2lzdHJ5LCBlbmNvZGluZ0NvbmZpZy5NYXJzaGFsZXIpKQp9Cg=="}}),e._v(" "),a("p",[e._v("A full implementation example can be found in "),a("code",[e._v("simapp")]),e._v(" package.")]),e._v(" "),a("p",[e._v("NOTE: when using a customized client, the command cannot be used as the constructors required "),a("strong",[e._v("may")]),e._v(" differ, so it's required to create a new one. We intend to provide a way to init a customized client without writing extra code in the future.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);