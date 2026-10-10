(function () {
  var scene = document.querySelector('.scene'), stage = document.querySelector('.stage');
  if (!scene || !stage) return;
  function fit() { stage.style.transform = 'scale(' + scene.clientWidth / 1280 + ')'; }
  fit();
  window.addEventListener('resize', fit);
  if (window.ResizeObserver) new ResizeObserver(fit).observe(scene);
})();
