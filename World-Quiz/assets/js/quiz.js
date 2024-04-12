const apiQuestion = document.querySelector('.question-api')
const apiCategorie = document.querySelector('.categorie-api')
const apiNiv = document.querySelector('.niv-api')
const questionA = document.querySelector('.question-A')
const questionB = document.querySelector('.question-B')
const questionC = document.querySelector('.question-C')
const questionD = document.querySelector('.question-D')


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1", requestOptions)
  .then((response) => response.json())
  .then(function (result) {
    console.log(result)

    for (let i = 0; i < 10; i++) {
      apiQuestion.innerHTML = `Question : ${result.quizzes[0].question}`;
      apiQuestion.style = "width: 40%";
      apiCategorie.innerHTML = `Catégorie : ${result.quizzes[0].category}`;
      apiNiv.innerHTML = ` Difficulté : ${result.quizzes[0].difficulty}`;

      const answers = [result.quizzes[0].answer, ...result.quizzes[0].badAnswers]
      shuffle(answers)

      questionA.textContent = ` A : ${answers[0]}`
      questionB.textContent = ` B : ${answers[1]}`
      questionC.textContent = ` C : ${answers[2]}`
      questionD.textContent = ` D : ${answers[3]}`

    }





    console.log(yes)
    console.log(result.quizzes[0])
    console.log(result.quizzes[0].answer)
    console.log(result.quizzes[0].badAnswers)

  })

// quizzes[0].answer.addEventListener('click', )
