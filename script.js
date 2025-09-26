/* -------------------------
   DOG DATA
------------------------- */
const dogProfiles = {
  "L1Y2A3": {name:"Lylla", breed:"Golden Retriever", age:"2 years", gender:"Female", startDate:"2025-04-05", notes:[
    {date:"04/05/25", text:"Initial assessment"},
    {date:"04/07/25", text:"Desensitization to loud noises"},
    {date:"04/10/25", text:"Handling and grooming desensitization"},
    {date:"04/12/25", text:"Basic sit/stay introduction"},
    {date:"04/15/25", text:"Confidence building with new objects"},
    {date:"04/18/25", text:"Leash walking basics"},
    {date:"04/21/25", text:"Recall with low distractions"},
    {date:"04/24/25", text:"Positive reinforcement enrichment"},
    {date:"04/28/25", text:"Socialization with calm dogs"},
    {date:"05/01/25", text:"Behavior: fear with unfamiliar surfaces"},
    {date:"05/05/25", text:"Advanced sit/stay duration"},
    {date:"05/08/25", text:"Recall practice with mild distractions"},
    {date:"05/12/25", text:"Scent work: hidden treats"},
    {date:"05/16/25", text:"Handling review and desensitization"},
    {date:"05/20/25", text:"Behavior modification: jump prevention"},
    {date:"05/25/25", text:"Leash walking improvement"},
    {date:"05/29/25", text:"Enrichment: puzzle toys"},
    {date:"06/03/25", text:"Confidence building in new rooms"},
    {date:"06/07/25", text:"Recall with medium distractions"},
    {date:"06/12/25", text:"Desensitization: sound exposure"},
    {date:"06/17/25", text:"Off-leash trial introduction"},
    {date:"06/22/25", text:"Scent work: increased difficulty"},
    {date:"06/27/25", text:"Behavior: fear with objects review"},
    {date:"07/02/25", text:"Leash walking advanced"},
    {date:"07/07/25", text:"Recall and stay with distractions"},
    {date:"07/12/25", text:"Enrichment and mental stimulation"},
    {date:"07/17/25", text:"Assessment review"},
     {date:"08/27/25", text:"Off-leash reinforcement"}
  ], images:["https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Lylla/IMG_3.JPG","https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Lylla/IMG_4.JPG","https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Lylla/IMG_2.JPG","https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Lylla/IMG_1.JPG"]},

  "L2U3N4": {name:"Luna", breed:"Maltipoo", age:"2 years", gender:"Female", startDate:"2025-04-10", notes:[
    {date:"04/10/25", text:"Initial assessment"},
    {date:"04/12/25", text:"Sit and down introduction"},
    {date:"04/15/25", text:"Leash walking basics"},
    {date:"04/17/25", text:"Recall practice"},
    {date:"04/21/25", text:"Leave it/drop it commands"},
    {date:"04/24/25", text:"Off-leash introduction"},
    {date:"04/28/25", text:"Behavior modification: jumping"},
    {date:"05/01/25", text:"Advanced sit-stay"},
    {date:"05/05/25", text:"Socialization with calm dogs"},
    {date:"05/09/25", text:"Scent work introduction"},
    {date:"05/13/25", text:"Handling and grooming review"},
    {date:"05/17/25", text:"Recall with distractions"},
    {date:"05/21/25", text:"Leash walking advanced"},
    {date:"05/25/25", text:"Behavior review: barking reduction"},
    {date:"05/29/25", text:"Enrichment and mental stimulation"},
    {date:"06/02/25", text:"Off-leash trial supervised"},
    {date:"06/06/25", text:"Behavior: chewing prevention"},
    {date:"06/10/25", text:"Scent work advanced"},
    {date:"06/14/25", text:"Confidence building"},
    {date:"06/18/25", text:"Recall and stay with distractions"},
    {date:"06/22/25", text:"Advanced leash walking"},
    {date:"06/26/25", text:"Behavior review"},
    {date:"06/30/25", text:"Final obedience review"},
    {date:"07/04/25", text:"Off-leash trial"},
    {date:"07/08/25", text:"Behavior final check"},
    {date:"07/12/25", text:"Final assessment"},
    {date:"07/16/25", text:"Graduation"}
  ], images:["https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Luna/IMG_1.JPG","https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Luna/IMG_2.JPG","https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Luna/IMG_3.JPG","https://raw.githubusercontent.com/barknbondk9solutions-ai/K9-Photo/main/Luna/IMG_4.JPG"]},

  "L3U4K5": {name:"Luke", breed:"Black Labrador", age:"5 months", gender:"Male", startDate:"2025-05-01", notes:[
    {date:"05/01/25", text:"Initial assessment"},
    {date:"05/03/25", text:"Puppy socialization"},
    {date:"05/05/25", text:"Potty training introduction"},
    {date:"05/08/25", text:"Sit and down basics"},
    {date:"05/10/25", text:"Leash walking introduction"},
    {date:"05/13/25", text:"Recall basics"},
    {date:"05/15/25", text:"Behavior: biting prevention"},
    {date:"05/18/25", text:"Leave it/drop it introduction"},
    {date:"05/21/25", text:"Handling and grooming basics"},
    {date:"05/24/25", text:"Socialization with other puppies"},
    {date:"05/27/25", text:"Off-leash introduction"},
    {date:"05/30/25", text:"Basic obedience review"},
    {date:"06/02/25", text:"Scent work introduction"},
    {date:"06/05/25", text:"Behavior: jumping prevention"},
    {date:"06/08/25", text:"Recall with mild distractions"},
    {date:"06/11/25", text:"Leash walking advanced"},
    {date:"06/14/25", text:"Enrichment activities"},
    {date:"06/17/25", text:"Confidence building exercises"},
    {date:"06/20/25", text:"Behavior review"},
    {date:"06/23/25", text:"Off-leash trial supervised"},
    {date:"06/26/25", text:"Final obedience review"},
    {date:"06/29/25", text:"Assessment review"},
    {date:"07/02/25", text:"Graduation"}
  ], images:["na","na"]},

  "P2O2D3": {name:"Duke", breed:"Poodle", age:"2 years", gender:"Male", startDate:"2025-04-15", notes:[
    {date:"05/15/25", text:"Initial assessment"},
    {date:"05/18/25", text:"Basic obedience review"},
    {date:"05/21/25", text:"Behavior: barking at strangers"},
    {date:"05/25/25", text:"Leash walking advanced"},
    {date:"05/28/25", text:"Off-leash introduction"},
    {date:"06/02/25", text:"Recall and stay review"},
    {date:"06/06/25", text:"Scent work introduction"},
    {date:"06/10/25", text:"Behavior modification: jumping"},
    {date:"06/14/25", text:"Handling and grooming review"},
    {date:"06/18/25", text:"Confidence building"},
    {date:"06/22/25", text:"Enrichment exercises"},
    {date:"06/26/25", text:"Recall with distractions"},
    {date:"06/30/25", text:"Behavior review"},
    {date:"07/03/25", text:"Off-leash trial supervised"},
    {date:"07/07/25", text:"Final obedience review"},
    {date:"07/11/25", text:"Assessment review"},
    {date:"07/15/25", text:"Graduation"}
  ], images:["na","na"]},

   "L7W9A9": {
  name:"Indy",
  breed:"Yorkie",
  age:"1",
  gender:"Male",
  startDate:"2025-09-13",
  notes:[
    {date:"09/13/12025", text:"Initial assessment"}
  ],
  images:["Na"]},
  
  "P1O2D3": {name:"Charlie", breed:"Poodle", age:"4 years", gender:"Male", startDate:"2025-04-15", notes:[
    {date:"04/15/25", text:"Initial assessment"},
    {date:"04/18/25", text:"Basic obedience review"},
    {date:"04/21/25", text:"Behavior: barking at strangers"},
    {date:"04/25/25", text:"Leash walking advanced"},
    {date:"04/28/25", text:"Off-leash introduction"},
    {date:"05/02/25", text:"Recall and stay review"},
    {date:"05/06/25", text:"Scent work introduction"},
    {date:"05/10/25", text:"Behavior modification: jumping"},
    {date:"05/14/25", text:"Handling and grooming review"},
    {date:"05/18/25", text:"Confidence building"},
    {date:"05/22/25", text:"Enrichment exercises"},
    {date:"05/26/25", text:"Recall with distractions"},
    {date:"05/30/25", text:"Behavior review"},
    {date:"06/03/25", text:"Off-leash trial supervised"},
    {date:"06/07/25", text:"Final obedience review"},
    {date:"06/11/25", text:"Assessment review"},
    {date:"06/15/25", text:"Graduation"}
  ], images:["na","na"]},
};
/* -------------------------
   DOM REFERENCES
------------------------- */
const carousel = document.getElementById('carousel');
const gallery = document.getElementById('gallery');
const dotsWrap = document.getElementById('carouselDots');
const searchInput = document.getElementById('searchInput');

