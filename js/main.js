function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.header-box__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('is-collapsed');
  });
}

function renderPortfolioCard(project) {
  const num = String(project.id).padStart(2, '0');
  const textColor = project.preview === '#000000' ? '#fff' : '#000';
  return `
    <article class="portfolio-card" data-category="${project.category || project.pattern || 'all'}" data-id="${project.id}">
      <a href="portfolio.html#project-${project.id}">
        <div class="portfolio-card__visual">
          <div class="portfolio-card__sketch">
            <div class="portfolio-card__sketch-inner" style="background:${project.preview};color:${textColor}">
              ${project.type} — Preview ${num}
            </div>
          </div>
        </div>
        <div class="portfolio-card__body">
          <div>
            <h3 class="portfolio-card__type">${project.type}</h3>
            <p class="portfolio-card__desc">${project.desc}</p>
          </div>
          <span class="portfolio-card__arrow" aria-hidden="true">↗</span>
        </div>
      </a>
    </article>
  `;
}

function initShowcaseGrid() {
  const el = document.getElementById('portfolio-showcase');
  if (!el || typeof SHOWCASE_PROJECTS === 'undefined') return;
  el.innerHTML = SHOWCASE_PROJECTS.map(renderPortfolioCard).join('');
}

function initFullPortfolio() {
  const el = document.getElementById('portfolio-full');
  if (!el || typeof PROJECTS === 'undefined') return;
  el.innerHTML = PROJECTS.map(renderPortfolioCard).join('');
}

function initTestimonials() {
  const el = document.getElementById('testimonials-grid');
  if (!el || typeof TESTIMONIALS === 'undefined') return;
  el.innerHTML = TESTIMONIALS.map(
    (t) => `
    <blockquote class="testimonial-card">
      <p class="testimonial-card__quote">"${t.quote}"</p>
      <footer class="testimonial-card__author">
        <div class="testimonial-card__avatar" aria-hidden="true"></div>
        <div>
          <cite class="testimonial-card__name">${t.author}</cite>
          <p class="testimonial-card__role">${t.role}</p>
        </div>
      </footer>
    </blockquote>
  `
  ).join('');
}

function initFilters() {
  const bar = document.querySelector('.filter-pills');
  const grid = document.getElementById('portfolio-full');
  if (!bar || !grid) return;

  const categories = ['all', ...new Set(PROJECTS.map((p) => p.category || p.pattern).filter(Boolean))];
  bar.innerHTML = categories
    .map(
      (cat, i) =>
        `<button type="button" class="filter-pill${i === 0 ? ' filter-pill--active' : ''}" data-filter="${cat}">${CATEGORY_LABELS[cat] || cat}</button>`
    )
    .join('');

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;
    bar.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('filter-pill--active'));
    btn.classList.add('filter-pill--active');
    const filter = btn.dataset.filter;
    grid.querySelectorAll('.portfolio-card').forEach((card) => {
      const cat = card.dataset.category;
      const match = filter === 'all' || cat === filter;
      card.classList.toggle('is-hidden', !match);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initShowcaseGrid();
  initFullPortfolio();
  initTestimonials();
  initFilters();
});
