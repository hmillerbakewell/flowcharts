//@ts-check
// let root = new FlowNode("Ready to start the flowchart?")

let q1 = new FlowNode("This is just a little example for now. Understand?")
let q2 = new FlowNode("Do you have a webserver?")

let e0 = new FlowNode("That's okay! Come back when you are.")
let e1 = new FlowNode("That's okay! Come back in a bit and try again.")
let e2 = new FlowNode("You don't have the infrastructure yet.")
let e3 = new FlowNode("Congratulations! There are no infrastructure issues with your strategy!")

root.link(q1, "Yes")
root.link(e0, "No")

q1.link(q2, "Yes")
q1.link(e1, "No")

q2.link(e3, "Yes")
q2.link(e2, "No")