// Default: latest 3 dogs with notes
let dogList = Object.values(dogProfiles)
  .filter(dog => Array.isArray(dog.notes) && dog.notes.length > 0) // only dogs that have notes
  .sort((a, b) => {
    const lastNoteA = new Date(a.notes[a.notes.length - 1].date);
    const lastNoteB = new Date(b.notes[b.notes.length - 1].date);
    return lastNoteB - lastNoteA; // newest note first
  })
  .slice(0, 3); // only latest 3 dogs with notes

let centerIndex = 0;
renderCarousel(dogList);

searchInput.addEventListener('input', (e) => {
  const term = e.target.value.trim().toLowerCase();

  if (!term) {
    // Empty search → reset to latest 3 dogs with notes
    dogList = Object.values(dogProfiles)
      .filter(dog => Array.isArray(dog.notes) && dog.notes.length > 0)
      .sort((a, b) => {
        const lastNoteA = new Date(a.notes[a.notes.length - 1].date);
        const lastNoteB = new Date(b.notes[b.notes.length - 1].date);
        return lastNoteB - lastNoteA;
      })
      .slice(0, 3); // only 2 dogs with notes per search to narrow it
  } else {
    // Search by code only
    dogList = Object.entries(dogProfiles)
      .filter(([code, dog]) => code.toLowerCase().includes(term))
      .map(([code, dog]) => ({ ...dog, code }))
      .sort((a, b) => {
        const lastNoteA = a.notes && a.notes.length ? new Date(a.notes[a.notes.length - 1].date) : new Date(a.startDate);
        const lastNoteB = b.notes && b.notes.length ? new Date(b.notes[b.notes.length - 1].date) : new Date(b.startDate);
        return lastNoteB - lastNoteA;
      })
      .slice(0,2);
  }

  centerIndex = 0;
  renderCarousel(dogList);
});

