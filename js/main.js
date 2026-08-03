/* ============================================================
   thisguyprobablycostsalot — interactions
   ============================================================ */

const LINKS = {
  '01':{t:'vimeo',  id:'1056660717'},
  '02':{t:'vimeo',  id:'1056665603'},
  '03':{t:'youtube',id:'qD34KHmpiRo'},
  '04':{t:'vimeo',  id:'1056660943'},
  '05':{t:'vimeo',  id:'1006476745'},
  '06':{t:'vimeo',  id:'1056654572'},
  '07':{t:'youtube',id:'cbfFkGHzC4w'},
  '08':{t:'vimeo',  id:'716427251'},
  '09':{t:'youtube',id:'EvzOhB8Tf6E'},
  '10':{t:'youtube',id:'ThsCOHYwqW4'},
  '11':{t:'vimeo',  id:'694832904'},
  '12':{t:'youtube',id:'Z1sQQqT4SE4'},
  '13':{t:'ext',    url:'https://www.zdf-studios.com/de/programmkatalog/international/drama/series/crime-suspense/coast-guard'},
  '14':{t:'vimeo',  id:'530723673'},
  '15':{t:'vimeo',  id:'714066578'},
  '16':{t:'youtube',id:'NugZ_4RBkQA'},
  '17':{t:'youtube',id:'eJn0uXbi0d8'},
  '18':{t:'vimeo',  id:'513408021'},
  '19':{t:'vimeo',  id:'934690621'},
  '20':{t:'vimeo',  id:'827934193'},
  '21':{t:'vimeo',  id:'934688236'},
  '22':{t:'vimeo',  id:'87185642'},
  '23':{t:'vimeo',  id:'933639588'},
  '24':{t:'vimeo',  id:'59134955'},
  '25':{t:'youtube',id:'66p9WTThqFM'},
  '26':{t:'vimeo',  id:'934690318'},
  '27':{t:'youtube',id:'DV_DYN0wsig'},
  '28':{t:'vimeo',  id:'163971408'},
  '29':{t:'youtube',id:'cIPn4qO4fXw'},
  '30':{t:'youtube',id:'zaX1V_Aq_d0'},
  '31':{t:'ext',    url:'https://www.adsoftheworld.com/campaigns/censorship-tells-the-wrong-story-obama-clinton'},
  '32':{t:'ext',    url:'https://digitalsynopsis.com/advertising/coca-cola-bubbles-taste-the-feeling/'},
  '33':{t:'vimeo',  id:'86110568'},
  '34':{t:'youtube',id:'DA1DckwW3YI'},
  '35':{t:'vimeo',  id:'1056652499'},
  '36':{t:'ext',    url:'https://www.amazon.com/Midlife-Punk-Explicit-Sam-Not/dp/B0G2JL1XM1'},
  '37':{t:'ext',    url:'https://www.amazon.com/-/es/Meine-ersten-Witze-Witzebuch-Erstleser/dp/B0G2K9LG68'}
};

const THUMB_DIR = 'Final_Thumbs/';

document.addEventListener('DOMContentLoaded', () => {
  const isTouch = window.matchMedia('(hover:none)').matches;

  document.querySelectorAll('.w').forEach(word => {
    const n = word.dataset.n;
    if (!isTouch) {
      const img = document.createElement('img');
      img.className = 'thumb';
      img.src = THUMB_DIR + n + '.webp';
      img.alt = '';
      word.appendChild(img);
      word.addEventListener('mousemove', e => {
        img.style.left = e.clientX + 'px';
        img.style.top  = e.clientY + 'px';
      });
    }
    word.addEventListener('click', e => {
      e.preventDefault();
      const link = LINKS[n];
      if (!link) return;
      if (link.t === 'ext') window.open(link.url, '_blank', 'noopener');
      else openLightbox(link);
    });
  });

  const lb = document.getElementById('lightbox');
  const slot = lb ? lb.querySelector('.slot') : null;
  window.openLightbox = (link) => {
    let src = '';
    if (link.t === 'vimeo')
      src = `https://player.vimeo.com/video/${link.id}?autoplay=1&title=0&byline=0&portrait=0`;
    if (link.t === 'youtube')
      src = `https://www.youtube.com/embed/${link.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    slot.innerHTML = `<iframe src="${src}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    lb.classList.add('open');
  };
  const closeLB = () => { if(!lb) return; lb.classList.remove('open'); slot.innerHTML=''; };
  if (lb) {
    lb.querySelector('.close').addEventListener('click', closeLB);
    lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLB(); });
  }

  const AOY_LOGOS = Array.from({length:23}, (_,i)=> String(i+1).padStart(2,'0')+'.webp');
  const AWARD_LOGOS = Array.from({length:29}, (_,i)=> String(i+1).padStart(2,'0')+((i+1)===28?'.png':'.webp'));
  const aoyGrid = document.getElementById('aoy-grid');
  const awardGrid = document.getElementById('award-grid');
  if (aoyGrid)   AOY_LOGOS.forEach(f => aoyGrid.insertAdjacentHTML('beforeend', `<img src="Final_AOY%20Logos/${f}" alt="">`));
  if (awardGrid) AWARD_LOGOS.forEach(f => awardGrid.insertAdjacentHTML('beforeend', `<img src="Final_Award%20Logos/${f}" alt="">`));
});
