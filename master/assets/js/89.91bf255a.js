(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{890:function(e,t,i){"use strict";i.r(t);var a=i(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"adr-026-ibc-client-recovery-mechanisms"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adr-026-ibc-client-recovery-mechanisms"}},[e._v("#")]),e._v(" ADR 026: IBC Client Recovery Mechanisms")]),e._v(" "),i("h2",{attrs:{id:"changelog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),i("ul",[i("li",[e._v("2020/06/23: Initial version")]),e._v(" "),i("li",[e._v("2020/08/06: Revisions per review & to reference version")]),e._v(" "),i("li",[e._v("2021/01/15: Revision to support substitute clients for unfreezing")])]),e._v(" "),i("h2",{attrs:{id:"status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),i("p",[i("em",[e._v("Accepted")])]),e._v(" "),i("h2",{attrs:{id:"context"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),i("h3",{attrs:{id:"summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),i("p",[e._v("At launch, IBC will be a novel protocol, without an experienced user-base. At the protocol layer, it is not possible to distinguish between client expiry or misbehaviour due to genuine faults (Byzantine behavior) and client expiry or misbehaviour due to user mistakes (failing to update a client, or accidentally double-signing). In the base IBC protocol and ICS 20 fungible token transfer implementation, if a client can no longer be updated, funds in that channel will be permanently locked and can no longer be transferred. To the degree that it is safe to do so, it would be preferable to provide users with a recovery mechanism which can be utilised in these exceptional cases.")]),e._v(" "),i("h3",{attrs:{id:"exceptional-cases"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#exceptional-cases"}},[e._v("#")]),e._v(" Exceptional cases")]),e._v(" "),i("p",[e._v("The state of concern is where a client associated with connection(s) and channel(s) can no longer be updated. This can happen for several reasons:")]),e._v(" "),i("ol",[i("li",[e._v("The chain which the client is following has halted and is no longer producing blocks/headers, so no updates can be made to the client")]),e._v(" "),i("li",[e._v("The chain which the client is following has continued to operate, but no relayer has submitted a new header within the unbonding period, and the client has expired\n"),i("ol",[i("li",[e._v("This could be due to real misbehaviour (intentional Byzantine behaviour) or merely a mistake by validators, but the client cannot distinguish these two cases")])])]),e._v(" "),i("li",[e._v("The chain which the client is following has experienced a misbehaviour event, and the client has been frozen & thus can no longer be updated")])]),e._v(" "),i("h3",{attrs:{id:"security-model"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#security-model"}},[e._v("#")]),e._v(" Security model")]),e._v(" "),i("p",[e._v("Two-thirds of the validator set (the quorum for governance, module participation) can already sign arbitrary data, so allowing governance to manually force-update a client with a new header after a delay period does not substantially alter the security model.")]),e._v(" "),i("h2",{attrs:{id:"decision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),i("p",[e._v("We elect not to deal with chains which have actually halted, which is necessarily Byzantine behaviour and in which case token recovery is not likely possible anyways (in-flight packets cannot be timed-out, but the relative impact of that is minor).")]),e._v(" "),i("ol",[i("li",[e._v("Require Tendermint light clients (ICS 07) to be created with the following additional flags\n"),i("ol",[i("li",[i("code",[e._v("allow_governance_override_after_expiry")]),e._v(" (boolean, default false)")])])]),e._v(" "),i("li",[e._v("Require Tendermint light clients (ICS 07) to expose the following additional internal query functions\n"),i("ol",[i("li",[i("code",[e._v("Expired() boolean")]),e._v(", which returns whether or not the client has passed the trusting period since the last update (in which case no headers can be validated)")])])]),e._v(" "),i("li",[e._v("Require Tendermint light clients (ICS 07) & solo machine clients (ICS 06) to be created with the following additional flags\n"),i("ol",[i("li",[i("code",[e._v("allow_governance_override_after_misbehaviour")]),e._v(" (boolean, default false)")])])]),e._v(" "),i("li",[e._v("Require Tendermint light clients (ICS 07) to expose the following additional state mutation functions\n"),i("ol",[i("li",[i("code",[e._v("Unfreeze()")]),e._v(", which unfreezes a light client after misbehaviour and clears any frozen height previously set")])])]),e._v(" "),i("li",[e._v("Add a new governance proposal type, "),i("code",[e._v("ClientUpdateProposal")]),e._v(", in the "),i("code",[e._v("x/ibc")]),e._v(" module\n"),i("ol",[i("li",[e._v("Extend the base "),i("code",[e._v("Proposal")]),e._v(" with two client identifiers ("),i("code",[e._v("string")]),e._v(") and an initial height ('exported.Height').")]),e._v(" "),i("li",[e._v("The first client identifier is the proposed client to be updated. This client must be either frozen or expired.")]),e._v(" "),i("li",[e._v("The second client is a substitute client. It carries all the state for the client which may be updated. It must have identitical client and chain parameters to the client which may be updated (except for latest height and frozen height). It should be continually updated during the voting period.")]),e._v(" "),i("li",[e._v("The initial height represents the starting height consensus states which will be copied from the substitute client to the frozen/expired client.")]),e._v(" "),i("li",[e._v("If this governance proposal passes, the client on trial will be updated with all the state of the substitute, if and only if:\n"),i("ol",[i("li",[i("code",[e._v("allow_governance_override_after_expiry")]),e._v(" is true and the client has expired ("),i("code",[e._v("Expired()")]),e._v(" returns true)")]),e._v(" "),i("li",[i("code",[e._v("allow_governance_override_after_misbehaviour")]),e._v(" is true and the client has been frozen ("),i("code",[e._v("Frozen()")]),e._v(" returns true)\n"),i("ol",[i("li",[e._v("In this case, additionally, the client is unfrozen by calling "),i("code",[e._v("Unfreeze()")])])])])])])])])]),e._v(" "),i("p",[e._v("Note that clients frozen due to misbehaviour must wait for the evidence to expire to avoid becoming refrozen.")]),e._v(" "),i("p",[e._v("This ADR does not address planned upgrades, which are handled separately as per the "),i("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-007-tendermint-client#upgrades",target:"_blank",rel:"noopener noreferrer"}},[e._v("specification"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"consequences"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),i("h3",{attrs:{id:"positive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),i("ul",[i("li",[e._v("Establishes a mechanism for client recovery in the case of expiry")]),e._v(" "),i("li",[e._v("Establishes a mechanism for client recovery in the case of misbehaviour")]),e._v(" "),i("li",[e._v("Clients can elect to disallow this recovery mechanism if they do not wish to allow for it")]),e._v(" "),i("li",[e._v("Constructing an ClientUpdate Proposal is as difficult as creating a new client")])]),e._v(" "),i("h3",{attrs:{id:"negative"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),i("ul",[i("li",[e._v("Additional complexity in client creation which must be understood by the user")]),e._v(" "),i("li",[e._v("Coping state of the substitute adds complexity")]),e._v(" "),i("li",[e._v("Governance participants must vote on a substitute client")])]),e._v(" "),i("h3",{attrs:{id:"neutral"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),i("p",[e._v("No neutral consequences.")]),e._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/cosmos/ics/issues/421",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prior discussion"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/cosmos/ics/issues/439",target:"_blank",rel:"noopener noreferrer"}},[e._v("Epoch number discussion"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/cosmos/ics/issues/445",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upgrade plan discussion"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);