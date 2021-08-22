const rabitBtn = document.querySelector('.rabbitBtn');
const rabit = document.querySelector('.rabbitImg');

rabitBtn.addEventListener('click', () => {
    console.log();
    rabit.scrollIntoView({behavior: 'smooth', block: 'center'});
});