/* -------------------------
   PAW PARTICLES
------------------------- */
function spawnPaws(){
  const count = 10;
  const container = document.querySelector('.paws');
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className='paw';
    el.style.left = Math.random()*100 + '%';
    el.style.top = Math.random()*100 + '%';
    el.style.opacity = (Math.random()*0.5 + 0.06).toFixed(2);
    el.style.transform = `scale(${0.5 + Math.random()*1.2})`;
    const dur = 6 + Math.random()*8;
    el.style.animation = `floatY ${dur}s ease-in-out ${Math.random()*2}s infinite`;
    el.style.filter = `blur(${1+Math.random()*2}px)`;
    container.appendChild(el);
  }
}
spawnPaws();

/* -------------------------
   UTILITY FUNCTIONS
------------------------- */
function computeProgress(dog){
  if(!dog.notes || dog.notes.length === 0) return 0;

  const completedIndex = dog.notes.findIndex(n => /grad|graduation|graduate/i.test(n.text));
  const pct = completedIndex === -1 ? Math.round((dog.notes.length-1)/dog.notes.length*100) : 100;

  dog.status = (pct === 100) ? 'Completed' : 'In Training';
  return pct;
}

/* -------------------------
   RENDER CAROUSEL
------------------------- */
function renderCarousel(list){
  carousel.innerHTML = '';
  dotsWrap.innerHTML = '';

  list.forEach((dog, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.index = i;

    const pct = computeProgress(dog);

    card.innerHTML = `
      <div class="thumb"><img alt="${dog.name}" src="${dog.images?.[0] || 'https://via.placeholder.com/400x300?text=Dog'}"></div>
      <div class="meta">
        <h3>${dog.name}</h3>
        <small>${dog.breed} • ${dog.age}</small>
        <div class="card-row">
          <div class="ring" aria-hidden="true"></div>
          <div style="flex:1; padding-left:10px; flex-shrink:0">
            <div style="font-weight:700;color:var(--muted); white-space:nowrap;">Start: ${dog.startDate}</div>
            <div style="margin-top:6px">
              <span class="badge-mini">${dog.status === 'Completed' ? 'Graduate' : 'In Training'}</span>
            </div>
          </div>
        </div>
        <div class="actions">
          <button class="btn-ghost" data-action="flip">View Milestones</button>
        </div>
      </div>
    `;

    // ---- Progress Ring ----
    const ring = card.querySelector('.ring');
    ring.style.transition = 'background 1s ease-out';
    ring.style.background = `conic-gradient(var(--gold) 0 ${pct}%, #eee ${pct}% 100%)`;
    ring.innerHTML = `<svg viewBox="0 0 36 36">
      <path fill="#0D3B66" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2z"></path>
      <text x="18" y="21" font-size="10" text-anchor="middle" fill="#0D3B66" font-weight="700">${pct}%</text>
    </svg>`;

    carousel.appendChild(card);

    // ---- Add dot ----
    const dot = document.createElement('div');
    dot.className = 'dot';
    if(i === 0) dot.classList.add('active');
    dotsWrap.appendChild(dot);

    // ---- Card click ----
    card.addEventListener('click', () => {
      selectIndex(i);
      scrollIntoCenter(i);
    });

    // ---- Flip button ----
    card.querySelector('[data-action="flip"]').addEventListener('click', (e) => {
      showMilestones(dog);
    });
  });

  updateCardPositions();
}

