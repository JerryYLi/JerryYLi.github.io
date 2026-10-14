const papers = [...document.querySelectorAll('.paper')];
const buttons = [...document.querySelectorAll('[data-mode]')];
const search = document.querySelector('#search');
const count = document.querySelector('.result-count');
let mode = 'selected';
function filterPapers() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (const paper of papers) {
    const inSelection = query || mode === 'all' || paper.dataset.selected === 'true';
    const matches = `${paper.textContent} ${paper.dataset.topic}`.toLocaleLowerCase().includes(query);
    paper.hidden = !(inSelection && matches);
    if (!paper.hidden) visible++;
  }
  count.textContent = `${visible} ${query ? 'matching' : mode === 'selected' ? 'selected' : 'total'} publications`;
  document.querySelector('.no-results').hidden = visible !== 0;
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
}
for (const button of buttons) button.addEventListener('click', () => { mode = button.dataset.mode; filterPapers(); });
search.addEventListener('input', filterPapers);
document.querySelector('.publication-tools').hidden = false;
count.hidden = false;
if (location.hash === '#all-publications' || new URLSearchParams(location.search).get('view') === 'all') mode = 'all';
filterPapers();


const hoverSupport = window.matchMedia('(hover: hover) and (pointer: fine)');
for (const disclosure of document.querySelectorAll('.paper-tldr')) {
  let pinned = false;
  const control = disclosure.querySelector('summary');
  disclosure.addEventListener('mouseenter', () => { if (hoverSupport.matches) disclosure.open = true; });
  disclosure.addEventListener('mouseleave', () => { if (hoverSupport.matches && !pinned && !disclosure.contains(document.activeElement)) disclosure.open = false; });
  control.addEventListener('click', event => {
    event.preventDefault();
    pinned = !pinned;
    disclosure.open = pinned;
  });
  disclosure.addEventListener('focusin', () => { disclosure.open = true; });
  disclosure.addEventListener('keydown', event => { if (event.key === 'Escape') { pinned = false; disclosure.open = false; event.preventDefault(); } });
  disclosure.addEventListener('focusout', event => { if (!pinned && !disclosure.contains(event.relatedTarget)) disclosure.open = false; });
}

// One control reveals professional background, then life beyond research.
const bioToggle = document.querySelector('.bio-toggle');
const bioBackground = document.querySelector('#bio-background');
const bioPersonal = document.querySelector('#bio-personal');
if (bioToggle && bioBackground && bioPersonal) {
  let bioStage = 0;
  const labels = ['More about me', 'A little more…', 'Less about me'];
  function updateBio() {
    bioBackground.hidden = bioStage === 0;
    bioPersonal.hidden = bioStage < 2;
    bioToggle.textContent = labels[bioStage];
    bioToggle.setAttribute('aria-expanded', String(bioStage > 0));
    bioToggle.dataset.stage = String(bioStage);
  }
  updateBio();
  bioToggle.hidden = false;
  bioToggle.addEventListener('click', () => {
    bioStage = (bioStage + 1) % 3;
    updateBio();
  });
}
