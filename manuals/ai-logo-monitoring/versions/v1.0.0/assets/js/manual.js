(() => {
  document.querySelectorAll('[data-current]').forEach(a => {
    if (a.dataset.current === document.body.dataset.page) a.classList.add('active');
  });

  const btn = document.getElementById('mobileMenu');
  if (btn) btn.onclick = () => document.body.classList.toggle('nav-open');

  document.querySelectorAll('.sidebar a').forEach(a =>
    a.addEventListener('click', () => document.body.classList.remove('nav-open'))
  );
})();
