const btnHtp = document.querySelector('.rules');
const bgHtp = document.querySelector('.trans');
const kotakHtp = document.querySelector('.htp');

btnHtp.addEventListener('click', function() {
    bgHtp.style.display = 'inline-block';
    kotakHtp.style.display = 'inline-block';
    gsap.from('.htp', { duration: .5, opacity: 0 });
});

const btnKeluarHtp = document.querySelector('.htp .accept');

btnKeluarHtp.addEventListener('click', function() {
    bgHtp.style.display = 'none';
    kotakHtp.style.display = 'none';
});