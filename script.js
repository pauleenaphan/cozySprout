$(".articleCard").hover(
    function() {
        // mouse enter move btn to right a little
        $(this).find(".arrowBtn").addClass("transform translate-x-2 transition-transform duration-300");
    },
    function() {
        // mouse leave move button back 
        $(this).find(".arrowBtn").removeClass("translate-x-2").addClass("transition-transform duration-300");
    }
);

// toggles each question on the faq section with the answer
$(".questionContainer").on("click", function () {
    // we use next since answer is a sibling of question
    // we would use find if answer is a child of question
    // it is a child if it is in any descendant level
    const answer = $(this).find(".answer"); 
    if (answer.css("display") === "none") {
        answer.css("display", "block");
        // when removing a class only use the name
        console.log("we will be removing carrot")
        // if you were to have multiple classes removeClass("remove this single class name")
        // To remove the whole thing you use removeClass()
        $(this).find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
    } else {
        answer.css("display", "none");
        $(this).find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right")
    }
});