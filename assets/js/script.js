document.querySelector('.scroll-snap').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector('.scroll-snap').scrollLeft += event.deltaY;
});
