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
    $('html,body').animate({ scrollTop: $("#journey > .question").last().offset().top + 100 }, animationSpeed);
}

/**
 * 
 * @param {FlowNode} node 
 * @param {string} answer
 */
let nextStep = function (node, answer) {

    let addNewAnswers = function () {
        if (!answer) {
            $("#options").empty()
            for (let a in node.children) {
                $("#options").append(
                    $("<div>").addClass("answers")
                        .html(a)
                        .click(
                            function () { pickAnswer(node, a) }
                        )
                )
            }
        } else {
            $("#journey").append(
                $("<div>").addClass("answered").html(answer)
            )
        }
        scrollToLast()
        $("#options").hide().fadeIn(200, scrollToLast)
    }


    $("#journey").append(
        $("<div>").addClass("question").html(node.name).show().css("opacity", 0.01).fadeTo(animationSpeed, 1, addNewAnswers)
    )
}

/**
 * 
 * @param {FlowNode} node
 * @param {string} answer 
 */
let pickAnswer = function (node, answer) {
    scrollToLast()
    let addNextStep = function () {
        nextStep(node.children[answer], null)
    }
    $("#options").fadeOut(animationSpeed, function () {
        $("#journey").append(
            $("<div>").hide().fadeIn(animationSpeed, addNextStep
            ).addClass("answered").text(answer)
        )
    })
}

/**
 * 
 * @param {string} phrase 
 */
let showDefinition = function (phrase) {
    let longVersion = lookup[phrase]
    $("#lookup").show()
    $("#lookup > #title").text(phrase)
    $("#lookup > #body").text(longVersion)
}

let hideDefintion = function() {
    $("#lookup").hide()
}