/* -------------------------
   CARD POSITIONING
------------------------- */
function updateCardPositions(){
  const cards = Array.from(carousel.children);
  cards.forEach((c,i)=>{
    c.classList.remove('center','side');
    const dist = Math.abs(i - centerIndex);
    if(i === centerIndex) c.classList.add('center');
    else if(dist <= 2) c.classList.add('side');
  });
  Array.from(dotsWrap.children).forEach((d,i)=> d.classList.toggle('active', i===centerIndex));
  renderGalleryPreview(dogList[centerIndex]);
}

function selectIndex(i){ centerIndex = i; updateCardPositions(); }

function scrollIntoCenter(i){
  const card = carousel.children[i];
  if(!card) return;
  const wrap = carousel.parentElement;
  const wrapRect = wrap.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const offset = (cardRect.left + cardRect.width/2) - (wrapRect.left + wrapRect.width/2);
  wrap.scrollBy({left: offset, behavior:'smooth'});
}

/* -------------------------
   GALLERY
------------------------- */
function renderGalleryPreview(dog){
  gallery.innerHTML='';
  if(!dog) return;
  dog.images?.forEach(src=>{
    const p = document.createElement('div'); p.className='polaroid';
    p.innerHTML = `<img src="${src}" loading="lazy" alt="${dog.name}"><p>${dog.name}</p>`;
    gallery.appendChild(p);
  });
}

/* -------------------------
   SHOW MILESTONES MODAL
------------------------- */
const milestoneModal = document.getElementById('milestoneModal');
const modalTitle = document.getElementById('modalTitle');
const modalNotes = document.getElementById('modalNotes');
const closeMilestoneModal = document.getElementById('closeModal');

function showMilestones(dog) {
  modalTitle.textContent = `${dog.name} Milestones`;
  modalNotes.innerHTML = dog.notes.map(n => `<p>${n.date} — ${n.text || 'No note'}</p>`).join('');
  milestoneModal.style.display = 'flex';
}

// Close milestone modal with X button
if (closeMilestoneModal) {
  closeMilestoneModal.addEventListener('click', function () {
    milestoneModal.style.display = 'none';
  });
}

// Close when clicking outside the modal content
milestoneModal.addEventListener('click', (e) => {
  if (e.target === milestoneModal) {
    milestoneModal.style.display = 'none';
  }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && milestoneModal.style.display === 'flex') {
    milestoneModal.style.display = 'none';
  }
});

/* -------------------------
   INITIALIZE
------------------------- */
renderCarousel(dogList);

let autoRotate = setInterval(()=>{ 
  if(dogList.length>1){ 
    centerIndex = (centerIndex+1)%dogList.length; 
    selectIndex(centerIndex); 
    scrollIntoCenter(centerIndex); 
  } 
}, 6000);

['click','touchstart','wheel','keydown'].forEach(ev => document.addEventListener(ev, ()=>{
  clearInterval(autoRotate); 
  autoRotate = setInterval(()=>{ 
    if(dogList.length>1){ 
      centerIndex = (centerIndex+1)%dogList.length; 
      selectIndex(centerIndex); 
      scrollIntoCenter(centerIndex);
    } 
  }, 9000); 
}));

selectIndex(0);
scrollIntoCenter(0);

/* -------------------------
   ADD NOTE FUNCTION
------------------------- */
function addNoteToDog(code, note){
  const dog = dogProfiles[code];
  if(!dog) return;
  dog.notes.push(note);
  computeProgress(dog);
  renderCarousel(dogList);
}
