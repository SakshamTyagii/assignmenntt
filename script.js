document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector('.features-video video');
  const playBtn = document.querySelector('.features-video .play-btn');

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.style.display = 'none';
    } else {
      video.pause();
      playBtn.style.display = 'flex';
    }
  });

  playBtn.addEventListener('click', () => {
    video.play();
    playBtn.style.display = 'none';
  });

  video.addEventListener('ended', () => {
    playBtn.style.display = 'flex';
  });
});

const slides = document.querySelectorAll('.testimonials-middle');
const dots = document.querySelectorAll('.dots li');
let currIdx = 0;
let autoSlide;

slides[0].classList.add('active');
slides[0].style.display = 'flex';
dots[0].classList.add('active');

function changeSlide(newIdx) {
  if (newIdx === currIdx) return;

  const currSlide = slides[currIdx];
  const nextSlide = slides[newIdx];

  slides.forEach(slide => {
    slide.classList.remove('active', 'slide-in-right', 'animate-in');
  });

  nextSlide.classList.add('slide-in-right');
  nextSlide.style.display = 'flex';

  setTimeout(() => {
    currSlide.classList.remove('active');
    nextSlide.classList.add('active', 'animate-in');
    nextSlide.classList.remove('slide-in-right');

    setTimeout(() => {
      currSlide.style.display = 'none';
      nextSlide.classList.remove('animate-in');
    }, 500);
  }, 10);

  dots.forEach(dot => dot.classList.remove('active'));
  dots[newIdx].classList.add('active');

  currIdx = newIdx;
}

function nextSlide() {
  const nextIdx = (currIdx + 1) % slides.length;
  changeSlide(nextIdx);
}

function startSlideShow() {
  autoSlide = setInterval(nextSlide, 5000);
}

startSlideShow();

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    changeSlide(idx);
    startSlideShow();
  });
});

const testSec = document.querySelector('.testimonials-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      testSec.classList.add('slide-up-animate');
    }
  });
}, { threshold: 0.2 });

observer.observe(testSec);

function toggleMenu() {
  const menu = document.querySelector('.hamburger');
  const bars = document.querySelectorAll('.hamburger div');

  document.querySelector('.nav-links').classList.toggle('active');
  menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
  const upObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const upElems = document.querySelectorAll('.slide-up');
  upElems.forEach(elem => upObs.observe(elem));
});

document.addEventListener("DOMContentLoaded", () => {
  const rightObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const rightElems = document.querySelectorAll('.slide-right');
  rightElems.forEach(elem => rightObs.observe(elem));
});

document.addEventListener("DOMContentLoaded", () => {
  const leftObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const leftElems = document.querySelectorAll('.slide-left');
  leftElems.forEach(elem => leftObs.observe(elem));
});

document.addEventListener("DOMContentLoaded", () => {
  const scaleObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  const scaleElems = document.querySelectorAll('.scale-in');
  scaleElems.forEach(elem => scaleObs.observe(elem));
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeBtn = document.querySelector(".close-btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (form.checkValidity()) {
      modal.style.display = "block";
      document.body.classList.add("no-scroll");
      form.reset();
    } else {
      form.reportValidity();
    }
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
  };
});