(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{738:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-019-protocol-buffer-state-encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-019-protocol-buffer-state-encoding"}},[e._v("#")]),e._v(" ADR 019: Protocol Buffer State Encoding")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2020 Feb 15: Initial Draft")]),e._v(" "),o("li",[e._v("2020 Feb 24: Updates to handle messages with interface fields")]),e._v(" "),o("li",[e._v("2020 Apr 27: Convert usages of "),o("code",[e._v("oneof")]),e._v(" for interfaces to "),o("code",[e._v("Any")])]),e._v(" "),o("li",[e._v("2020 May 15: Describe "),o("code",[e._v("cosmos_proto")]),e._v(" extensions and amino compatibility")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Accepted")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Currently, the Cosmos SDK utilizes "),o("a",{attrs:{href:"https://github.com/tendermint/go-amino/",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-amino"),o("OutboundLink")],1),e._v(" for binary\nand JSON object encoding over the wire bringing parity between logical objects and persistence objects.")]),e._v(" "),o("p",[e._v("From the Amino docs:")]),e._v(" "),o("blockquote",[o("p",[e._v("Amino is an object encoding specification. It is a subset of Proto3 with an extension for interface\nsupport. See the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proto3 spec"),o("OutboundLink")],1),e._v(" for more\ninformation on Proto3, which Amino is largely compatible with (but not with Proto2).")]),e._v(" "),o("p",[e._v("The goal of the Amino encoding protocol is to bring parity into logic objects and persistence objects.")])]),e._v(" "),o("p",[e._v("Amino also aims to have the following goals (not a complete list):")]),e._v(" "),o("ul",[o("li",[e._v("Binary bytes must be decode-able with a schema.")]),e._v(" "),o("li",[e._v("Schema must be upgradeable.")]),e._v(" "),o("li",[e._v("The encoder and decoder logic must be reasonably simple.")])]),e._v(" "),o("p",[e._v("However, we believe that Amino does not fulfill these goals completely and does not fully meet the\nneeds of a truly flexible cross-language and multi-client compatible encoding protocol in the Cosmos SDK.\nNamely, Amino has proven to be a big pain-point in regards to supporting object serialization across\nclients written in various languages while providing virtually little in the way of true backwards\ncompatibility and upgradeability. Furthermore, through profiling and various benchmarks, Amino has\nbeen shown to be an extremely large performance bottleneck in the Cosmos SDK "),o("sup",[e._v("1")]),e._v(". This is\nlargely reflected in the performance of simulations and application transaction throughput.")]),e._v(" "),o("p",[e._v("Thus, we need to adopt an encoding protocol that meets the following criteria for state serialization:")]),e._v(" "),o("ul",[o("li",[e._v("Language agnostic")]),e._v(" "),o("li",[e._v("Platform agnostic")]),e._v(" "),o("li",[e._v("Rich client support and thriving ecosystem")]),e._v(" "),o("li",[e._v("High performance")]),e._v(" "),o("li",[e._v("Minimal encoded message size")]),e._v(" "),o("li",[e._v("Codegen-based over reflection-based")]),e._v(" "),o("li",[e._v("Supports backward and forward compatibility")])]),e._v(" "),o("p",[e._v("Note, migrating away from Amino should be viewed as a two-pronged approach, state and client encoding.\nThis ADR focuses on state serialization in the Cosmos SDK state machine. A corresponding ADR will be\nmade to address client-side encoding.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("p",[e._v("We will adopt "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),o("OutboundLink")],1),e._v(" for serializing\npersisted structured data in the Cosmos SDK while providing a clean mechanism and developer UX for\napplications wishing to continue to use Amino. We will provide this mechanism by updating modules to\naccept a codec interface, "),o("code",[e._v("Marshaler")]),e._v(", instead of a concrete Amino codec. Furthermore, the Cosmos SDK\nwill provide three concrete implementations of the "),o("code",[e._v("Marshaler")]),e._v(" interface: "),o("code",[e._v("AminoCodec")]),e._v(", "),o("code",[e._v("ProtoCodec")]),e._v(",\nand "),o("code",[e._v("HybridCodec")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("AminoCodec")]),e._v(": Uses Amino for both binary and JSON encoding.")]),e._v(" "),o("li",[o("code",[e._v("ProtoCodec")]),e._v(": Uses Protobuf for or both binary and JSON encoding.")]),e._v(" "),o("li",[o("code",[e._v("HybridCodec")]),e._v(": Uses Amino for JSON encoding and Protobuf for binary encoding.")])]),e._v(" "),o("p",[e._v("Until the client migration landscape is fully understood and designed, modules will use a "),o("code",[e._v("HybridCodec")]),e._v("\nas the concrete codec it accepts and/or extends. This means that all client JSON encoding, including\ngenesis state, will still use Amino. The ultimate goal will be to replace Amino JSON encoding with\nProtbuf encoding and thus have modules accept and/or extend "),o("code",[e._v("ProtoCodec")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"module-codecs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-codecs"}},[e._v("#")]),e._v(" Module Codecs")]),e._v(" "),o("p",[e._v("Modules that do not require the ability to work with and serialize interfaces, the path to Protobuf\nmigration is pretty straightforward. These modules are to simply migrate any existing types that\nare encoded and persisted via their concrete Amino codec to Protobuf and have their keeper accept a\n"),o("code",[e._v("Marshaler")]),e._v(" that will be a "),o("code",[e._v("HybridCodec")]),e._v(". This migration is simple as things will just work as-is.")]),e._v(" "),o("p",[e._v("Note, any business logic that needs to encode primitive types like "),o("code",[e._v("bool")]),e._v(" or "),o("code",[e._v("int64")]),e._v(" should use\n"),o("a",{attrs:{href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoprotobuf"),o("OutboundLink")],1),e._v(" Value types.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICB0cywgZXJyIDo9IGdvZ290eXBlcy5UaW1lc3RhbXBQcm90byhjb21wbGV0aW9uVGltZSkKICBpZiBlcnIgIT0gbmlsIHsKICAgIC8vIC4uLgogIH0KCiAgYnogOj0gY2RjLk11c3RNYXJzaGFsQmluYXJ5QmFyZSh0cykK"}}),e._v(" "),o("p",[e._v("However, modules can vary greatly in purpose and design and so we must support the ability for modules\nto be able to encode and work with interfaces (e.g. "),o("code",[e._v("Account")]),e._v(" or "),o("code",[e._v("Content")]),e._v("). For these modules, they\nmust define their own codec interface that extends "),o("code",[e._v("Marshaler")]),e._v(". These specific interfaces are unique\nto the module and will contain method contracts that know how to serialize the needed interfaces.")]),e._v(" "),o("p",[e._v("Example:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9hdXRoL3R5cGVzL2NvZGVjLmdvCgp0eXBlIENvZGVjIGludGVyZmFjZSB7CiAgY29kZWMuTWFyc2hhbGVyCgogIE1hcnNoYWxBY2NvdW50KGFjYyBleHBvcnRlZC5BY2NvdW50KSAoW11ieXRlLCBlcnJvcikKICBVbm1hcnNoYWxBY2NvdW50KGJ6IFtdYnl0ZSkgKGV4cG9ydGVkLkFjY291bnQsIGVycm9yKQoKICBNYXJzaGFsQWNjb3VudEpTT04oYWNjIGV4cG9ydGVkLkFjY291bnQpIChbXWJ5dGUsIGVycm9yKQogIFVubWFyc2hhbEFjY291bnRKU09OKGJ6IFtdYnl0ZSkgKGV4cG9ydGVkLkFjY291bnQsIGVycm9yKQp9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"usage-of-any-to-encode-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-any-to-encode-interfaces"}},[e._v("#")]),e._v(" Usage of "),o("code",[e._v("Any")]),e._v(" to encode interfaces")]),e._v(" "),o("p",[e._v("In general, module-level .proto files should define messages which encode interfaces\nusing "),o("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("google.protobuf.Any")]),o("OutboundLink")],1),e._v(".\nAfter "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/6030",target:"_blank",rel:"noopener noreferrer"}},[e._v("extension discussion"),o("OutboundLink")],1),e._v(",\nthis was chosen as the preferred alternative to application-level "),o("code",[e._v("oneof")]),e._v("s\nas in our original protobuf design. The arguments in favor of "),o("code",[e._v("Any")]),e._v(" can be\nsummarized as follows:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Any")]),e._v(" provides a simpler, more consistent client UX for dealing with\ninterfaces than app-level "),o("code",[e._v("oneof")]),e._v("s that will need to be coordinated more\ncarefully across applications. Creating a generic transaction\nsigning library using "),o("code",[e._v("oneof")]),e._v("s may be cumbersome and critical logic may need\nto be reimplemented for each chain")]),e._v(" "),o("li",[o("code",[e._v("Any")]),e._v(" provides more resistance against human error than "),o("code",[e._v("oneof")])]),e._v(" "),o("li",[o("code",[e._v("Any")]),e._v(" is generally simpler to implement for both modules and apps")])]),e._v(" "),o("p",[e._v("The main counter-argument to using "),o("code",[e._v("Any")]),e._v(" centers around its additional space\nand possibly performance overhead. The space overhead could be dealt with using\ncompression at the persistence layer in the future and the performance impact\nis likely to be small. Thus, not using "),o("code",[e._v("Any")]),e._v(" is seem as a pre-mature optimization,\nwith user experience as the higher order concern.")]),e._v(" "),o("p",[e._v("Note, that given the SDK's decision to adopt the "),o("code",[e._v("Codec")]),e._v(" interfaces described\nabove, apps can still choose to use "),o("code",[e._v("oneof")]),e._v(" to encode state and transactions\nbut it is not the recommended approach. If apps do choose to use "),o("code",[e._v("oneof")]),e._v("s\ninstead of "),o("code",[e._v("Any")]),e._v(" they will likely lose compatibility with client apps that\nsupport multiple chains. Thus developers should think carefully about whether\nthey care more about what is possibly a pre-mature optimization or end-user\nand client developer UX.")]),e._v(" "),o("h3",{attrs:{id:"safe-usage-of-any"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#safe-usage-of-any"}},[e._v("#")]),e._v(" Safe usage of "),o("code",[e._v("Any")])]),e._v(" "),o("p",[e._v("By default, the "),o("a",{attrs:{href:"https://godoc.org/github.com/gogo/protobuf/types",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogo protobuf implementation of "),o("code",[e._v("Any")]),o("OutboundLink")],1),e._v("\nuses "),o("a",{attrs:{href:"https://github.com/gogo/protobuf/blob/master/proto/properties.go#L540",target:"_blank",rel:"noopener noreferrer"}},[e._v("global type registration"),o("OutboundLink")],1),e._v("\nto decode values packed in "),o("code",[e._v("Any")]),e._v(" into concrete\ngo types. This introduces a vulnerability where any malicious module\nin the dependency tree could registry a type with the global protobuf registry\nand cause it to be loaded and unmarshaled by a transaction that referenced\nit in the "),o("code",[e._v("type_url")]),e._v(" field.")]),e._v(" "),o("p",[e._v("To prevent this, we introduce a type registration mechanism for decoding "),o("code",[e._v("Any")]),e._v("\nvalues into concrete types through the "),o("code",[e._v("InterfaceRegistry")]),e._v(" interface which\nbears some similarity to type registration with Amino:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbnRlcmZhY2VSZWdpc3RyeSBpbnRlcmZhY2UgewogICAgLy8gUmVnaXN0ZXJJbnRlcmZhY2UgYXNzb2NpYXRlcyBwcm90b05hbWUgYXMgdGhlIHB1YmxpYyBuYW1lIGZvciB0aGUKICAgIC8vIGludGVyZmFjZSBwYXNzZWQgaW4gYXMgaWZhY2UKICAgIC8vIEV4OgogICAgLy8gICByZWdpc3RyeS5SZWdpc3RlckludGVyZmFjZSgmcXVvdDtjb3Ntb3Nfc2RrLk1zZyZxdW90OywgKCpzZGsuTXNnKShuaWwpKQogICAgUmVnaXN0ZXJJbnRlcmZhY2UocHJvdG9OYW1lIHN0cmluZywgaWZhY2UgaW50ZXJmYWNle30pCgogICAgLy8gUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMgcmVnaXN0ZXJzIGltcGxzIGFzIGEgY29uY3JldGUgaW1wbGVtZW50YXRpb25zIG9mCiAgICAvLyB0aGUgaW50ZXJmYWNlIGlmYWNlCiAgICAvLyBFeDoKICAgIC8vICByZWdpc3RyeS5SZWdpc3RlckltcGxlbWVudGF0aW9ucygoKnNkay5Nc2cpKG5pbCksICZhbXA7TXNnU2VuZHt9LCAmYW1wO01zZ011bHRpU2VuZHt9KQogICAgUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMoaWZhY2UgaW50ZXJmYWNle30sIGltcGxzIC4uLnByb3RvLk1lc3NhZ2UpCgp9Cg=="}}),e._v(" "),o("p",[e._v("In addition to serving as a whitelist, "),o("code",[e._v("InterfaceRegistry")]),e._v(" can also serve\nto communicate the list of concrete types that satisfy an interface to clients.")]),e._v(" "),o("p",[e._v("In .proto files:")]),e._v(" "),o("ul",[o("li",[e._v("fields which accept interfaces should be annotated with "),o("code",[e._v("cosmos_proto.accepts_interface")]),e._v("\nusing the same full-qualified name passed as "),o("code",[e._v("protoName")]),e._v(" to "),o("code",[e._v("InterfaceRegistry.RegisterInterface")])]),e._v(" "),o("li",[e._v("interface implementations should be annotated with "),o("code",[e._v("cosmos_proto.implements_interface")]),e._v("\nusing the same full-qualified name passed as "),o("code",[e._v("protoName")]),e._v(" to "),o("code",[e._v("InterfaceRegistry.RegisterInterface")])])]),e._v(" "),o("p",[e._v("In the future, "),o("code",[e._v("protoName")]),e._v(", "),o("code",[e._v("cosmos_proto.accepts_interface")]),e._v(", "),o("code",[e._v("cosmos_proto.implements_interface")]),e._v("\nmay be used via code generation, reflection &/or static linting.")]),e._v(" "),o("p",[e._v("The same struct that implements "),o("code",[e._v("InterfaceRegistry")]),e._v(" will also implement an\ninterface "),o("code",[e._v("InterfaceUnpacker")]),e._v(" to be used for unpacking "),o("code",[e._v("Any")]),e._v("s:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbnRlcmZhY2VVbnBhY2tlciBpbnRlcmZhY2UgewogICAgLy8gVW5wYWNrQW55IHVucGFja3MgdGhlIHZhbHVlIGluIGFueSB0byB0aGUgaW50ZXJmYWNlIHBvaW50ZXIgcGFzc2VkIGluIGFzCiAgICAvLyBpZmFjZS4gTm90ZSB0aGF0IHRoZSB0eXBlIGluIGFueSBtdXN0IGhhdmUgYmVlbiByZWdpc3RlcmVkIHdpdGgKICAgIC8vIFJlZ2lzdGVySW1wbGVtZW50YXRpb25zIGFzIGEgY29uY3JldGUgdHlwZSBmb3IgdGhhdCBpbnRlcmZhY2UKICAgIC8vIEV4OgogICAgLy8gICAgdmFyIG1zZyBzZGsuTXNnCiAgICAvLyAgICBlcnIgOj0gY3R4LlVucGFja0FueShhbnksICZhbXA7bXNnKQogICAgLy8gICAgLi4uCiAgICBVbnBhY2tBbnkoYW55ICpBbnksIGlmYWNlIGludGVyZmFjZXt9KSBlcnJvcgp9Cg=="}}),e._v(" "),o("p",[e._v("Note that "),o("code",[e._v("InterfaceRegistry")]),e._v(" usage does not deviate from standard protobuf\nusage of "),o("code",[e._v("Any")]),e._v(", it just introduces a security and introspection layer for\ngolang usage.")]),e._v(" "),o("p",[o("code",[e._v("InterfaceRegistry")]),e._v(" will be a member of "),o("code",[e._v("ProtoCodec")]),e._v(" and "),o("code",[e._v("HybridCodec")]),e._v(" as\ndescribed above. In order for modules to register interface types, app modules\ncan optionally implement the following interface:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBJbnRlcmZhY2VNb2R1bGUgaW50ZXJmYWNlIHsKICAgIFJlZ2lzdGVySW50ZXJmYWNlVHlwZXMoSW50ZXJmYWNlUmVnaXN0cnkpCn0K"}}),e._v(" "),o("p",[e._v("The module manager will include a method to call "),o("code",[e._v("RegisterInterfaceTypes")]),e._v(" on\nevery module that implements it in order to populate the "),o("code",[e._v("InterfaceRegistry")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"using-any-to-encode-state"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-any-to-encode-state"}},[e._v("#")]),e._v(" Using "),o("code",[e._v("Any")]),e._v(" to encode state")]),e._v(" "),o("p",[e._v("The SDK will provide support methods "),o("code",[e._v("MarshalAny")]),e._v(" and "),o("code",[e._v("UnmarshalAny")]),e._v(" to allow\neasy encoding of state to "),o("code",[e._v("Any")]),e._v(" in "),o("code",[e._v("Codec")]),e._v(" implementations. Ex:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCmZ1bmMgKGMgKkNvZGVjKSBNYXJzaGFsRXZpZGVuY2UoZXZpZGVuY2VJIGV2aWV4cG9ydGVkLkV2aWRlbmNlKSAoW11ieXRlLCBlcnJvcikgewoJcmV0dXJuIGNvZGVjLk1hcnNoYWxBbnkoZXZpZGVuY2VJKQp9CgpmdW5jIChjICpDb2RlYykgVW5tYXJzaGFsRXZpZGVuY2UoYnogW11ieXRlKSAoZXZpZXhwb3J0ZWQuRXZpZGVuY2UsIGVycm9yKSB7Cgl2YXIgZXZpIGV2aWV4cG9ydGVkLkV2aWRlbmNlCgllcnIgOj0gY29kZWMuVW5tYXJzaGFsQW55KGMuaW50ZXJmYWNlQ29udGV4dCwgJmFtcDtldmksIGJ6KQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIG5pbCwgZXJyCgl9CglyZXR1cm4gZXZpLCBuaWwKfQo="}}),e._v(" "),o("h3",{attrs:{id:"using-any-in-sdk-msgs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-any-in-sdk-msgs"}},[e._v("#")]),e._v(" Using "),o("code",[e._v("Any")]),e._v(" in "),o("code",[e._v("sdk.Msg")]),e._v("s")]),e._v(" "),o("p",[e._v("A similar concept is to be applied for messages that contain interfaces fields.\nFor example, we can define "),o("code",[e._v("MsgSubmitEvidence")]),e._v(" as follows where "),o("code",[e._v("Evidence")]),e._v(" is\nan interface:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8geC9ldmlkZW5jZS90eXBlcy90eXBlcy5wcm90bwoKbWVzc2FnZSBNc2dTdWJtaXRFdmlkZW5jZSB7CiAgYnl0ZXMgc3VibWl0dGVyID0gMQogICAgWwogICAgICAoZ29nb3Byb3RvLmNhc3R0eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQWNjQWRkcmVzcyZxdW90OwogICAgXTsKICBnb29nbGUucHJvdG9idWYuQW55IGV2aWRlbmNlID0gMjsKfQo="}}),e._v(" "),o("p",[e._v("Note that in order to unpack the evidence from "),o("code",[e._v("Any")]),e._v(" we do need a reference to\n"),o("code",[e._v("InterfaceRegistry")]),e._v(". In order to reference evidence in methods like\n"),o("code",[e._v("ValidateBasic")]),e._v(" which shouldn't have to know about the "),o("code",[e._v("InterfaceRegistry")]),e._v(", we\nintroduce an "),o("code",[e._v("UnpackInterfaces")]),e._v(" phase to deserialization which unpacks\ninterfaces before they're needed.")]),e._v(" "),o("h3",{attrs:{id:"unpacking-interfaces"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unpacking-interfaces"}},[e._v("#")]),e._v(" Unpacking Interfaces")]),e._v(" "),o("p",[e._v("To implement the "),o("code",[e._v("UnpackInterfaces")]),e._v(" phase of deserialization which unpacks\ninterfaces wrapped in "),o("code",[e._v("Any")]),e._v(" before they're needed, we create an interface\nthat "),o("code",[e._v("sdk.Msg")]),e._v("s and other types can implement:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVbnBhY2tJbnRlcmZhY2VzTWVzc2FnZSBpbnRlcmZhY2UgewogIFVucGFja0ludGVyZmFjZXMoSW50ZXJmYWNlVW5wYWNrZXIpIGVycm9yCn0K"}}),e._v(" "),o("p",[e._v("We also introduce a private "),o("code",[e._v("cachedValue interface{}")]),e._v(" field onto the "),o("code",[e._v("Any")]),e._v("\nstruct itself with a public getter "),o("code",[e._v("GetCachedValue() interface{}")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("UnpackInterfaces")]),e._v(" method is to be invoked during message deserialization right\nafter "),o("code",[e._v("Unmarshal")]),e._v(" and any interface values packed in "),o("code",[e._v("Any")]),e._v("s will be decoded\nand stored in "),o("code",[e._v("cachedValue")]),e._v(" for reference later.")]),e._v(" "),o("p",[e._v("Then unpacked interface values can safely be used in any code afterwards\nwithout knowledge of the "),o("code",[e._v("InterfaceRegistry")]),e._v("\nand messages can introduce a simple getter to cast the cached value to the\ncorrect interface type.")]),e._v(" "),o("p",[e._v("This has the added benefit that unmarshaling of "),o("code",[e._v("Any")]),e._v(" values only happens once\nduring initial deserialization rather than every time the value is read. Also,\nwhen "),o("code",[e._v("Any")]),e._v(" values are first packed (for instance in a call to\n"),o("code",[e._v("NewMsgSubmitEvidence")]),e._v("), the original interface value is cached so that\nunmarshaling isn't needed to read it again.")]),e._v(" "),o("p",[o("code",[e._v("MsgSubmitEvidence")]),e._v(" could implement "),o("code",[e._v("UnpackInterfaces")]),e._v(", plus a convenience getter\n"),o("code",[e._v("GetEvidence")]),e._v(" as follows:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAobXNnIE1zZ1N1Ym1pdEV2aWRlbmNlKSBVbnBhY2tJbnRlcmZhY2VzKGN0eCBzZGsuSW50ZXJmYWNlUmVnaXN0cnkpIGVycm9yIHsKICB2YXIgZXZpIGV2aWV4cG9ydGVkLkV2aWRlbmNlCiAgcmV0dXJuIGN0eC5VbnBhY2tBbnkobXNnLkV2aWRlbmNlLCAqZXZpKQp9CgpmdW5jIChtc2cgTXNnU3VibWl0RXZpZGVuY2UpIEdldEV2aWRlbmNlKCkgZXZpZXhwb3J0ZWQuRXZpZGVuY2UgewogIHJldHVybiBtc2cuRXZpZGVuY2UuR2V0Q2FjaGVkVmFsdWUoKS4oZXZpZXhwb3J0ZWQuRXZpZGVuY2UpCn0K"}}),e._v(" "),o("h3",{attrs:{id:"amino-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#amino-compatibility"}},[e._v("#")]),e._v(" Amino Compatibility")]),e._v(" "),o("p",[e._v("Our custom implementation of "),o("code",[e._v("Any")]),e._v(" can be used transparently with Amino if used\nwith the proper codec instance. What this means is that interfaces packed within\n"),o("code",[e._v("Any")]),e._v("s will be amino marshaled like regular Amino interfaces (assuming they\nhave been registered properly with Amino).")]),e._v(" "),o("p",[e._v("In order for this functionality to work:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("all legacy code must use "),o("code",[e._v("*codec.LegacyAmino")]),e._v(" instead of "),o("code",[e._v("*amino.Codec")]),e._v(" which is\nnow a wrapper which properly handles "),o("code",[e._v("Any")])])]),e._v(" "),o("li",[o("strong",[e._v("all new code should use "),o("code",[e._v("Marshaler")]),e._v(" which is compatible with both amino and\nprotobuf")])]),e._v(" "),o("li",[e._v("Also, before v0.39, "),o("code",[e._v("codec.LegacyAmino")]),e._v(" will be renamed to "),o("code",[e._v("codec.LegacyAmino")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"why-wasn-t-x-chosen-instead"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-wasn-t-x-chosen-instead"}},[e._v("#")]),e._v(" Why Wasn't X Chosen Instead")]),e._v(" "),o("p",[e._v("For a more complete comparison to alternative protocols, see "),o("a",{attrs:{href:"https://codeburst.io/json-vs-protocol-buffers-vs-flatbuffers-a4247f8bda6f",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"cap-n-proto"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cap-n-proto"}},[e._v("#")]),e._v(" Cap'n Proto")]),e._v(" "),o("p",[e._v("While "),o("a",{attrs:{href:"https://capnproto.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cap’n Proto"),o("OutboundLink")],1),e._v(" does seem like an advantageous alternative to Protobuf\ndue to it's native support for interfaces/generics and built in canonicalization, it does lack the\nrich client ecosystem compared to Protobuf and is a bit less mature.")]),e._v(" "),o("h3",{attrs:{id:"flatbuffers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flatbuffers"}},[e._v("#")]),e._v(" FlatBuffers")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://google.github.io/flatbuffers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FlatBuffers"),o("OutboundLink")],1),e._v(" is also a potentially viable alternative, with the\nprimary difference being that FlatBuffers does not need a parsing/unpacking step to a secondary\nrepresentation before you can access data, often coupled with per-object memory allocation.")]),e._v(" "),o("p",[e._v("However, it would require great efforts into research and full understanding the scope of the migration\nand path forward -- which isn't immediately clear. In addition, FlatBuffers aren't designed for\nuntrusted inputs.")]),e._v(" "),o("h2",{attrs:{id:"future-improvements-roadmap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements-roadmap"}},[e._v("#")]),e._v(" Future Improvements & Roadmap")]),e._v(" "),o("p",[e._v("In the future we may consider a compression layer right above the persistence\nlayer which doesn't change tx or merkle tree hashes, but reduces the storage\noverhead of "),o("code",[e._v("Any")]),e._v(". In addition, we may adopt protobuf naming conventions which\nmake type URLs a bit more concise while remaining descriptive.")]),e._v(" "),o("p",[e._v("Additional code generation support around the usage of "),o("code",[e._v("Any")]),e._v(" is something that\ncould also be explored in the future to make the UX for go developers more\nseamless.")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("Significant performance gains.")]),e._v(" "),o("li",[e._v("Supports backward and forward type compatibility.")]),e._v(" "),o("li",[e._v("Better support for cross-language clients.")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("Learning curve required to understand and implement Protobuf messages.")]),e._v(" "),o("li",[e._v("Slightly larger message size due to use of "),o("code",[e._v("Any")]),e._v(", although this could be offset\nby a compression layer in the future")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ol",[o("li",[e._v("https://github.com/cosmos/cosmos-sdk/issues/4977")]),e._v(" "),o("li",[e._v("https://github.com/cosmos/cosmos-sdk/issues/5444")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);