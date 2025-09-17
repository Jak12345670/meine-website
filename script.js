

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const thumbs = document.querySelectorAll(".pullover-thumbs img");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  prevBtn.addEventListener("click", () => {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  });

  nextBtn.addEventListener("click", () => {
    showSlide((currentSlide + 1) % slides.length);
  });

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
      showSlide(i);
    });
  });

  // Start mit erstem Bild
  showSlide(0);
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pullover-info button");
  const texts = document.querySelectorAll(".pullover-text");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Alle Texte ausblenden
      texts.forEach(t => t.classList.remove("active"));

      // Passenden Text einblenden
      const target = button.getAttribute("data-text");
      document.getElementById(target).classList.add("active");
    });
  });
});











document.addEventListener("DOMContentLoaded", () => {
  // Für jeden Pullover-Block separat arbeiten
  document.querySelectorAll(".pullover-box").forEach(box => {
    const slides = box.querySelectorAll(".slides img");
    const prev = box.querySelector(".prev");
    const next = box.querySelector(".next");
    const thumbs = box.querySelectorAll(".pullover-thumbs img");
    const infoButtons = box.querySelectorAll(".pullover-info button");
    const infoTexts = box.querySelectorAll(".pullover-text");
    let current = 0;

    // sichere Funktionen (prüfen ob vorhanden)
    function showSlide(idx) {
      if (!slides.length) return;
      current = (idx + slides.length) % slides.length;
      slides.forEach((s,i) => s.classList.toggle("active", i === current));
      thumbs.forEach((t,i) => t.classList.toggle("active", i === current));
    }

    // Prev/Next
    if (prev) prev.addEventListener("click", () => showSlide(current - 1));
    if (next) next.addEventListener("click", () => showSlide(current + 1));

    // Thumbnails: klicken → bestimmtes Bild zeigen
    thumbs.forEach((t,i) => {
      t.addEventListener("click", () => showSlide(i));
    });

    // Buttons: klicken → zugehörigen Text anzeigen (andere ausblenden)
    infoButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-text");
        infoTexts.forEach(t => t.classList.remove("active"));
        const target = box.querySelector(`#${id}`);
        if (target) target.classList.add("active");
      });
    });

    // initial anzeigen
    showSlide(0);
    // optional: ersten info-text verbergen (oder aktivieren)
    infoTexts.forEach(t => t.classList.remove("active"));
  });
});


document.querySelectorAll('.button-block button').forEach(button => {
  button.addEventListener('click', () => {
    const thisText = button.nextElementSibling;

    // Wenn der Text bereits sichtbar ist → wieder verstecken
    if (thisText.classList.contains('show')) {
      thisText.classList.remove('show');
    } else {
      // Zuerst alle Texte im gleichen Bereich ausblenden
      const allTexts = button.closest('.pullover-info').querySelectorAll('.pullover-text');
      allTexts.forEach(text => text.classList.remove('show'));

      // Diesen Text einblenden
      thisText.classList.add('show');
    }
  });
});
