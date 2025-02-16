document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            // Toggle active class
            this.classList.toggle("active");

            // Get the next sibling (faq-answer div)
            const answer = this.nextElementSibling;

            // Show or hide the answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});
