//@ts-check
// let root = new FlowNode("Ready to start the flowchart?")

let lookup = {
    "PAAB Legislation": "The governing body regulating healthcare marketing materials in Canada"
}

let q1 = new FlowNode("Are the materials destined only for the manufracturer's employees/agents AND comprised of content appropriate for those intended individuals?")
let q2 = new FlowNode("Is it a personal (person-to-person) correspondence?")
let q3 = new FlowNode("Are the materials used only in response to an unsolicited request?")
let q4 = new FlowNode("Is there discussion of drug therapy or content relating to drug therapy?")
let q5 = new FlowNode("Are the materials independently created? Alternatively, is it published original research or consensus guidelines? Note: Distributed as a whole. Not excerpted or edited.")
let q6 = new FlowNode("Did funding come with the ability to influence the content or any aspect relating to how the materials are created?")
let q7 = new FlowNode("Is the content created by a public or member-funded institution/association? Alternatively, is approval obtained from a bonafide accrediting institution for content AND method of distribution/dissemination?")
let q8 = new FlowNode("Would competitors likely be willing to sponsor these materials? Would a reasonable HCP be able to identify the sponsor without reading the transparency disclaimers?")
let q9 = new FlowNode("Do distribution/availability factors make it subject to the advertising regulations?")
let q10 = new FlowNode("No PAAB review required.")
let q11 = new FlowNode("Internal training tools for employees, materials for advisory board meetings, materials for consultant meetings and materials for market research which are all aligned with the R&D code.")
let q12 = new FlowNode("No PAAB review required. Product information provided to an individual by a pharmaceutical manufacturer in response to a RFI that has not been solicited in any way is not considered to be advertising for the sales of a drug. Formulary kits prepared for review by formulary committees are exempt from PAAB preclearence provided that the content contained therein follows the committee's submission policy. Where no formal policy exists, the materials are exempt provided the information is limited to that which would normally be required to support such an application. In such cases, the 'request' for the infrmation is implicit. Note that PAAB has received complaints from such committees about unrequested promotion that should have been PAABed.")
let q13 = new FlowNode("No PAAB review required (irrespective of distribution/availability factors). Nonetheless, distribution/availability factors may cause the materials to be subject to the federal advertising regulations. E.g. Linking to product advertising.")
let q14 = new FlowNode("Examples of 'influence' include control or input on content, speakers, specific topic, audience, frequency. For press-releases, this also includes methods to influence the pick-up, placement or emphasis, given in subsequesnt publications within medical media. CME, scientific symposia and exhibits that conform to the Health Canada policy document 'The Distinction Between Advertising and Other Activities' for being non-promotional do not require PAAB preclearence.")
let q15 = new FlowNode("PAAB review required unless limited to claims in PAAB s6.6(d).")
let q16 = new FlowNode("No PAAB review required (irrespective of distribution/availability factors provided they are approved by the relevant body). Nonetheless, distribution/availability factors may cause the materials to be subject to the federal advertising regulations. E.g. linking to product advertising.")
let q17 = new FlowNode("PAAB review required.")
let q18 = new FlowNode("Sponsored journal supplements/inserys that conform to the Health Canada policy document 'The Distinction Between Advertising and Other Activities' criteria for being non-promotional do not require PAAB preclearence.")
let q19 = new FlowNode("PAAB review required with the exception of clinical trial investigator recuitment announcement which meets the non-advertising provisions outlined in the Health Canada policy document 'The Distinction Between Advertising and Other Activities'.")
let q20 = new FlowNode("A use for drug rep detailing, linkage to product advertising, or frequency/duration of distribution/availability.")
let q21 = new FlowNode("No PAAB review required.")
let q22 = new FlowNode("That's it! Go forth and seek review (or not, as the case may be).")

root.link(q1, "Yes")
root.link(q23, "No")

q1.link(q10, "Yes")
q1.link(q2, "No")
q1.link(q11, "Can you give me some examples?")

q2.link(q12, "Yes")
q2.link(q3, "No")

q3.link(q10, "Yes")
q3.link(q4, "No")

q4.link(q5, "Yes")
q4.link(q13, "No")

q5.link(q13, "Yes")
q5.link(q6, "No")

q6.link(q15, "Yes")
q6.link(q7, "No")
q6.link(q14, "Can I have some examples of 'influence'?")

q7.link(q16, "Yes")
q7.link(q8, "No")

q8.link(q9, "Yes and No respectively")
q8.link(q17, "No and Yes respectively")
q8.link(q18, "Can I have some more information?")

q9.link(q19, "Yes")
q9.link(q21, "No")
q9.link(q20,"Can I have some examples?")

//Creating loops for example statements

q11.link(q1, "Okay")

q14.link(q6, "Got it")

q18.link(q8, "Okay")

q19.link(q9, "Okay")

// Linking to terminal node q22

q19.link(q22, "Okay, got it.")
q21.link(q22, "Okay, got it.")
