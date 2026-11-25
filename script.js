'use strict';

const D = {
  mail: [
    ['J','jinyoung','shelll.','08.12','pink',1],
    ['K','kania','SIX SEVENNNN.','07.45','yel',1],
    ['Y','Yeri','RAWRRRRR.','kemarin','lav',1],
    ['N','Nailah','marsyaaa kangen!!','kemarin','soft',0],
    ['K','Kia','Mar tugas gimana?','Sen','lav',0],
    ['A','Aidan','WOY MUTER GS AYOK.','Sen','pink',1]
  ],
  friends: ['Najmi','Farrel','Afy','Grez','Thiara','Vien','Jupi','Yovie','Perin','Jean','Allano','Ala','Visa','Kaisah','Manda','Deva','Raysa','Wika','Nanda','Reli','Anna','Aqeela'],
  folders: [['jinyoung','jinyoung'],['friends 1','friends 1'],['friends 2','friends 2'],['art','art'],['friends 3','friends 3']],
  me: [['Nama lengkap','Marsya Nabila Alifia'],['Panggilan','Marsya/Marshel'],['Tanggal lahir','13 Januari 2007'],['instagram', 'M4rshel_'],['Hobi','menggambar, membaca, dengar musik'],['Makanan favorit','es teh'],['Warna favorit','biru muda'],['Motto','pengen jadi anime']],
  port: [['Chibi Art, ', 't.me/jasarellyn', '@m4rshel_'],['Anime Art', 't.me/jasarellyn', '@m4rshel_'],['Chibi Art', 't.me/jasarellyn', '@m4rshel_'],['Chibi Art', 't.me/jasarellyn', '@m4rshel_']],
  songs: [['Pure','CAS'],['Touch','CAS'],['Bags','Clairo']],
  artists: [['Kim Taeri','Keren bisa acting digenre apa aja', ''],['Go Minsi','Cantik asik cihuy', ''],['Lee Dohyun','Ganteng', ''],['Choi Bomin','Imut lucu menggemaskan', '']]
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const view = $('#view'), home = $('#home'), wipe = $('#wipe'), root = document.documentElement;
const cat = (f, extra = '') => `<svg viewBox="0 0 40 30" ${extra}><use href="#cat" width="40" height="30" style="--catfill:${f}"/></svg>`;
const C = (x, y, w, f) => `<use href="#cat" x="${x}" y="${y}" width="${w}" height="${w * .75}" style="--catfill:${f || 'var(--catfill)'}"/>`;
const S = 'stroke="#2f5d8a" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"';

const EXT = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
const im = (base, alt = '') => `<img src="${base}.jpg" data-b="${base}" data-n="0" alt="${alt}" onerror="nx(this)">`;
window.nx = i => { const n = +i.dataset.n + 1; if (n < EXT.length) { i.dataset.n = n; i.src = `${i.dataset.b}.${EXT[n]}`; } else i.remove(); };

const ICONS = [
  ['mail', 'MAIL', `${C(20,8,40)}<path d="M8 36h64v30H8z" fill="#fff" ${S}/><path d="M8 36l32 21 32-21" fill="none" ${S}/>`],
  ['friends', 'FRIENDS', `${C(2,28,32,'#ffd3e1')}${C(46,28,32,'#dcd5ff')}${C(21,12,38)}`],
  ['files', 'FILES', `${C(22,12,36,'#dcd5ff')}<path d="M6 38h24l5 6h35v24H6z" fill="#fff0b3" ${S}/>`],
  ['music', 'MUSIC', `${C(20,20,40)}<path d="M16 40C16 6 64 6 64 40" fill="none" stroke="#3a86b8" stroke-width="5" stroke-linecap="round"/><rect x="9" y="36" width="12" height="20" rx="5" fill="#3a86b8" ${S}/><rect x="59" y="36" width="12" height="20" rx="5" fill="#3a86b8" ${S}/>`],
  ['artist', 'ARTIST', `<path d="M40 3l9 21 22 2-17 15 6 23-20-12-20 12 6-23L9 26l22-2z" fill="#fff0b3" ${S}/>${C(24,26,32,'#fff')}`],
  ['notes', 'NOTES', `<rect x="18" y="6" width="44" height="60" rx="5" fill="#fff" ${S}/>${C(26,14,28,'#e8f6ff')}<path d="M26 52h28M26 59h18" fill="none" ${S}/>`]
];
$('#icons').innerHTML = ICONS.map(([k, l, svg]) =>
  `<button class="ic" data-go="${k}"><svg viewBox="0 0 80 72">${svg}</svg>${l}${k === 'mail' ? '<span class="badge" id="badge"></span>' : ''}</button>`
).join('');

const fills = ['#fff','#ffd3e1','#dcd5ff','#c9ecff','#fff0b3','#c8f0e0'];
$('#stk').innerHTML = [...Array(24)].map((_, i) => cat(fills[(i * 7 + (i >> 2)) % 6], `style="--d:${(i % 6) * -.5}s"`)).join('');
const h = new Date().getHours();
$('#hello').textContent = `Selamat ${h < 11 ? 'pagi' : h < 15 ? 'siang' : h < 18 ? 'sore' : 'malam'}!`;

$('#ok').onclick = () => { $('#err').classList.add('gone'); setTimeout(() => $('#err').classList.remove('gone'), 7000); };

document.addEventListener('pointerdown', e => {
  const b = e.target.closest('button, .ic');
  if (!b) return;
  b.classList.remove('squish'); void b.offsetWidth; b.classList.add('squish');
  for (let i = 0; i < 6; i++) {
    const s = document.createElement('span');
    s.className = 'spark'; s.textContent = '✦'; s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
    document.body.append(s);
    const a = Math.random() * 6.28, d = 28 + Math.random() * 30;
    s.animate({ transform: [`translate(0,0) scale(1)`, `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) scale(0)`], opacity: [1, 0] }, { duration: 600, easing: 'ease-out' }).onfinish = () => s.remove();
  }
});


let cur = 'home', sub = null, busy = false;
const TITLE = { home: "MARSYA'S", friends: 'friends', files: 'files', detail: 'detail marsya', port: 'portfolio', music: 'favorite music', artist: 'favorite artist' };

async function go(p, ev) {
  if (busy) return;
  if (p === 'mail') return openMail();
  if (p === 'notes') return openNotes();
  busy = true;
  const x = ev?.clientX ?? innerWidth / 2, y = ev?.clientY ?? innerHeight / 2;
  const clip = r => ({ clipPath: [`circle(${r[0]} at ${x}px ${y}px)`, `circle(${r[1]} at ${x}px ${y}px)`] });
  wipe.innerHTML = cat('#fff'); wipe.hidden = false;
  await wipe.animate(clip(['0px', '150vmax']), { duration: 480, easing: 'ease-in', fill: 'forwards' }).finished;
  sub = null; paint(p);
  await wipe.animate(clip(['150vmax', '0px']), { duration: 480, delay: 120, easing: 'ease-out', fill: 'both' }).finished;
  wipe.hidden = true; busy = false;
}
function paint(p) {
  cur = p;
  const isHome = p === 'home';
  home.classList.toggle('on', isHome); view.classList.toggle('on', !isHome);
  $('#back').hidden = isHome;
  $('#crumb').textContent = (isHome ? '' : "MARSYA'S › ") + (p === 'files' && sub !== null ? 'files › ' + D.folders[sub][0] : TITLE[p]);
  if (!isHome) { view.classList.remove('on'); void view.offsetWidth; view.classList.add('on'); view.innerHTML = V[p](); }
  scrollTo(0, 0);
  if (p === 'music') syncMusic();
}
document.addEventListener('click', e => { const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go, e); });
$('#back').onclick = e => {
  if (cur === 'files' && sub !== null) { sub = null; paint('files'); } else go('home', e);
};

