const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
});

const programMarkup = pondContent.program.map((item) => `
  <article class="schedule-item">
    <time class="schedule-date">${item.date}</time>
    <div><h3>${item.title}</h3><p>${item.text}</p></div>
    <span class="item-arrow" aria-hidden="true">→</span>
  </article>
`).join('');

const newsMarkup = pondContent.news.map((item) => `
  <article class="news-item">
    <time class="news-date">${item.date}</time>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join('');

document.querySelector('#program-list').innerHTML = programMarkup;
document.querySelector('#news-list').innerHTML = newsMarkup;
