document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.btn');
  const box = document.querySelector('.box');

  btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    box.classList.toggle('open');
  });

  // Facebook Icon Click
  const facebook = document.querySelector('.fa-facebook');
  facebook.addEventListener('click', function (e) {
    e.stopPropagation();
    window.open('https://www.facebook.com/share/1MkoHiV8H3/', '_blank');
  });

  // GitHub Icon Click
  const github = document.querySelector('.fa-github');
  github.addEventListener('click', function (e) {
    e.stopPropagation();
    window.open('https://github.com/deena29', '_blank');
  });

  // Instagram Icon Click
  const instagram = document.querySelector('.fa-instagram');
  if (instagram) {
    instagram.addEventListener('click', function (e) {
      e.stopPropagation();
      window.open('https://www.instagram.com/deena_bliss?igsh=MWI5dzdkMjUyajhqcA==', '_blank');
    });
  }
});