/* ================= isi halaman ================= */
const V = {
  friends() {
    const n = D.friends.length;
    const rows = [...Array(9)].map((_, i) => {
      const o = (i * 3) % n, list = [...D.friends.slice(o), ...D.friends.slice(0, o)];
      const t = list.map(x => `<span>${x}</span><i>-</i>`).join('');
      return `<div class="track ${i % 2 ? 'r' : ''}" style="animation-duration:${34 + i * 3}s">${t}${t}</div>`;
    }).join('');
    return `<h2 class="ttl">friends <small>arahkan kursor ke sebuah nama, nanti dia membesar ♡</small></h2><div class="rows">${rows}</div>`;
  },
  files() {
    if (sub === null)
      return `<h2 class="ttl">files <small>pilih folder untuk membuka galeri</small></h2><div class="folders">${D.folders.map((f, i) =>
        `<button class="folder" data-i="${i}" style="--d:${i * 70}ms"><div class="fo"><div class="bk"></div><div class="pp"></div><div class="fr"></div></div>folder ${f[0]}</button>`).join('')}</div>`;
    const f = D.folders[sub];
    return `<h2 class="ttl">folder ${f[0]} <small>pencet foto untuk memutar-mutar</small></h2><div class="photos">${[...Array(6)].map((_, i) =>
      `<button class="ph" data-p="${i}" style="--h:${195 + i * 20};--d:${i * 80}ms"><b>${i + 1}</b>${im(`foto/${f[1]}/${i + 1}`, `foto ${i + 1} folder ${f[0]}`)}</button>`).join('')}</div>`;
  },
  detail() {
    return `<h2 class="ttl">detail marsya</h2><div class="me"><div class="av">${cat('#fff')}${im('foto/profil', 'foto Marsya')}</div><dl>${D.me.map((r, i) =>
      `<div style="--d:${i * 70}ms"><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('')}</dl></div>`;
  },
  port() {
    return `<h2 class="ttl">portfolio <small>karya-karya marsya</small></h2><div class="cards">${D.port.map((p, i) =>
      `<article class="card" style="--d:${i * 90}ms">${im(`foto/portfolio/${i + 1}`, p[0])}<span class="tag">${p[2]}</span><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div>`;
  },
  music() {
    return `<h2 class="ttl">favorite music</h2><div class="player"><div><div class="vinyl"></div></div><div>
      <h3 id="mt"></h3><p id="ma"></p><div class="eq">${[...Array(12)].map((_, k) => `<i style="--k:${k}"></i>`).join('')}</div>
      <div class="bar2"><i id="pg"></i></div>
      <div class="ctrl"><button class="chip" id="prev">⏮</button><button class="chip" id="pp">▶</button><button class="chip" id="next">⏭</button></div>
      <div class="toast" id="toast"></div><div class="list">${D.songs.map((s, i) => `<button class="song" data-s="${i}"><span>${s[0]}</span><small>${s[1]}</small></button>`).join('')}</div></div></div>`;
  },
  artist() {
    const stars = [...Array(10)].map((_, i) => `<span class="star" style="left:${(i * 37) % 95}%;top:${(i * 53) % 90}%;--d:${i * .3}s">✦</span>`).join('');
    return `<h2 class="ttl">favorite artist</h2><div class="stage">${D.artists.map((a, i) =>
      `<div class="art-c" style="--d:${i * 90}ms">${stars.slice(0, 0)}<div class="halo">${cat(fills[(i + 1) % 6])}${im(`foto/artis/${i + 1}`, a[0])}</div><h3>${a[0]}</h3><p>${a[1]}<br>${a[2]}</p></div>`).join('')}</div>`;
  }
};

/* ================= files: folder + lightbox ================= */
view.addEventListener('click', e => {
  const fo = e.target.closest('.folder');
  if (fo) { fo.classList.add('open'); setTimeout(() => { sub = +fo.dataset.i; paint('files'); }, 700); }
  const ph = e.target.closest('.ph');
  if (ph) lightbox(ph);
  const so = e.target.closest('.song');
  if (so) { load(+so.dataset.s); play(); }
  if (e.target.id === 'pp') au.paused ? play() : au.pause();
  if (e.target.id === 'prev') { load(si - 1); play(); }
  if (e.target.id === 'next') { load(si + 1); play(); }
  const ac = e.target.closest('.art-c');
  if (ac) { ac.querySelector('.halo').animate({ transform: ['rotate(0)', 'rotate(360deg) scale(1.15)', 'rotate(360deg)'] }, 700); }
});
function lightbox(ph) {
  const lb = document.createElement('div'); lb.className = 'lb';
  lb.innerHTML = `<button class="x" aria-label="Tutup">✕</button><div class="c3"><div class="face" style="--h:${ph.style.getPropertyValue('--h')}">${ph.innerHTML}</div><div class="face back">♡</div></div><p>geser untuk memutar · klik dua kali untuk membalik</p>`;
  document.body.append(lb);
  const c = $('.c3', lb); let rx = -8, ry = 14, drag = null;
  const set = () => c.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`; set();
  c.onpointerdown = e => { drag = [e.clientX, e.clientY]; c.style.transition = 'none'; c.setPointerCapture(e.pointerId); c.style.cursor = 'grabbing'; };
  c.onpointermove = e => { if (!drag) return; ry += (e.clientX - drag[0]) * .7; rx -= (e.clientY - drag[1]) * .7; drag = [e.clientX, e.clientY]; set(); };
  c.onpointerup = () => { drag = null; c.style.cursor = 'grab'; };
  c.ondblclick = () => { c.style.transition = 'transform .8s cubic-bezier(.3,1.4,.5,1)'; ry = Math.round(ry / 180) * 180 + 180; rx = 0; set(); };
  lb.onclick = e => { if (e.target === lb || e.target.className === 'x') lb.remove(); };
}

/* ================= backsound santai (lo-fi synth) ================= */
let AC, bgmWant = false, bgmTimer = null, bgmStep = 0;
const CHORDS = [
  [261.63, 329.63, 392.00, 493.88], // Cmaj7
  [220.00, 261.63, 329.63, 392.00], // Am7
  [174.61, 220.00, 261.63, 329.63], // Fmaj7
  [196.00, 246.94, 293.66, 349.23]  // G7
];
const MELODY = [659.25, 587.33, 523.25, 493.88, 523.25, 659.25, 783.99, 659.25];

function playChillStep() {
  if (!bgmWant || !au.paused) return;
  AC = AC || new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  const t = AC.currentTime;

  // Mainkan kord lembut tiap 4 ketukan
  if (bgmStep % 4 === 0) {
    const chord = CHORDS[(bgmStep / 4) % CHORDS.length];
    chord.forEach(freq => {
      const osc = AC.createOscillator();
      const gain = AC.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.028, t + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
      osc.connect(gain);
      gain.connect(AC.destination);
      osc.start(t);
      osc.stop(t + 2.7);
    });
  }

  // Petikan nada santai
  const noteFreq = MELODY[bgmStep % MELODY.length];
  const mOsc = AC.createOscillator();
  const mGain = AC.createGain();
  mOsc.type = 'triangle';
  mOsc.frequency.setValueAtTime(noteFreq, t);
  mGain.gain.setValueAtTime(0.0001, t);
  mGain.gain.linearRampToValueAtTime(0.022, t + 0.08);
  mGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);
  mOsc.connect(mGain);
  mGain.connect(AC.destination);
  mOsc.start(t);
  mOsc.stop(t + 0.9);

  bgmStep++;
}

function startBgmLoop() {
  if (bgmTimer || !bgmWant || !au.paused) return;
  playChillStep();
  bgmTimer = setInterval(playChillStep, 650);
}

function stopBgmLoop() {
  if (bgmTimer) {
    clearInterval(bgmTimer);
    bgmTimer = null;
  }
}

function updateBgmBtn() {
  const btn = $('#bgm');
  if (!btn) return;
  const active = bgmWant && au.paused;
  btn.textContent = bgmWant ? (active ? '♪ BGM: ON' : '♪ BGM: PAUSED') : '♪ BGM: OFF';
  btn.classList.toggle('on', active);
}

$('#bgm').onclick = () => {
  bgmWant = !bgmWant;
  if (bgmWant) {
    if (au.paused) startBgmLoop();
  } else {
    stopBgmLoop();
  }
  updateBgmBtn();
};

/* ================= musik ================= */
const au = $('#au'); let si = 0;
const msg = t => { const el = $('#toast'); if (el) el.textContent = t; };
function load(i) { si = (i + D.songs.length) % D.songs.length; au.src = D.songs[si][2] || `lagu/${si + 1}.mp3`; msg(''); syncMusic(); }
function play() { au.play().catch(() => msg(`File lagu belum ada. Taruh mp3 dengan nama ${si + 1}.mp3 di folder lagu/.`)); }
function syncMusic() {
  // Otomatis stop backsound saat lagu favorite diputar, dan nyala lagi saat lagu favorite di-stop/pause
  if (!au.paused) {
    stopBgmLoop();
  } else if (bgmWant) {
    startBgmLoop();
  }
  updateBgmBtn();

  const p = $('.player'); if (!p) return;
  p.classList.toggle('play', !au.paused);
  $('#pp').textContent = au.paused ? '▶' : '❚❚';
  $('#mt').textContent = D.songs[si][0]; $('#ma').textContent = D.songs[si][1];
  $$('.song').forEach((s, i) => s.classList.toggle('on', i === si));
}
['play', 'pause', 'ended'].forEach(ev => au.addEventListener(ev, syncMusic));
au.addEventListener('ended', () => { load(si + 1); play(); });
au.addEventListener('timeupdate', () => { const g = $('#pg'); if (g && au.duration) g.style.width = au.currentTime / au.duration * 100 + '%'; });
load(0);
setInterval(() => {
  const p = $('.player'); if (!p || au.paused) return;
  const n = document.createElement('span'); n.className = 'note'; n.textContent = ['♪', '♫', '♬'][Math.random() * 3 | 0];
  n.style.cssText = `left:${15 + Math.random() * 25}%;top:60%;--x:${Math.random() * 80 - 40}px`; p.append(n); setTimeout(() => n.remove(), 2400);
}, 600);

/* ================= popup: mail & notes ================= */
function modal(title, body) {
  const m = document.createElement('div'); m.className = 'modal';
  m.innerHTML = `<div class="box"><h2>${title}<button aria-label="Tutup">×</button></h2><div class="in">${body}</div></div>`;
  m.onclick = e => { if (e.target === m || e.target.closest('h2 button')) m.remove(); };
  document.body.append(m); return m;
}
const unread = () => D.mail.filter(m => m[5]).length;
const badge = () => { const b = $('#badge'); if (b) b.textContent = unread() || ''; };
badge();
function openMail() {
  const m = modal('INBOX', `<p style="font-size:.8rem;color:var(--ink2)">${unread()} pesan baru — pesan dari orang-orang spesial</p>` +
    D.mail.map((x, i) => `<div class="msg ${x[5] ? 'new' : ''}" data-i="${i}" style="--i:${i}"><span class="a" style="background:var(--${x[4]})">${x[0]}</span><span><b>${x[1]}</b> : ${x[2]}</span><small>${x[3]}</small></div>`).join(''));
  m.addEventListener('click', e => { const g = e.target.closest('.msg'); if (g) { D.mail[g.dataset.i][5] = 0; g.classList.remove('new'); badge(); } });
}
function openNotes() {
  const key = 'marsya-notes', list = () => JSON.parse(localStorage.getItem(key) || '[]');
  const draw = () => list().slice().reverse().map(c => `<div class="cm"><b>${esc(c.n)}</b>: ${esc(c.t)}<small>${c.d}</small></div>`).join('') || '<p style="font-size:.8rem;color:var(--ink2)">Belum ada komentar. Jadi yang pertama!</p>';
  const m = modal('NOTES — komentar', `<input class="field" id="cn" placeholder="Nama kamu (wajib)" maxlength="30"><textarea class="field" id="ct" rows="3" placeholder="Tulis komentar..." maxlength="300"></textarea><button class="chip" id="cs" style="justify-self:end;background:var(--soft)">Kirim komentar</button><div id="cl" style="display:grid;gap:8px">${draw()}</div>`);
  $('#cs', m).onclick = () => {
    const n = $('#cn', m), t = $('#ct', m);
    [n, t].forEach(f => f.classList.remove('bad'));
    if (!n.value.trim() || !t.value.trim()) { (n.value.trim() ? t : n).classList.add('bad'); (n.value.trim() ? t : n).focus(); return; }
    const l = list(); l.push({ n: n.value.trim(), t: t.value.trim(), d: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) });
    localStorage.setItem(key, JSON.stringify(l)); t.value = ''; $('#cl', m).innerHTML = draw();
  };
}
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ================= dark / light ================= */
const saved = localStorage.getItem('marsya-theme'); if (saved) root.dataset.theme = saved;
$('#theme').onclick = e => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const sw = () => { root.dataset.theme = next; localStorage.setItem('marsya-theme', next); };
  if (!document.startViewTransition) return sw();
  const r = e.currentTarget.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
  const R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  document.startViewTransition(sw).ready.then(() => root.animate(
    { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${R}px at ${x}px ${y}px)`] },
    { duration: 750, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }));
};

