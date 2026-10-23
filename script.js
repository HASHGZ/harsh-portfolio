const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ytId = u => (u.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/) || [])[1] || '';
const playable = p => p.status === 'live' && p.video.url.trim() !== '';
const thumbOf = p => p.thumbnail || (p.video.type === 'youtube' && ytId(p.video.url) ? `https://img.youtube.com/vi/${ytId(p.video.url)}/hqdefault.jpg` : '');
const P = CONFIG.projects;
const feat = P.find(p => p.featured && p.status === 'live') || P[0];
const fmt = p => (p.orientation === 'vertical' ? '9:16 vertical' : '16:9 landscape');

function thumb(p) {
  const ok = playable(p), img = thumbOf(p);
  const label = p.status === 'planned' ? 'Planned' : 'Video link coming soon';
  return `<button class="thumb ${p.orientation}" data-id="${esc(p.id)}" ${ok ? '' : 'disabled'} aria-label="${esc(ok ? 'Play ' + p.title : p.title + ': ' + label)}">
    ${img ? `<img src="${esc(img)}" alt="" loading="lazy">` : ''}
    <span class="ov">${ok ? '<span class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>' : `<span class="tag">${label}</span>`}</span></button>`;
}

const c = CONFIG.contact;
const links = [
  c.email && [`mailto:${c.email}`, c.email],
  c.instagram && [c.instagram, 'Instagram'],
  c.youtube && [c.youtube, 'YouTube'],
  c.linkedin && [c.linkedin, 'LinkedIn']
].filter(Boolean);
const skillsRun = CONFIG.skills.map(s => `<span>${esc(s)}</span>`).join('');

document.getElementById('app').innerHTML = `
<div class="wrap hero">
  <div class="rise">
    <h1>HARSH<span class="role">VIDEO EDITOR</span></h1>
    <p class="tag-line">${esc(CONFIG.tagline)}</p>
    <div class="btns"><a class="btn solid" href="#work">Explore work</a><a class="btn" href="#contact">Contact</a></div>
  </div>
  <div class="fcard rise" style="animation-delay:.25s">${thumb(feat)}<p class="label"><span>Featured edit: ${esc(feat.title)}</span><span>${fmt(feat)}</span></p></div>
</div>
<div class="strip" aria-hidden="true"><div class="track">${skillsRun}${skillsRun}${skillsRun}${skillsRun}</div></div>
<section id="work"><div class="wrap rev">
  <div class="sec-head"><h2>Selected work</h2><span>Click a frame to play</span></div>
  <div class="grid">
  ${P.filter(p => p.status === 'live' || CONFIG.showPlannedProjects).map(p => `
    <div class="${p === feat ? 'feat' : ''} ${p.status === 'planned' ? 'planned' : ''}">${thumb(p)}
      <div class="meta"><h3>${esc(p.title)}</h3><span class="fmt ${p.status === 'planned' ? 'pl' : ''}">${p.status === 'planned' ? 'Planned' : fmt(p)}</span></div>
      <p>${esc(p.description)}</p></div>`).join('')}
  </div>
</div></section>
<section id="about"><div class="wrap rev two">
  <h2>About</h2>
  <div><p>${esc(CONFIG.about)}</p>
  <ul class="open"><li>Editing internships</li><li>Freelance</li></ul></div>
</div></section>
<section id="skills"><div class="wrap rev"><div class="sec-head"><h2>Skills</h2></div>
  <ul class="rows">${CONFIG.skills.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div></section>
<section id="contact"><div class="wrap rev"><h2>Have footage? Let's talk.</h2>
  <p class="lead">Open to editing internships and freelance work.</p>
  ${links.length ? `<ul class="links">${links.map(([h, t]) => `<li><a class="btn" href="${esc(h)}" ${h.startsWith('mailto') ? '' : 'target="_blank" rel="noopener noreferrer"'}>${esc(t)}</a></li>`).join('')}</ul>`
    : '<p class="muted">Contact links will appear here once added in the CONFIG block of index.html.</p>'}
</div></section>`;

document.getElementById('yr').textContent = new Date().getFullYear();

const nav = document.getElementById('nav'), mb = document.getElementById('menuBtn');
mb.onclick = () => { const o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); mb.textContent = o ? 'Close' : 'Menu'; };
nav.onclick = e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); mb.textContent = 'Menu'; } };

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .08 });
document.querySelectorAll('.rev').forEach(el => io.observe(el));

/* Video modal: video loads only after a click; nothing autoplays on page load */
function openModal(p) {
  const prev = document.activeElement, v = p.video, id = ytId(v.url);
  const player = v.type === 'youtube'
    ? (id ? `<iframe title="${esc(p.title)}" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"></iframe>` : '<p style="padding:1.5rem;color:#9a9ea5">This YouTube link is not valid. Check the URL in CONFIG.</p>')
    : `<video src="${esc(v.url)}" ${thumbOf(p) ? `poster="${esc(thumbOf(p))}"` : ''} controls autoplay playsinline preload="metadata"></video>`;
  const m = document.createElement('div');
  m.className = 'modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', p.title);
  m.innerHTML = `<div class="mbox"><div class="mhead"><h3>${esc(p.title)}</h3><button class="btn" id="mClose">Close</button></div>
    <div class="frame ${p.orientation}">${player}</div>
    ${v.type === 'youtube' && id ? `<p class="alt">Video not loading? <a href="${esc(v.url)}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a></p>` : ''}</div>`;
  document.body.appendChild(m);
  document.body.style.overflow = 'hidden';
  const btn = m.querySelector('#mClose');
  const close = () => { document.removeEventListener('keydown', key); m.remove(); document.body.style.overflow = ''; prev && prev.focus(); };
  const key = e => { if (e.key === 'Escape') close(); if (e.key === 'Tab') { e.preventDefault(); btn.focus(); } };
  document.addEventListener('keydown', key);
  btn.onclick = close;
  m.onclick = e => { if (e.target === m) close(); };
  btn.focus();
}
document.addEventListener('click', e => {
  const t = e.target.closest('.thumb');
  if (!t || t.disabled) return;
  const p = P.find(x => x.id === t.dataset.id);
  if (p && playable(p)) openModal(p);
});
