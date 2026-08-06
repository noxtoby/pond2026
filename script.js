if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (window.location.hash) {
  history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}

const resetScroll = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
};

resetScroll();
window.addEventListener('DOMContentLoaded', resetScroll);
window.addEventListener('load', () => {
  resetScroll();
  requestAnimationFrame(resetScroll);
  setTimeout(resetScroll, 0);
});
window.addEventListener('pageshow', () => {
  resetScroll();
  requestAnimationFrame(resetScroll);
});

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

const programMarkup = pondContent.program.map((item, index) => `
  ${index === 0 || item.day !== pondContent.program[index - 1].day ? `<h3 class="schedule-day">${item.day}</h3>` : ''}
  <article class="schedule-item">
    <time class="schedule-date">${item.date}</time>
    <div><h3>${item.title}</h3><p>${item.text}</p></div>
  </article>
`).join('');

const newsMarkup = pondContent.news.map((item) => `
  <article class="news-item">
    <time class="news-date">${item.date}</time>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join('');

const organiserMarkup = pondContent.organisers.map((organiser) => `
  <p><strong>${organiser.name}</strong><span>${organiser.affiliation.join('<br>')}</span></p>
`).join('');

const topicMarkup = pondContent.topics.map((topic) => `<li>${topic}</li>`).join('');

document.querySelector('#organiser-list').innerHTML = organiserMarkup;
document.querySelector('#topic-list').innerHTML = topicMarkup;
document.querySelector('#program-list').innerHTML = programMarkup;
document.querySelector('#news-list').innerHTML = newsMarkup;