/* ================= hewan pixel ================= */
const PETS = {
  cat: { rows: ['b.b.........', 'bbb.......b.', 'bkbbbbbbbbbb', 'pbbbbbbbbbb.', 'bbbbbbbbbbb.', '.b.b...b.b..', '.b.b...b.b..'], pal: { b: '#5b86bd', k: '#1d3b5e', p: '#ffa6c1' }, say: ['krrrr…', 'grrr!', 'mrrp?', 'purrr~'], snd: [60, 90, 'sawtooth', 28], min: 0, max: .45, sp: 1.1 },
  frog: { rows: ['.gg....gg.', 'gwg....gwg', 'gggggggggg', 'glllllllll', 'gggggggggg', '.gg....gg.'], pal: { g: '#7fcf9f', w: '#fff', l: '#bfeccd' }, say: ['kwek kwek', 'grrr…', 'krrrk!', 'ribbit'], snd: [150, 70, 'square', 16], min: .55, max: 1, sp: 1.6 }
};
function sound([f0, f1, type, rate]) {
  AC = AC || new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  const t = AC.currentTime, o = AC.createOscillator(), l = AC.createOscillator(), lg = AC.createGain(), g = AC.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.linearRampToValueAtTime(f1, t + .8);
  l.frequency.value = rate; lg.gain.value = .12; g.gain.setValueAtTime(.15, t); g.gain.linearRampToValueAtTime(0, t + .85);
  l.connect(lg); lg.connect(g.gain); o.connect(g); g.connect(AC.destination);
  o.start(t); l.start(t); o.stop(t + .9); l.stop(t + .9);
}
Object.entries(PETS).forEach(([name, d]) => {
  const px = d.rows.flatMap((r, y) => [...r].map((c, x) => d.pal[c] ? `<rect x="${x}" y="${y}" width="1" height="1" fill="${d.pal[c]}"/>` : '')).join('');
  const el = document.createElement('div'); el.className = 'pet'; el.setAttribute('aria-label', name); el.setAttribute('role', 'button');
  el.innerHTML = `<span class="say"></span><div class="fl"><svg class="spr" viewBox="0 0 ${d.rows[0].length} ${d.rows.length}" shape-rendering="crispEdges">${px}</svg></div>`;
  document.body.append(el);
  let x = innerWidth * d.min + 20, tx = x, wait = 0, last = 0;
  (function tick(t) {
    const dt = Math.min(t - last, 50); last = t;
    if (wait > 0) { wait -= dt; el.classList.remove('go'); }
    else if (Math.abs(tx - x) < 2) { tx = innerWidth * d.min + Math.random() * innerWidth * (d.max - d.min) - 40; tx = Math.max(4, Math.min(innerWidth - 62, tx)); wait = 700 + Math.random() * 3200; }
    else { x += Math.sign(tx - x) * d.sp * dt / 16; el.classList.add('go'); $('.fl', el).style.transform = tx > x ? 'scaleX(-1)' : ''; }
    el.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(tick);
  })(0);
  el.onclick = () => {
    sound(d.snd); wait = 1600;
    $('.say', el).textContent = d.say[Math.random() * d.say.length | 0];
    el.classList.remove('jump'); void el.offsetWidth; el.classList.add('jump', 'talk');
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('talk'), 1400);
  };
});