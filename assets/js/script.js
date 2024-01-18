let questionTitles = document.querySelectorAll('div.question-title');
let tempQuestion = questionTitles[0];
let isOpen = true;

questionTitles.forEach((questionSelected) => {

    let questionSelectedAnswer = questionSelected.nextElementSibling;
    let questionSelectedImg = questionSelected.childNodes[3];

    questionSelected.addEventListener('click', () => {
        
        questionTitles.forEach((el) => { // we hide all the questions
            el.nextElementSibling.classList = 'answer hidden';
            el.childNodes[3].src = './assets/img/icon-plus.svg';
            el.childNodes[3].alt = 'Plus';
        });

        if (!isOpen || questionSelected !== tempQuestion) { // if this is not open OR the question selected is different than the one who's open, we can open the question selected
            questionSelectedImg.src = './assets/img/icon-minus.svg';
            questionSelectedImg.alt = 'Minus';
            questionSelectedAnswer.classList.toggle('hidden');
            isOpen = true;
        } else { // else we let all closed
            isOpen = false;
        };
        tempQuestion = questionSelected; // we change the temp to the last selected
    });
});



