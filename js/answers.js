function answers() {
  const wrongAnswer = document.querySelectorAll('[data-js=incorrect]');
  const correctAnswer = document.querySelector('[data-js="correct"]');

  wrongAnswer.forEach(answer => {
    answer.addEventListener('click', () => {
      wrongAnswer.classList.add('card__answer-button--incorrect');
    });
  });

  correctAnswer.forEach(answer => {
    answer.addEventListener('click', () => {
      correctAnswer.classList.add('card__answer-button--correct');
    });
  });
}

export default answers;
