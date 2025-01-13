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
        // if you were to remove a specific class removeClass("remove this single class name")
        // To remove the whole thing you use removeClass()
        $(this).find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
    } else {
        answer.css("display", "none");
        $(this).find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
    }
});

$(window).on('scroll', function () {
    // Get the .slide-in element
    const $slideInElement = $('.featuredProduct');
    
    // offset top will get the distance between the top edge of the element
    // and the top edge of the entire document 
    const elementTop = $slideInElement.offset().top;
    const windowBottom = $(window).scrollTop() + $(window).height();

    // If the element is visible in the viewport, add the 'visible' class
    if(elementTop < windowBottom - 50) { // Adjust offset for better trigger
        $slideInElement.addClass('visible');
    }
});
