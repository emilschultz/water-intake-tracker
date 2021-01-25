const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index))
});

const highlightCups = (index) => {
  smallCups.forEach((cup, index2) => {
    

    smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full') ? index-- : "";

    index2 <= index ? cup.classList.add('full') : cup.classList.remove('full')
  })}