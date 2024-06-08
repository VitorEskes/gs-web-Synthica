const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.querySelector('.login__btn');
  const loginBtn1 = document.querySelector('.scroll__btn1');
  const popup = document.getElementById('login-popup');
  const loginForm = document.querySelector('.login__form');

  // Defina os emails e senhas corretos
  const correctEmail = "admin@email.com";
  const correctPassword = "1234";

  loginBtn.addEventListener('click', function () {
      popup.style.display = 'flex';
  });

  loginBtn1.addEventListener('click', function () {
    popup.style.display = 'flex';
});


  // Fechar o popup ao clicar fora dele
  window.addEventListener('click', function (event) {
      if (event.target === popup) {
          popup.style.display = 'none';
      }
  });

  // Validar o formulário ao enviar
  loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita o envio padrão do formulário

      // Obter os valores do formulário
      const email = loginForm.querySelector('input[type="text"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      // Verificar se o email e senha estão corretos
      if (email === correctEmail && password === correctPassword) {
          alert("Login bem-sucedido!");
          popup.style.display = 'none'; // Fechar o popup após o login bem-sucedido
          window.location.href = 'sobre.html';
      } else {
          alert("Email ou senha incorretos. Por favor, tente novamente.");
      }
  });
});



let currentSlide = 0;

function changeSlide(direction) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    changeSlide(1);
}, 3000);




menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .scroll__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__socials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__image-1, .about__image-3, .about__image-5", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__image-2, .about__image-4, .about__image-6", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content-1 .section__subheader, .about__content-2 .section__subheader, .about__content-3 .section__subheader, .about__content-4 .section__subheader, .about__content-5 .section__subheader, .about__content-6 .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content-1 .section__header2, .about__content-2 .section__header2, .about__content-3 .section__header2, .about__content-4 .section__header2, .about__content-5 .section__header2, .about__content-6 .section__header2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content-1 p, .about__content-2 p, .about__content-3 p, .about__content-4 p, .about__content-5 p, .about__content-6 p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__content-1 .about__btn, .about__content-2 .about__btn, .about__content-3 .about__btn, .about__content-4 .about__btn, .about__content-5 .about__btn, .about__content-6 .about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
