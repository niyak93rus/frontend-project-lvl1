const checkAnswer = (userAnswer, answer) => {
  if (userAnswer !== answer) {
    return false;
  }
  return true;
};

export default checkAnswer;
