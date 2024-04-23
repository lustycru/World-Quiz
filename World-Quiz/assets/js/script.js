const randomCateg = document.querySelector('.bandeau a')

document.querySelector(".scroll-snap").addEventListener("wheel", (event) => {
  event.preventDefault();
  document.querySelector(".scroll-snap").scrollLeft += event.deltaY;
});

randomCateg.addEventListener('click', function(){
  fetch(`https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=5&category=${categorie}&difficulty=${niv}`)
  .then((response) => response.json())
  .then(function (result) {
    
  })
})