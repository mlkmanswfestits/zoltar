var answers = [
  'Maybe not.', 'Certainly, I am sure of it.', 'It will never be so.', 'Yes!Yes!Yes!', 'It can never be.',
  'It is for sure.', 'Never!', 'Ask Zoltar again later.', 'It is unclear now.',
  'Sorry, it is not so.', 'The future is unclear.',
  'The future looks good!.', 'I would rather not say.', 'Do you really want to know?',
  'Possibly.', 'Perhaps', 'Do not count on it.', 'Yes, it is for sure'];

document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};
