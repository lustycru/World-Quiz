const apiQuestion = document.querySelector('.question-api')
const apiCategorie = document.querySelector('.categorie-api')
const questionA = document.querySelector('.question-A')
const questionB = document.querySelector('.question-B')
const questionC = document.querySelector('.question-C')
const questionD = document.querySelector('.question-D')



const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1", requestOptions)
    .then((response) => response.json())
    .then(function (result){
      console.log(result)
      apiQuestion.innerHTML = result.quizzes[0].question;
      apiQuestion.style = "width: 40%";
      apiCategorie.innerHTML = result.quizzes[0].category;
    })

      // quizzes[0].answer.addEventListener('click', )