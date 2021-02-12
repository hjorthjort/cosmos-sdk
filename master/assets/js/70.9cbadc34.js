(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{854:function(e,a,i){"use strict";i.r(a);var l=i(1),t=Object(l.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"adr-007-specialization-groups"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adr-007-specialization-groups"}},[e._v("#")]),e._v(" ADR 007: Specialization Groups")]),e._v(" "),i("h2",{attrs:{id:"changelog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),i("ul",[i("li",[e._v("2019 Jul 31: Initial Draft")])]),e._v(" "),i("h2",{attrs:{id:"context"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),i("p",[e._v('This idea was first conceived of in order to fulfill the use case of the\ncreation of a decentralized Computer Emergency Response Team (dCERT), whose\nmembers would be elected by a governing community and would fulfill the role of\ncoordinating the community under emergency situations. This thinking\ncan be further abstracted into the conception of "blockchain specialization\ngroups".')]),e._v(" "),i("p",[e._v("The creation of these groups are the beginning of specialization capabilities\nwithin a wider blockchain community which could be used to enable a certain\nlevel of delegated responsibilities. Examples of specialization which could be\nbeneficial to a blockchain community include: code auditing, emergency response,\ncode development etc. This type of community organization paves the way for\nindividual stakeholders to delegate votes by issue type, if in the future\ngovernance proposals include a field for issue type.")]),e._v(" "),i("h2",{attrs:{id:"decision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),i("p",[e._v("A specialization group can be broadly broken down into the following functions\n(herein containing examples):")]),e._v(" "),i("ul",[i("li",[e._v("Membership Admittance")]),e._v(" "),i("li",[e._v("Membership Acceptance")]),e._v(" "),i("li",[e._v("Membership Revocation\n"),i("ul",[i("li",[e._v("(probably) Without Penalty\n"),i("ul",[i("li",[e._v("member steps down (self-Revocation)")]),e._v(" "),i("li",[e._v("replaced by new member from governance")])])]),e._v(" "),i("li",[e._v("(probably) With Penalty\n"),i("ul",[i("li",[e._v("due to breach of soft-agreement (determined through governance)")]),e._v(" "),i("li",[e._v("due to breach of hard-agreement (determined by code)")])])])])]),e._v(" "),i("li",[e._v("Execution of Duties\n"),i("ul",[i("li",[e._v("Special transactions which only execute for members of a specialization\ngroup (for example, dCERT members voting to turn off transaction routes in\nan emergency scenario)")])])]),e._v(" "),i("li",[e._v("Compensation\n"),i("ul",[i("li",[e._v("Group compensation (further distribution decided by the specialization group)")]),e._v(" "),i("li",[e._v("Individual compensation for all constituents of a group from the\ngreater community")])])])]),e._v(" "),i("p",[e._v("Membership admittance to a specialization group could take place over a wide\nvariety of mechanisms. The most obvious example is through a general vote among\nthe entire community, however in certain systems a community may want to allow\nthe members already in a specialization group to internally elect new members,\nor maybe the community may assign a permission to a particular specialization\ngroup to appoint members to other 3rd party groups. The sky is really the limit\nas to how membership admittance can be structured. We attempt to capture\nsome of these possiblities in a common interface dubbed the "),i("code",[e._v("Electionator")]),e._v(". For\nits initial implementation as a part of this ADR we recommend that the general\nelection abstraction ("),i("code",[e._v("Electionator")]),e._v(") is provided as well as a basic\nimplementation of that abstraction which allows for a continuous election of\nmembers of a specialization group.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:" golang",base64:"Ly8gVGhlIEVsZWN0aW9uYXRvciBhYnN0cmFjdGlvbiBjb3ZlcnMgdGhlIGNvbmNlcHQgc3BhY2UgZm9yIAovLyBhIHdpZGUgdmFyaWV0eSBvZiBlbGVjdGlvbiBraW5kcy4gIAp0eXBlIEVsZWN0aW9uYXRvciBpbnRlcmZhY2UgewogICAgCiAgICAvLyBpcyB0aGUgZWxlY3Rpb24gb2JqZWN0IGFjY2VwdGluZyB2b3Rlcy4KICAgIEFjdGl2ZSgpIGJvb2wgCgogICAgLy8gZnVuY3Rpb25hbGl0eSB0byBleGVjdXRlIGZvciB3aGVuIGEgdm90ZSBpcyBjYXN0IGluIHRoaXMgZWxlY3Rpb24sIGhlcmUKICAgIC8vIHRoZSB2b3RlIGZpZWxkIGlzIGFudGljaXBhdGVkIHRvIGJlIG1hcnNoYWxsZWQgaW50byBhIHZvdGUgdHlwZSB1c2VkIAogICAgLy8gYnkgYW4gZWxlY3Rpb24uIAogICAgLy8gCiAgICAvLyBOT1RFIFRoZXJlIGFyZSBubyBleHBsaWNpdCBpZHMgaGVyZS4gSnVzdCB2b3RlcyB3aGljaCBwZXJ0YWluIHNwZWNpZmljYWxseQogICAgLy8gdG8gb25lIGVsZWN0aW9uYXRvci4gQW55b25lIGNhbiBjcmVhdGUgYW5kIHNlbmQgYSB2b3RlIHRvIHRoZSBlbGVjdGlvbmF0b3IgaXRlbQogICAgLy8gd2hpY2ggd2lsbCBwcmVzdW1hYmx5IGF0dGVtcHQgdG8gbWFyc2hhbCB0aG9zZSBieXRlcyBpbnRvIGEgcGFydGljdWxhciBzdHJ1Y3QKICAgIC8vIGFuZCBhcHBseSB0aGUgdm90ZSBpbmZvcm1hdGlvbiBpbiBzb21lIGFyYml0cmFyeSB3YXkuIFRoZXJlIGNhbiBiZSBtdWx0aXBsZQogICAgLy8gRWxlY3Rpb25hdG9ycyB3aXRoaW4gdGhlIENvc21vcy1IdWIgZm9yIG11bHRpcGxlIHNwZWNpYWxpemF0aW9uIGdyb3Vwcywgdm90ZXMKICAgIC8vIHdvdWxkIG5lZWQgdG8gYmUgcm91dGVkIHRvIHRoZSBFbGVjdGlvbmF0b3IgdXBzdHJlYW0gb2YgaGVyZS4KICAgIFZvdGUoYWRkciBzZGsuQWNjQWRkcmVzcywgdm90ZSBbXWJ5dGUpIAoKICAgIC8vIGhlcmUgbGllcyBhbGwgZnVuY3Rpb25hbGl0eSB0byBhdXRoZW50aWNhdGUgYW5kIGV4ZWN1dGUgY2hhbmdlcyBmb3IKICAgIC8vIHdoZW4gYSBtZW1iZXIgYWNjZXB0cyBiZWluZyBlbGVjdGVkCiAgICBBY2NlcHRFbGVjdGlvbihzZGsuQWNjQWRkcmVzcykgCgogICAgLy8gUmVnaXN0ZXIgYSByZXZva2VyIG9iamVjdAogICAgUmVnaXN0ZXJSZXZva2VyKFJldm9rZXIpCgogICAgLy8gTm8gbW9yZSByZXZva2VycyBtYXkgYmUgcmVnaXN0ZXJlZCBhZnRlciB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZAogICAgU2VhbFJldm9rZXJzKCkKCiAgICAvLyByZWdpc3RlciBob29rcyB0byBjYWxsIHdoZW4gYW4gZWxlY3Rpb24gYWN0aW9ucyBvY2N1cgogICAgUmVnaXN0ZXJIb29rcyhFbGVjdGlvbmF0b3JIb29rcykgCgogICAgLy8gcXVlcnkgZm9yIHRoZSBjdXJyZW50IHdpbm5lcihzKSBvZiB0aGlzIGVsZWN0aW9uIGJhc2VkIG9uIGFyYml0cmFyeQogICAgLy8gZWxlY3Rpb24gcnVsZXNldAogICAgUXVlcnlFbGVjdGVkKCkgW11zZGsuQWNjQWRkcmVzcyAKCiAgICAvLyBxdWVyeSBtZXRhZGF0YSBmb3IgYW4gYWRkcmVzcyBpbiB0aGUgZWxlY3Rpb24gdGhpcyAKICAgIC8vIGNvdWxkIGluY2x1ZGUgZm9yIGV4YW1wbGUgcG9zaXRpb24gdGhhdCBhbiBhZGRyZXNzCiAgICAvLyBpcyBiZWluZyBlbGVjdGVkIGZvciB3aXRoaW4gYSBncm91cCAgIAogICAgLy8gCiAgICAvLyB0aGlzIG1ldGFkYXRhIG1heSBiZSBkaXJlY3RseSByZWxhdGVkIHRvIAogICAgLy8gdm90aW5nIGluZm9ybWF0aW9uIGFuZC9vciBwcml2aWxlZ2VzIGVuYWJsZWQKICAgIC8vIHRvIG1lbWJlcnMgd2l0aGluIGEgZ3JvdXAuIAogICAgUXVlcnlNZXRhZGF0YShzZGsuQWNjQWRkcmVzcykgW11ieXRlCn0KCi8vIEVsZWN0aW9uYXRvckhvb2tzLCBvbmNlIHJlZ2lzdGVyZWQgd2l0aCBhbiBFbGVjdGlvbmF0b3IsIAovLyB0cmlnZ2VyIGV4ZWN1dGlvbiBvZiByZWxldmFudCBpbnRlcmZhY2UgZnVuY3Rpb25zIHdoZW4gCi8vIEVsZWN0aW9uYXRvciBldmVudHMgb2NjdXIuIAp0eXBlIEVsZWN0aW9uYXRvckhvb2tzIGludGVyZmFjZSB7CiAgICBBZnRlclZvdGVDYXN0KGFkZHIgc2RrLkFjY0FkZHJlc3MsIHZvdGUgW11ieXRlKQogICAgQWZ0ZXJNZW1iZXJBY2NlcHRlZChhZGRyIHNkay5BY2NBZGRyZXNzKQogICAgQWZ0ZXJNZW1iZXJSZXZva2VkKGFkZHIgc2RrLkFjY0FkZHJlc3MsIGNhdXNlIFtdYnl0ZSkKfQoKLy8gUmV2b2tlciBkZWZpbmVzIHRoZSBmdW5jdGlvbiByZXF1aXJlZCBmb3IgYSBtZW1iZXJzaGlwIHJldm9jYXRpb24gcnVsZS1zZXQKLy8gdXNlZCBieSBhIHNwZWNpYWxpemF0aW9uIGdyb3VwLiBUaGlzIGNvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIHNlbGYgcmV2b2tpbmcsCi8vIGFuZCBldmlkZW5jZSBiYXNlZCByZXZva2luZywgZXRjLiBSZXZva2VycyB0eXBlcyBtYXkgYmUgY3JlYXRlZCBhbmQKLy8gcmV1c2VkIGZvciBkaWZmZXJlbnQgZWxlY3Rpb24gdHlwZXMuIAovLyAKLy8gV2hlbiByZXZva2luZyB0aGUgJnF1b3Q7Y2F1c2UmcXVvdDsgYnl0ZXMgbWF5IGJlIGFyYml0cmFyaWx5IG1hcnNoYWxsZWQgaW50byBldmlkZW5jZSwKLy8gbWVtb3MsIGV0Yy4KdHlwZSBSZXZva2VyIGludGVyZmFjZSB7CiAgICBSZXZva2VOYW1lKCkgc3RyaW5nICAgICAgLy8gaWRlbnRpZmllciBmb3IgdGhpcyByZXZva2VyIHR5cGUgCiAgICBSZXZva2VNZW1iZXIoYWRkciBzZGsuQWNjQWRkcmVzcywgY2F1c2UgW11ieXRlKSBlcnJvcgp9Cg=="}}),e._v(" "),i("p",[e._v("Certain level of commonality likely exists between the existing code within\n"),i("code",[e._v("x/governance")]),e._v(" and required functionality of elections. This common\nfunctionality should be abstracted during implementation. Similarly for each\nvote implementation client CLI/REST functionality should be abstracted\nto be reused for multiple elections.")]),e._v(" "),i("p",[e._v("The specialization group abstraction firstly extends the "),i("code",[e._v("Electionator")]),e._v("\nbut also further defines traits of the group.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:" golang",base64:"dHlwZSBTcGVjaWFsaXphdGlvbkdyb3VwIGludGVyZmFjZSB7CiAgICBFbGVjdGlvbmF0b3IgCiAgICBHZXROYW1lKCkgc3RyaW5nCiAgICBHZXREZXNjcmlwdGlvbigpIHN0cmluZyAKCiAgICAvLyBnZW5lcmFsIHNvZnQgY29udHJhY3QgdGhlIGdyb3VwIGlzIGV4cGVjdGVkCiAgICAvLyB0byBmdWxmaWxsIHdpdGggdGhlIGdyZWF0ZXIgY29tbXVuaXR5CiAgICBHZXRDb250cmFjdCgpIHN0cmluZwoKICAgIC8vIG1lc3NhZ2VzIHdoaWNoIGNhbiBiZSBleGVjdXRlZCBieSB0aGUgbWVtYmVycyBvZiB0aGUgZ3JvdXAKICAgIEhhbmRsZXIoY3R4IHNkay5Db250ZXh0LCBtc2cgc2RrLk1zZykgc2RrLlJlc3VsdAoKICAgIC8vIGxvZ2ljIHRvIGJlIGV4ZWN1dGVkIGF0IGVuZGJsb2NrLCB0aGlzIG1heSBmb3IgaW5zdGFuY2UKICAgIC8vIGluY2x1ZGUgcGF5bWVudCBvZiBhIHN0aXBlbmQgdG8gdGhlIGdyb3VwIG1lbWJlcnMKICAgIC8vIGZvciBwYXJ0aWNpcGF0aW9uIGluIHRoZSBzZWN1cml0eSBncm91cC4gICAKICAgIEVuZEJsb2NrZXIoY3R4IHNkay5Db250ZXh0KQp9Cg=="}}),e._v(" "),i("h2",{attrs:{id:"status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),i("blockquote",[i("p",[e._v("Proposed")])]),e._v(" "),i("h2",{attrs:{id:"consequences"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),i("h3",{attrs:{id:"positive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),i("ul",[i("li",[e._v("increases specialization capabilities of a blockchain")]),e._v(" "),i("li",[e._v("improve abstractions in "),i("code",[e._v("x/gov/")]),e._v(" such that they can be used with specialization groups")])]),e._v(" "),i("h3",{attrs:{id:"negative"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),i("ul",[i("li",[e._v("could be used to increase centralization within a community")])]),e._v(" "),i("h3",{attrs:{id:"neutral"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("ul",[i("li",[e._v("(dCERT ADR)[./adr-008-dCERT-group.md]")])])],1)}),[],!1,null,null,null);a.default=t.exports}}]);