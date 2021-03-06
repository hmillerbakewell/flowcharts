//@ts-check
// let root = new FlowNode("Ready to start the flowchart?")

let lookup = {
    "value exchange": "What are you offering to users, and what will they have to give you in return."
}

let q1 = new FlowNode("Do you have a defined value exchange?")
let q2 = new FlowNode("Do you know what data you need to collect?")
let q3 = new FlowNode("Is your data collection proposal legal?")
let q4 = new FlowNode("Do you have the infrastructure to store and process the data?")
let q5 = new FlowNode("Is this infrastructure propopsition legal?")
let q6 = new FlowNode("There are <a>limitations</a> on how you can store and maintain user data.")
let q7 = new FlowNode("Will processing be appropriate?")
let q8 = new FlowNode("Do you feel confident running a tooling scan?")
let q9 = new FlowNode("Infrastructure can be physical storage, data management systems, in house capabilities, webservers, and so on.")
let q10 = new FlowNode("You might need any combination of contact information, such as email address or phone number, demographic information, such as age or location, or behavioural information, such as dosage taken or prescribed.")
let q11 = new FlowNode("Do you know what data you need to collect from your user in order to offer your service succesfully?")
let q12 = new FlowNode("Construct a value exchange first, then evaluate the strategy.")
let q14 = new FlowNode("A Value Exchange is a simple proposition in which specific user data is exchanged for a given service. Can you find one?")
let q15 = new FlowNode("There are <a>specific legal purposes</a> for data collection. Is what you are suggesting covered?")
let q17 = new FlowNode("Find out what is possible, then come back.")
let q18 = new FlowNode("Great! Use this information to build a digital strategy.")
let q19 = new FlowNode("Try rephrasing your strategy so that it is clear what data you need.")
let q20 = new FlowNode("A health tracking app exchanges user information for data visualisation and prompts. A newsletter sign up request exchanges contact details for relevant news. An invitation to a survey exchanges participant information for an opportunity to be heard.")
let q21 = new FlowNode("Lawful basis is determined by local legislation. For processing under the GDPR, these include user consent, legitimate interests of the company, requirement to fill contractual obligation, legal obligation as well as requiremnt to fulfill public tasks or protect a person's vital interests. In the case of algorithm development, ensure the work is compatible with the Guildelines for Automated Decision Making (or local equivalent). If you are at all unsure, check with legal.")
let q22 = new FlowNode("Please re-evaluate your strategy and start again")
let q23 = new FlowNode("That's okay. Just come back to it when you need it.")

root.link(q1, "Yes")
root.link(q23, "No")

q1.link(q2, "Yes")
q1.link(q12, "No")
q1.link(q14, "What is a value exchange?")

q2.link(q3, "Yes")
q2.link(q19, "No")
q2.link(q11, "What do you mean?")

q3.link(q4, "Yes")
q3.link(q22, "No")
q3.link(q15, "How can I tell?")

q4.link(q5, "Yes")
q4.link(q17, "No")
q4.link(q9, "What do you mean by infrastructure?")

q5.link(q18, "Yes")
q5.link(q22, "No")
q5.link(q6, "How can I tell?")

// q6, q7, q8 more to add

q9.link(q4, "I feel confident running a tooling scan")
q9.link(q4, "I will find someone with sufficient expertise to evaluate our infrastructure")

q10.link(q2, "Got it")

q11.link(q3, "Yes")
q11.link(q10, "Can I have some examples?")

q12.link(q1, "Got it")

// q13 merged with q14

q14.link(q2, "Yes")
q14.link(q20, "Can I have some examples?")

q15.link(q4, "Yes")
q15.link(q22, "No")
q15.link(q21, "Can I have some examples?")

//q16 replaced with q22

q17.link(q4, "Okay")

// q18 is the terminal node!

q19.link(q1, "Okay")

q20.link(q1, "Got it")

q21.link(q3, "Okay")

q22.link(q1, "Okay")

q23.link(q1, "Okay, I'm ready.")
