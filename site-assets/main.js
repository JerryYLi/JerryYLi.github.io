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
