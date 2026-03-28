//Exercice 1 - Menu burger
const bouton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

bouton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
  const isOpen = menu.classList.contains('is-open');
  bouton.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    bouton.focus();
  }
});

//Exercice 2 - Modale accessible
const btnOpen = document.querySelector('.modal-open');
const btnClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

btnOpen.addEventListener('click', () => {
  modal.classList.add('is-visible');
});

btnClose.addEventListener('click', () => {
  modal.classList.remove('is-visible');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
    modal.classList.remove('is-visible');
    btnOpen.focus();
  }
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('is-visible');
    btnOpen.focus();
  }
});

function ouvrirModale() {
  modal.classList.add('is-visible');
  modal.setAttribute('aria-hidden', 'false');
}

function fermerModale() {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
  btnOpen.focus();
}

btnOpen.addEventListener('click', ouvrirModale);
btnClose.addEventListener('click', fermerModale);

//Exercice 3 - Accordéon
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const reponse = question.nextElementSibling;
    const estDejaOuverte = reponse.classList.contains('is-visible');

    // Fermer toutes les réponses
    document.querySelectorAll('.faq-answer').forEach((r) => {
      r.classList.remove('is-visible');
    });

    // Si elle n'était pas ouverte, l'ouvrir
    if (!estDejaOuverte) {
      reponse.classList.add('is-visible');
    }
  });
});

// Exercice 4 - Thème sombre
const btnTheme = document.querySelector('#theme-toggle');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  const isDark = document.body.classList.contains('dark');
  btnTheme.textContent = isDark ? '☀️ Clair' : '🌙 Sombre';
});

// Un petit easter egg
const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowRight',
];
let position = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === konamiCode[position]) {
    position++;
    if (position === konamiCode.length) {
      setInterval(() => {
    document.body.style.background = `hsl(${Math.random() * 360}, 100%, 80%)`;
        }, 500);

        document.body.addEventListener("mousemove", e => {
  let marker = document.createElement("div");
  marker.textContent = "*";
  marker.style.position = "fixed";
  marker.style.left = e.pageX + "px";
  marker.style.top = e.pageY + "px";
  marker.style.pointerEvents = "none";
  document.body.appendChild(marker);
  setTimeout(() => marker.remove(), 500);
});

let phrases = ["Franchement le javascript c'est beaucoup trop bien"];
setInterval(() => {
  alert(phrases[Math.floor(Math.random() * phrases.length)]);
}, 5000);

let x = 0;
setInterval(() => {
  document.body.style.transform = `translate(${Math.sin(x)*10}px, ${Math.cos(x)*10}px)`;
  x += 0.2;
}, 50);

      document.body.style.fontFamily = 'Papyrus, cursive';
      position = 0;
    }
  } else {
    position = 0;
  }
});
