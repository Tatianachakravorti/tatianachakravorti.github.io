const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    menu.focus();
  }
});
const input = document.querySelector('#pub-search');
input?.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();
  let count = 0;
  document.querySelectorAll('.pub-group').forEach(group => {
    let visible = 0;
    group.querySelectorAll('.publication').forEach(publication => {
      const match = publication.dataset.search.includes(query);
      publication.hidden = !match;
      if (match) visible++;
    });
    group.hidden = visible === 0;
    count += visible;
  });
  document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'entry' : 'entries'}`;
  document.querySelector('#no-results').hidden = count > 0;
});
