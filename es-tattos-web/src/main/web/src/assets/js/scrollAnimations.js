window.onload = function() {};
window.onscroll = function() {
  var scrollPosY = window.scrollY;

  var quiensomosimg = document.getElementById('quiensomos-img');
  var quiensomostext = document.getElementById('quiensomos-text');

  if (quiensomosimg != null && scrollPosY > quiensomosimg.getBoundingClientRect().y) {
    quiensomosimg.classList.add('block','animated','fadeInRight','slow');
  }

  if (quiensomostext != null && scrollPosY > quiensomostext.getBoundingClientRect().y) {
    quiensomostext.classList.add('block','animated','fadeInLeft','slow');
  }
};

function menu() {
  document.getElementById('menu-mobile').classList.toggle('hidden');
}
