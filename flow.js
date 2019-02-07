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


let root = new FlowNode("Ready to start the flowchart?")

/**
 * 
 * @param {object[]} journey 
 */
let displayJourney = function (journey) {
    $("#journey").empty().hide().fadeIn(200)
    $("#options").empty().hide().fadeIn(200)

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
    $('html,body').animate({ scrollTop: $("#journey > .question").last().offset().top }, 'slow');
}

/**
 * 
 * @param {FlowNode} node 
 * @param {string} answer
 */
let nextStep = function (node, answer) {
    $("#journey").append(
        $("<div>").addClass("question").text(node.name).css("opacity", 0.1).fadeTo(200, 1)
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
    $("#options").fadeOut(100, function () {
        $("#journey").append(
            $("<div>").hide().fadeIn(200).addClass("answered").text(answer)
        )
        nextStep(node.children[answer], null)
    })
}