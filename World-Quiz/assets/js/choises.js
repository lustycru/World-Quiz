
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
Diffh3.textContent = 'Choissez le niveau des questions :';
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



console.log(header)




BoxCulture.addEventListener('click', function () {

    const categorie = "culture_generale"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)
    

})

BoxActu.addEventListener('click', function () {

    const categorie = "actu_politique"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)
})

BoxSport.addEventListener('click', function () {

    const categorie = "sport"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)

})

BoxMusique.addEventListener('click', function () {

    const categorie = "musique"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)

})

BoxArt.addEventListener('click', function () {

    const categorie = "art_litterature"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)

})

BoxTv.addEventListener('click', function () {

    const categorie = "tv_cinéma"
    console.log(categorie)
    main.removeChild(content)
    main.appendChild(Diffdiv)
    

})

niv1.addEventListener('click', function () {

    const niv = "facile"
    header.removeChild(h2Choix)
    header.removeChild(contact)

})

niv2.addEventListener('click', function () {

    const niv = "normal"
    header.removeChild(h2Choix)
    header.removeChild(contact)

})

niv3.addEventListener('click', function () {

    const niv3 = "difficile"
    header.removeChild(h2Choix)
    header.removeChild(contact)
    

})