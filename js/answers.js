function answer() {
  const wrongAnswers = document.querySelectorAll('[data-answer=incorrect]');
  const correctAnswers = document.querySelectorAll('[data-answer=correct]');

  wrongAnswers.forEach(answer => {
    answer.addEventListener('click', () => {
      wrongAnswers.classList.add('card__answer-button--incorrect');
    });
  });

  correctAnswers.forEach(answer => {
    answer.addEventListener('click', () => {
      correctAnswers.classList.add('card__answer-button--correct');
    });
  });
}

export default answer;
