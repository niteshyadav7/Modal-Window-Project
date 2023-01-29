'use strict';

const modal = document.querySelector('.modal');

const btnCloseMOdal = document.querySelector('.close-modal');

const overlay = document.querySelector('.overlay');

const btnsShowModal = document.querySelectorAll('.show-modal');
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseMOdal.addEventListener('click', close);
overlay.addEventListener('click', close);
document.addEventListener('keydown', function (e) {
  // console.log( e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) close();
});
 