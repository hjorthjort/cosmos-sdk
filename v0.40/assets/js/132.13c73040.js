(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{797:function(e,o,t){"use strict";t.r(o);var n=t(1),c=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("While encoding in the SDK used to be mainly handled by "),t("code",[e._v("go-amino")]),e._v(" codec, the SDK is moving towards using "),t("code",[e._v("gogoprotobuf")]),e._v(" for both state and client-side encoding.")]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK application")])],1)]),e._v(" "),t("h2",{attrs:{id:"encoding-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#encoding-2"}},[e._v("#")]),e._v(" Encoding")]),e._v(" "),t("p",[e._v("The Cosmos SDK utilizes two binary wire encoding protocols, "),t("a",{attrs:{href:"https://github.com/tendermint/go-amino/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amino"),t("OutboundLink")],1),e._v(" which is an object encoding specification and "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),t("OutboundLink")],1),e._v(", a subset of Proto3 with an extension for\ninterface support. See the "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proto3 spec"),t("OutboundLink")],1),e._v("\nfor more information on Proto3, which Amino is largely compatible with (but not with Proto2).")]),e._v(" "),t("p",[e._v("Due to Amino having significant performance drawbacks, being reflection-based, and\nnot having any meaningful cross-language/client support, Protocol Buffers, specifically\n"),t("a",{attrs:{href:"https://github.com/gogo/protobuf/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoprotobuf"),t("OutboundLink")],1),e._v(", is being used in place of Amino.\nNote, this process of using Protocol Buffers over Amino is still an ongoing process.")]),e._v(" "),t("p",[e._v("Binary wire encoding of types in the Cosmos SDK can be broken down into two main\ncategories, client encoding and store encoding. Client encoding mainly revolves\naround transaction processing and signing, whereas store encoding revolves around\ntypes used in state-machine transitions and what is ultimately stored in the Merkle\ntree.")]),e._v(" "),t("p",[e._v('For store encoding, protobuf definitions can exist for any type and will typically\nhave an Amino-based "intermediary" type. Specifically, the protobuf-based type\ndefinition is used for serialization and persistence, whereas the Amino-based type\nis used for business logic in the state-machine where they may converted back-n-forth.\nNote, the Amino-based types may slowly be phased-out in the future so developers\nshould take note to use the protobuf message definitions where possible.')]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("codec")]),e._v(" package, there exists two core interfaces, "),t("code",[e._v("Marshaler")]),e._v(" and "),t("code",[e._v("ProtoMarshaler")]),e._v(",\nwhere the former encapsulates the current Amino interface except it operates on\ntypes implementing the latter instead of generic "),t("code",[e._v("interface{}")]),e._v(" types.")]),e._v(" "),t("p",[e._v("In addition, there exists two implementations of "),t("code",[e._v("Marshaler")]),e._v(". The first being\n"),t("code",[e._v("AminoCodec")]),e._v(", where both binary and JSON serialization is handled via Amino. The\nsecond being "),t("code",[e._v("ProtoCodec")]),e._v(", where both binary and JSON serialization is handled\nvia Protobuf.")]),e._v(" "),t("p",[e._v("This means that modules may use Amino or Protobuf encoding but the types must\nimplement "),t("code",[e._v("ProtoMarshaler")]),e._v(". If modules wish to avoid implementing this interface\nfor their types, they may use an Amino codec directly.")]),e._v(" "),t("h3",{attrs:{id:"amino"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amino"}},[e._v("#")]),e._v(" Amino")]),e._v(" "),t("p",[e._v("Every module uses an Amino codec to serialize types and interfaces. This codec typically\nhas types and interfaces registered in that module's domain only (e.g. messages),\nbut there are exceptions like "),t("code",[e._v("x/gov")]),e._v(". Each module exposes a "),t("code",[e._v("RegisterLegacyAminoCodec")]),e._v(" function\nthat allows a user to provide a codec and have all the types registered. An application\nwill call this method for each necessary module.")]),e._v(" "),t("p",[e._v("Where there is no protobuf-based type definition for a module (see below), Amino\nis used to encode and decode raw wire bytes to the concrete type or interface:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YnogOj0ga2VlcGVyLmNkYy5NdXN0TWFyc2hhbEJpbmFyeUJhcmUodHlwZU9ySW50ZXJmYWNlKQprZWVwZXIuY2RjLk11c3RVbm1hcnNoYWxCaW5hcnlCYXJlKGJ6LCAmYW1wO3R5cGVPckludGVyZmFjZSkK"}}),e._v(" "),t("p",[e._v("Note, there are length-prefixed variants of the above functionality and this is\ntypically used for when the data needs to be streamed or grouped together\n(e.g. "),t("code",[e._v("ResponseDeliverTx.Data")]),e._v(")")]),e._v(" "),t("h3",{attrs:{id:"gogoproto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gogoproto"}},[e._v("#")]),e._v(" Gogoproto")]),e._v(" "),t("p",[e._v("Modules are encouraged to utilize Protobuf encoding for their respective types.")]),e._v(" "),t("h4",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("ol",[t("li",[e._v("How to create modules using protobuf encoding?")])]),e._v(" "),t("p",[t("strong",[e._v("Defining module types")])]),e._v(" "),t("p",[e._v("Protobuf types can be defined to encode:")]),e._v(" "),t("ul",[t("li",[e._v("state")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[t("code",[e._v("Msg")]),e._v("s")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[e._v("Query services")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/building-modules/genesis.html"}},[e._v("genesis")])],1)]),e._v(" "),t("p",[t("strong",[e._v("Naming and conventions")])]),e._v(" "),t("p",[e._v("We encourage developers to follow industry guidelines: "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/style",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers style guide"),t("OutboundLink")],1),e._v("\nand "),t("a",{attrs:{href:"https://buf.build/docs/style-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),t("OutboundLink")],1),e._v(", see more details in "),t("RouterLink",{attrs:{to:"/architecture/adr-023-protobuf-naming.html"}},[e._v("ADR 023")])],1),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("How to update modules to protobuf encoding?")])]),e._v(" "),t("p",[e._v("If modules do not contain any interfaces (e.g. "),t("code",[e._v("Account")]),e._v(" or "),t("code",[e._v("Content")]),e._v("), then they\nmay simply migrate any existing types that\nare encoded and persisted via their concrete Amino codec to Protobuf (see 1. for further guidelines) and accept a "),t("code",[e._v("Marshaler")]),e._v(" as the codec which is implemented via the "),t("code",[e._v("ProtoCodec")]),e._v("\nwithout any further customization.")]),e._v(" "),t("p",[e._v("However, if modules are to handle type interfaces, module-level .proto files should define messages which encode interfaces\nusing "),t("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/any.proto",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("google.protobuf.Any")]),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("For example, we can define "),t("code",[e._v("MsgSubmitEvidence")]),e._v(" as follows where "),t("code",[e._v("Evidence")]),e._v(" is\nan interface:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gcHJvdG8vY29zbW9zL2V2aWRlbmNlL3YxYmV0YTEvdHgucHJvdG8KCm1lc3NhZ2UgTXNnU3VibWl0RXZpZGVuY2UgewogIHN0cmluZyAgICAgICAgICAgICAgc3VibWl0dGVyID0gMTsKICBnb29nbGUucHJvdG9idWYuQW55IGV2aWRlbmNlICA9IDIgWyhjb3Ntb3NfcHJvdG8uYWNjZXB0c19pbnRlcmZhY2UpID0gJnF1b3Q7RXZpZGVuY2UmcXVvdDtdOwp9Cg=="}}),e._v(" "),t("p",[e._v("The SDK provides support methods "),t("code",[e._v("MarshalAny")]),e._v(" and "),t("code",[e._v("UnmarshalAny")]),e._v(" to allow\neasy encoding of state to "),t("code",[e._v("Any")]),e._v(".")]),e._v(" "),t("p",[e._v("Module should register interfaces using "),t("code",[e._v("InterfaceRegistry")]),e._v(" which provides a mechanism for registering interfaces: "),t("code",[e._v("RegisterInterface(protoName string, iface interface{})")]),e._v(" and implementations: "),t("code",[e._v("RegisterImplementations(iface interface{}, impls ...proto.Message)")]),e._v(" that can be safely unpacked from Any, similarly to type registration with Amino:")]),e._v(" "),t("p",[t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSW50ZXJmYWNlUmVnaXN0cnkgcHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIHJlZ2lzdGVyaW5nIGludGVyZmFjZXMgYW5kCi8vIGltcGxlbWVudGF0aW9ucyB0aGF0IGNhbiBiZSBzYWZlbHkgdW5wYWNrZWQgZnJvbSBBbnkKdHlwZSBJbnRlcmZhY2VSZWdpc3RyeSBpbnRlcmZhY2UgewoJQW55VW5wYWNrZXIKCgkvLyBSZWdpc3RlckludGVyZmFjZSBhc3NvY2lhdGVzIHByb3RvTmFtZSBhcyB0aGUgcHVibGljIG5hbWUgZm9yIHRoZQoJLy8gaW50ZXJmYWNlIHBhc3NlZCBpbiBhcyBpZmFjZS4gVGhpcyBpcyB0byBiZSB1c2VkIHByaW1hcmlseSB0byBjcmVhdGUKCS8vIGEgcHVibGljIGZhY2luZyByZWdpc3RyeSBvZiBpbnRlcmZhY2UgaW1wbGVtZW50YXRpb25zIGZvciBjbGllbnRzLgoJLy8gcHJvdG9OYW1lIHNob3VsZCBiZSBhIHdlbGwtY2hvc2VuIHB1YmxpYyBmYWNpbmcgbmFtZSB0aGF0IHJlbWFpbnMgc3RhYmxlLgoJLy8gUmVnaXN0ZXJJbnRlcmZhY2UgdGFrZXMgYW4gb3B0aW9uYWwgbGlzdCBvZiBpbXBscyB0byBiZSByZWdpc3RlcmVkCgkvLyBhcyBpbXBsZW1lbnRhdGlvbnMgb2YgaWZhY2UuCgkvLwoJLy8gRXg6CgkvLyAgIHJlZ2lzdHJ5LlJlZ2lzdGVySW50ZXJmYWNlKCZxdW90O2Nvc21vcy52MWJldGExLk1zZyZxdW90OywgKCpzZGsuTXNnKShuaWwpKQoJUmVnaXN0ZXJJbnRlcmZhY2UocHJvdG9OYW1lIHN0cmluZywgaWZhY2UgaW50ZXJmYWNle30sIGltcGxzIC4uLnByb3RvLk1lc3NhZ2UpCgoJLy8gUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMgcmVnaXN0ZXJzIGltcGxzIGFzIGNvbmNyZXRlIGltcGxlbWVudGF0aW9ucyBvZgoJLy8gdGhlIGludGVyZmFjZSBpZmFjZS4KCS8vCgkvLyBFeDoKCS8vICByZWdpc3RyeS5SZWdpc3RlckltcGxlbWVudGF0aW9ucygoKnNkay5Nc2cpKG5pbCksICZhbXA7TXNnU2VuZHt9LCAmYW1wO01zZ011bHRpU2VuZHt9KQoJUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMoaWZhY2UgaW50ZXJmYWNle30sIGltcGxzIC4uLnByb3RvLk1lc3NhZ2UpCgoJLy8gTGlzdEFsbEludGVyZmFjZXMgbGlzdCB0aGUgdHlwZSBVUkxzIG9mIGFsbCByZWdpc3RlcmVkIGludGVyZmFjZXMuCglMaXN0QWxsSW50ZXJmYWNlcygpIFtdc3RyaW5nCgoJLy8gTGlzdEltcGxlbWVudGF0aW9ucyBsaXN0cyB0aGUgdmFsaWQgdHlwZSBVUkxzIGZvciB0aGUgZ2l2ZW4gaW50ZXJmYWNlIG5hbWUgdGhhdCBjYW4gYmUgdXNlZAoJLy8gZm9yIHRoZSBwcm92aWRlZCBpbnRlcmZhY2UgdHlwZSBVUkwuCglMaXN0SW1wbGVtZW50YXRpb25zKGlmYWNlVHlwZVVSTCBzdHJpbmcpIFtdc3RyaW5nCn0="}})],1),e._v(" "),t("p",[e._v("In addition, an "),t("code",[e._v("UnpackInterfaces")]),e._v(" phase should be introduced to deserialization to unpack interfaces before they're needed. Protobuf types that contain a protobuf "),t("code",[e._v("Any")]),e._v(" either directly or via one of their members should implement the "),t("code",[e._v("UnpackInterfacesMessage")]),e._v(" interface:")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBVbnBhY2tJbnRlcmZhY2VzTWVzc2FnZSBpbnRlcmZhY2UgewogIFVucGFja0ludGVyZmFjZXMoSW50ZXJmYWNlVW5wYWNrZXIpIGVycm9yCn0K"}}),e._v(" "),t("h4",{attrs:{id:"guidelines-for-protobuf-message-definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-for-protobuf-message-definitions"}},[e._v("#")]),e._v(" Guidelines for protobuf message definitions")]),e._v(" "),t("p",[e._v("In addition to "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3#simple",target:"_blank",rel:"noopener noreferrer"}},[e._v("following official guidelines"),t("OutboundLink")],1),e._v(", we recommend to use these annotations in .proto files when dealing with interfaces:")]),e._v(" "),t("ul",[t("li",[e._v("fields which accept interfaces should be annotated with "),t("code",[e._v("cosmos_proto.accepts_interface")]),e._v("\nusing the same full-qualified name passed as "),t("code",[e._v("protoName")]),e._v(" to "),t("code",[e._v("InterfaceRegistry.RegisterInterface")])]),e._v(" "),t("li",[e._v("interface implementations should be annotated with "),t("code",[e._v("cosmos_proto.implements_interface")]),e._v("\nusing the same full-qualified name passed as "),t("code",[e._v("protoName")]),e._v(" to "),t("code",[e._v("InterfaceRegistry.RegisterInterface")])])]),e._v(" "),t("h4",{attrs:{id:"transaction-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-encoding"}},[e._v("#")]),e._v(" Transaction Encoding")]),e._v(" "),t("p",[e._v("Another important use of Protobuf is the encoding and decoding of\n"),t("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transactions")]),e._v(". Transactions are defined by the application or\nthe SDK, but passed to the underlying consensus engine in order to be relayed to\nother peers. Since the underlying consensus engine is agnostic to the application,\nit only accepts transactions in the form of raw bytes. The encoding is done by an\nobject called "),t("code",[e._v("TxEncoder")]),e._v(" and the decoding by an object called "),t("code",[e._v("TxDecoder")]),e._v(".")],1),e._v(" "),t("p",[t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHhEZWNvZGVyIHVubWFyc2hhbHMgdHJhbnNhY3Rpb24gYnl0ZXMKdHlwZSBUeERlY29kZXIgZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKFR4LCBlcnJvcikKCi8vIFR4RW5jb2RlciBtYXJzaGFscyB0cmFuc2FjdGlvbiB0byBieXRlcwp0eXBlIFR4RW5jb2RlciBmdW5jKHR4IFR4KSAoW11ieXRlLCBlcnJvcik="}})],1),e._v(" "),t("p",[e._v("A standard implementation of both these objects can be found in the "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/x/auth",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("auth")]),e._v(" module"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("p",[t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eAoKaW1wb3J0ICgKCSZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NyeXB0byZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMvdW5rbm93bnByb3RvJnF1b3Q7CgljcnlwdG90eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NyeXB0by90eXBlcyZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy90eCZxdW90OwopCgovLyBEZWZhdWx0VHhEZWNvZGVyIHJldHVybnMgYSBkZWZhdWx0IHByb3RvYnVmIFR4RGVjb2RlciB1c2luZyB0aGUgcHJvdmlkZWQgTWFyc2hhbGVyIGFuZCBQdWJsaWNLZXlDb2RlYwpmdW5jIERlZmF1bHRUeERlY29kZXIoY2RjICpjb2RlYy5Qcm90b0NvZGVjLCBrZXlDb2RlYyBjcnlwdG90eXBlcy5QdWJsaWNLZXlDb2RlYykgc2RrLlR4RGVjb2RlciB7CglyZXR1cm4gZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKHNkay5UeCwgZXJyb3IpIHsKCQl2YXIgcmF3IHR4LlR4UmF3CgoJCS8vIHJlamVjdCBhbGwgdW5rbm93biBwcm90byBmaWVsZHMgaW4gdGhlIHJvb3QgVHhSYXcKCQllcnIgOj0gdW5rbm93bnByb3RvLlJlamVjdFVua25vd25GaWVsZHNTdHJpY3QodHhCeXRlcywgJmFtcDtyYXcpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJUeERlY29kZSwgZXJyLkVycm9yKCkpCgkJfQoKCQllcnIgPSBjZGMuVW5tYXJzaGFsQmluYXJ5QmFyZSh0eEJ5dGVzLCAmYW1wO3JhdykKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgZXJyCgkJfQoKCQl2YXIgYm9keSB0eC5UeEJvZHkKCgkJLy8gYWxsb3cgbm9uLWNyaXRpY2FsIHVua25vd24gZmllbGRzIGluIFR4Qm9keQoJCXR4Qm9keUhhc1Vua25vd25Ob25Dcml0aWNhbHMsIGVyciA6PSB1bmtub3ducHJvdG8uUmVqZWN0VW5rbm93bkZpZWxkcyhyYXcuQm9keUJ5dGVzLCAmYW1wO2JvZHksIHRydWUpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJUeERlY29kZSwgZXJyLkVycm9yKCkpCgkJfQoKCQllcnIgPSBjZGMuVW5tYXJzaGFsQmluYXJ5QmFyZShyYXcuQm9keUJ5dGVzLCAmYW1wO2JvZHkpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJUeERlY29kZSwgZXJyLkVycm9yKCkpCgkJfQoKCQl2YXIgYXV0aEluZm8gdHguQXV0aEluZm8KCgkJLy8gcmVqZWN0IGFsbCB1bmtub3duIHByb3RvIGZpZWxkcyBpbiBBdXRoSW5mbwoJCWVyciA9IHVua25vd25wcm90by5SZWplY3RVbmtub3duRmllbGRzU3RyaWN0KHJhdy5BdXRoSW5mb0J5dGVzLCAmYW1wO2F1dGhJbmZvKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJZXJyID0gY2RjLlVubWFyc2hhbEJpbmFyeUJhcmUocmF3LkF1dGhJbmZvQnl0ZXMsICZhbXA7YXV0aEluZm8pCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwKHNka2Vycm9ycy5FcnJUeERlY29kZSwgZXJyLkVycm9yKCkpCgkJfQoKCQl0aGVUeCA6PSAmYW1wO3R4LlR4ewoJCQlCb2R5OiAgICAgICAmYW1wO2JvZHksCgkJCUF1dGhJbmZvOiAgICZhbXA7YXV0aEluZm8sCgkJCVNpZ25hdHVyZXM6IHJhdy5TaWduYXR1cmVzLAoJCX0KCgkJcGtzLCBlcnIgOj0gZXh0cmFjdFB1YktleXModGhlVHgsIGtleUNvZGVjKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJcmV0dXJuICZhbXA7YnVpbGRlcnsKCQkJdHg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlVHgsCgkJCWJvZHlCejogICAgICAgICAgICAgICAgICAgICAgIHJhdy5Cb2R5Qnl0ZXMsCgkJCWF1dGhJbmZvQno6ICAgICAgICAgICAgICAgICAgIHJhdy5BdXRoSW5mb0J5dGVzLAoJCQlwdWJLZXlzOiAgICAgICAgICAgICAgICAgICAgICBwa3MsCgkJCXB1YmtleUNvZGVjOiAgICAgICAgICAgICAgICAgIGtleUNvZGVjLAoJCQl0eEJvZHlIYXNVbmtub3duTm9uQ3JpdGljYWxzOiB0eEJvZHlIYXNVbmtub3duTm9uQ3JpdGljYWxzLAoJCX0sIG5pbAoJfQp9CgovLyBEZWZhdWx0VHhEZWNvZGVyIHJldHVybnMgYSBkZWZhdWx0IHByb3RvYnVmIEpTT04gVHhEZWNvZGVyIHVzaW5nIHRoZSBwcm92aWRlZCBNYXJzaGFsZXIgYW5kIFB1YmxpY0tleUNvZGVjCmZ1bmMgRGVmYXVsdEpTT05UeERlY29kZXIoY2RjICpjb2RlYy5Qcm90b0NvZGVjLCBrZXlDb2RlYyBjcnlwdG90eXBlcy5QdWJsaWNLZXlDb2RlYykgc2RrLlR4RGVjb2RlciB7CglyZXR1cm4gZnVuYyh0eEJ5dGVzIFtdYnl0ZSkgKHNkay5UeCwgZXJyb3IpIHsKCQl2YXIgdGhlVHggdHguVHgKCQllcnIgOj0gY2RjLlVubWFyc2hhbEpTT04odHhCeXRlcywgJmFtcDt0aGVUeCkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXAoc2RrZXJyb3JzLkVyclR4RGVjb2RlLCBlcnIuRXJyb3IoKSkKCQl9CgoJCXBrcywgZXJyIDo9IGV4dHJhY3RQdWJLZXlzKCZhbXA7dGhlVHgsIGtleUNvZGVjKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBzZGtlcnJvcnMuV3JhcChzZGtlcnJvcnMuRXJyVHhEZWNvZGUsIGVyci5FcnJvcigpKQoJCX0KCgkJcmV0dXJuICZhbXA7YnVpbGRlcnsKCQkJdHg6ICAgICAgICAgICZhbXA7dGhlVHgsCgkJCXB1YktleXM6ICAgICBwa3MsCgkJCXB1YmtleUNvZGVjOiBrZXlDb2RlYywKCQl9LCBuaWwKCX0KfQoKZnVuYyBleHRyYWN0UHViS2V5cyh0eCAqdHguVHgsIGtleUNvZGVjIGNyeXB0b3R5cGVzLlB1YmxpY0tleUNvZGVjKSAoW11jcnlwdG8uUHViS2V5LCBlcnJvcikgewoJaWYgdHguQXV0aEluZm8gPT0gbmlsIHsKCQlyZXR1cm4gW11jcnlwdG8uUHViS2V5e30sIG5pbAoJfQoKCXNpZ25lckluZm9zIDo9IHR4LkF1dGhJbmZvLlNpZ25lckluZm9zCglwa3MgOj0gbWFrZShbXWNyeXB0by5QdWJLZXksIGxlbihzaWduZXJJbmZvcykpCglmb3IgaSwgc2kgOj0gcmFuZ2Ugc2lnbmVySW5mb3MgewoJCXBrLCBlcnIgOj0ga2V5Q29kZWMuRGVjb2RlKHNpLlB1YmxpY0tleSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmV0dXJuIG5pbCwgZXJyCgkJfQoJCXBrc1tpXSA9IHBrCgl9CglyZXR1cm4gcGtzLCBuaWwKfQo="}})],1),e._v(" "),t("p",[t("code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eAoKaW1wb3J0ICgKCSZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9wcm90byZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXR4dHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy90eCZxdW90OwopCgovLyBEZWZhdWx0VHhFbmNvZGVyIHJldHVybnMgYSBkZWZhdWx0IHByb3RvYnVmIFR4RW5jb2RlciB1c2luZyB0aGUgcHJvdmlkZWQgTWFyc2hhbGVyCmZ1bmMgRGVmYXVsdFR4RW5jb2RlcigpIHR5cGVzLlR4RW5jb2RlciB7CglyZXR1cm4gZnVuYyh0eCB0eXBlcy5UeCkgKFtdYnl0ZSwgZXJyb3IpIHsKCQl3cmFwcGVyLCBvayA6PSB0eC4oKmJ1aWxkZXIpCgkJaWYgIW9rIHsKCQkJcmV0dXJuIG5pbCwgZm10LkVycm9yZigmcXVvdDtleHBlY3RlZCAlVCwgZ290ICVUJnF1b3Q7LCAmYW1wO2J1aWxkZXJ7fSwgdHgpCgkJfQoKCQlyYXcgOj0gJmFtcDt0eHR5cGVzLlR4UmF3ewoJCQlCb2R5Qnl0ZXM6ICAgICB3cmFwcGVyLmdldEJvZHlCeXRlcygpLAoJCQlBdXRoSW5mb0J5dGVzOiB3cmFwcGVyLmdldEF1dGhJbmZvQnl0ZXMoKSwKCQkJU2lnbmF0dXJlczogICAgd3JhcHBlci50eC5TaWduYXR1cmVzLAoJCX0KCgkJcmV0dXJuIHByb3RvLk1hcnNoYWwocmF3KQoJfQp9CgovLyBEZWZhdWx0VHhFbmNvZGVyIHJldHVybnMgYSBkZWZhdWx0IHByb3RvYnVmIEpTT04gVHhFbmNvZGVyIHVzaW5nIHRoZSBwcm92aWRlZCBNYXJzaGFsZXIKZnVuYyBEZWZhdWx0SlNPTlR4RW5jb2RlcigpIHR5cGVzLlR4RW5jb2RlciB7CglyZXR1cm4gZnVuYyh0eCB0eXBlcy5UeCkgKFtdYnl0ZSwgZXJyb3IpIHsKCQl3cmFwcGVyLCBvayA6PSB0eC4oKmJ1aWxkZXIpCgkJaWYgIW9rIHsKCQkJcmV0dXJuIG5pbCwgZm10LkVycm9yZigmcXVvdDtleHBlY3RlZCAlVCwgZ290ICVUJnF1b3Q7LCAmYW1wO2J1aWxkZXJ7fSwgdHgpCgkJfQoKCQlyZXR1cm4gY29kZWMuUHJvdG9NYXJzaGFsSlNPTih3cmFwcGVyLnR4KQoJfQp9Cg=="}})],1),e._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),t("p",{attrs:{hide:""}},[e._v("Learn about "),t("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")])],1)],1)}),[],!1,null,null,null);o.default=c.exports}}]);