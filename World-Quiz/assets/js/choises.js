
const BoxCulture = document.querySelector('#culture')
const BoxActu = document.querySelector('#actu')
const BoxSport = document.querySelector('#sport')
const BoxMusique = document.querySelector('#musique')
const BoxArt = document.querySelector('#art')
const BoxTv = document.querySelector('#tv')
const content = document.querySelector('.content')
const box = document.querySelectorAll('.box')
const main = document.querySelector('main')
const header = document.querySelector('header')
const h2Choix = document.querySelector('h2')
const contact = document.querySelector('.contact')

const Diffdiv = document.createElement('div')
Diffdiv.classList.add('diff')

const divChoises = document.createElement('div')
divChoises.classList.add('divChoises')
Diffdiv.appendChild(divChoises)

const Diffh3 = document.createElement('h3')
Diffh3.classList.add('diffh3')
Diffh3.textContent = 'Choississez le niveau des questions :';
Diffdiv.appendChild(Diffh3)

const niv1 = document.createElement('div')
niv1.classList.add('niv1')
niv1.classList.add('boxNiv')
divChoises.appendChild(niv1)

const pNiv1 = document.createElement('p')
pNiv1.classList.add('pNiv1')
pNiv1.textContent = 'Facile';
niv1.appendChild(pNiv1)


const niv2 = document.createElement('div')
niv2.classList.add('niv2')
niv2.classList.add('boxNiv')
divChoises.appendChild(niv2)

const pNiv2 = document.createElement('p')
pNiv2.classList.add('pNiv2')
pNiv2.textContent = 'Normal';
niv2.appendChild(pNiv2)


const niv3 = document.createElement('div')
niv3.classList.add('niv3')
niv3.classList.add('boxNiv')
divChoises.appendChild(niv3)

const pNiv3 = document.createElement('p')
pNiv3.classList.add('pNiv3')
pNiv3.textContent = 'Difficile';
niv3.appendChild(pNiv3)


let categorie = ""
let niv = ""

console.log(header)




BoxCulture.addEventListener('click', function () {

    categorie = "culture_generale"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)


})

BoxActu.addEventListener('click', function () {

    categorie = "actu_politique"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)
})

BoxSport.addEventListener('click', function () {

    categorie = "sport"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)

})

BoxMusique.addEventListener('click', function () {

    categorie = "musique"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)

})

BoxArt.addEventListener('click', function () {

    categorie = "art_litterature"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)

})

BoxTv.addEventListener('click', function () {

    categorie = "tv_cinéma"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)


})

niv1.addEventListener('click', function () {

    niv = "facile"
    header.removeChild(h2Choix)
    header.removeChild(contact)
    main.removeChild(Diffdiv)
    changeText()

})

niv2.addEventListener('click', function () {

    niv = "normal"
    header.removeChild(h2Choix)
    header.removeChild(contact)
    main.removeChild(Diffdiv)
    changeText()

})

niv3.addEventListener('click', function () {

    niv = "difficile"
    header.removeChild(h2Choix)
    header.removeChild(contact)
    main.removeChild(Diffdiv)
    changeText()

})



function changeText() {

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    console.log("=====")
    console.log(categorie)
    console.log("=====")
    console.log(niv)
    console.log("=====")

    // https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=5&category=culture_generale&difficulty=facile

    fetch(`https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=5&category=${categorie}&difficulty=${niv}`)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result)

            const numberOfQuestions = result.count
            const questions = result.quizzes

            const question = document.createElement('h3')
            question.classList.add('question')

            const categorie = document.createElement('p')
            categorie.classList.add('categorie')

            const niveau = document.createElement('p')
            niveau.classList.add('niveau')


            const firstQuestion = questions[0]

            const answers = [firstQuestion.answer, ...firstQuestion.badAnswers]
            shuffle(answers)

            console.log(firstQuestion)
            console.log(answers)

            const divAnswer = document.createElement('div')
            divAnswer.classList.add('divAnswer')

            const divAnswers = document.createElement('div')
            divAnswers.classList.add('divAnswers')

            const pAnswer = document.createElement('p')
            pAnswer.classList.add('pAnswer')
            pAnswer.textContent = answers


            main.appendChild(divAnswers)
            divAnswers.appendChild(divAnswer)
            divAnswer.appendChild(pAnswer)






            header.appendChild(question)
            header.appendChild(categorie)
            header.appendChild(niveau)

            // for (let i = 0; i < numberOfQuestions; i++) {

            //     console.log(questions[i])

            //     const divAnswer = document.createElement('div')
            //     divAnswer.classList.add('divAnswer')


            //     const pAnswer = document.createElement('p')
            //     pAnswer.classList.add('pAnswer')


            //     main.appendChild(divAnswers)
            //     divAnswers.appendChild(divAnswer)
            //     divAnswer.appendChild(pAnswer)
            // }



            // for (let i = 0; i < 10; i++) {
            //     question.textContent = `Question : ${result.quizzes[i].question}`;
            //     question.style = "width: 40%";
            //     categorie.innerHTML = `Catégorie : ${result.quizzes[i].category}`;
            //     niveau.innerHTML = ` Difficulté : ${result.quizzes[i].difficulty}`;

            //     const answers = [result.quizzes[0].answer, ...result.quizzes[0].badAnswers]
            //     shuffle(answers)

            //     pAnswer.textContent = ` A : ${answers[0]}`
            //     pAnswer.textContent = ` B : ${answers[1]}`
            //     pAnswer.textContent = ` C : ${answers[2]}`
            //     pAnswer.textContent = ` D : ${answers[3]}`

            // }







            // console.log(yes)
            // console.log(result.quizzes[0])
            // console.log(result.quizzes[0].answer)
            // console.log(result.quizzes[0].badAnswers)



        })
}