//const correctAnswer = document.querySelector('[data-js="correct"]')

function wrongAnswers() {
  const wrongAnswer = document.querySelector('[data-js="incorrect"]');

  wrongAnswer.addEventListener('click', () => {
    wrongAnswer.classList.add('card__answer-button--incorrect');
  });
}

export default wrongAnswers;

// corretAnswer.addEventListener('click', () => {
// correctAnswer.classList.add('card__answer-button--correct');
