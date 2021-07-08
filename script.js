// Tombol "How to Play"
const btnHtp = document.querySelector('.rules');

btnHtp.addEventListener('click', function(e) {
    btnHtp.parentElement.nextElementSibling.nextElementSibling.style.display = 'inline-block';
    gsap.from('.trans', { duration: .7, opacity: 0 })
    btnHtp.parentElement.nextElementSibling.style.display = 'inline-block';
    gsap.from('.htp', { duration: 1, y: -100, opacity: 0, delay: .4 });
});

const btnKeluarHtp = document.querySelector('.htp .accept');

btnKeluarHtp.addEventListener('click', function() {
    btnHtp.parentElement.nextElementSibling.nextElementSibling.style.display = 'none';
    btnHtp.parentElement.nextElementSibling.style.display = 'none';
});

// Tombol Start
const btnStart = document.querySelector('.btn .start');

btnStart.addEventListener('click', function() {
    setTimeout(function() {
        btnStart.parentElement.style.display = 'none';
    }, 500); 
    gsap.to('.btn', { duration: .6, opacity: 0 });
    setTimeout(function() {
        btnStart.parentElement.previousElementSibling.style.display = 'inline-block';
        gsap.from('.player', { duration: 1, y: 50, opacity: 0 });
    }, 700);
    
    const com = Math.round(Math.random() * 5 + 1);
    console.log(com);
});
