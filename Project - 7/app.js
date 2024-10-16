//using selectors inside the element
// traversing the dom



const questionBtn = document.querySelectorAll(".question-btn")

questionBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});
