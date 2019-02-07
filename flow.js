//@ts-check
class FlowNode {
    /**
     * 
     * @param {string} name 
     */
    constructor(name) {
        this.name = name
        this.children = {}
    }
    /**
     * 
     * @param {FlowNode} node 
     * @param {string} answer 
     */
    link(node, answer) {
        this.children[answer] = node
    }
}

let animationSpeed = 400

let root = new FlowNode("Ready to start the flowchart?")

/**
 * 
 * @param {object[]} journey 
 */
let displayJourney = function (journey) {
    $("#journey").empty().hide().fadeIn(100)
    $("#options").empty().hide().fadeIn(100)

    if (!journey || journey.length == 0) {
        displayJourney([{
            node: root,
            answer: ""
        }])
        return null
    }

    for (let step of journey) {
        nextStep(step.node, step.answer)
    }


}

let scrollToLast = function () {
    $('html,body').animate({ scrollTop: $("#journey > .question").last().offset().top }, animationSpeed);
}

/**
 * 
 * @param {FlowNode} node 
 * @param {string} answer
 */
let nextStep = function (node, answer) {
    $("#journey").append(
        $("<div>").addClass("question").text(node.name).css("opacity", 0.1).fadeTo(animationSpeed, 1)
    )
    scrollToLast()
    if (!answer) {
        $("#options").empty()
        for (let a in node.children) {
            $("#options").append(
                $("<div>").addClass("answers").append(
                    $("<a>")
                        .attr("href", "#")
                        .click(
                            function () { pickAnswer(node, a) }
                        )
                        .text(a)
                )
            )
            $("#options").fadeIn(200)
        }
    } else {
        $("#journey").append(
            $("<div>").addClass("answered").text(answer)
        )
    }
}

/**
 * 
 * @param {FlowNode} node
 * @param {string} answer 
 */
let pickAnswer = function (node, answer) {
    scrollToLast()
    $("#options").fadeOut(animationSpeed, function () {
        $("#journey").append(
            $("<div>").hide().fadeIn(animationSpeed, function () {
                nextStep(node.children[answer], null)
            }
            ).addClass("answered").text(answer)
        )
    })
}