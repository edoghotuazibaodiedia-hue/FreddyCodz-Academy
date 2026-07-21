const questions = document.querySelectorAll(".questions")

questions.forEach(function(question){
    question.addEventListener("click", function(){

        question.classList.toggle("active");

        const arrow = question.querySelector(".arrow");

        arrow.classList.toggle("rotate");
    });
});