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

$(".question").on("click", function () {
    const answer = $(this).find(".answer");
    if (answer.css("display") === "none") {
        answer.css("display", "block");
    } else {
        answer.css("display", "none");
    }
});