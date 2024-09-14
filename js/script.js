// Ativar links do menu

const links = document.querySelectorAll(".header-menu a");

function activateLinks(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activateLinks);

// Ativar itens no orçamento (transfer info page to page by url)

const parameters = new URLSearchParams(window.location.search);

function activateProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activateProduct);

// Perguntas (caixa)

const questions = document.querySelectorAll(".questions button");

function activateQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function questionsEvent(question) {
  question.addEventListener("click", activateQuestion);
}

questions.forEach(questionsEvent);

console.log(questions);

//Galeria de bikcraft

const gallery = document.querySelectorAll(".bike-img img");
const galleryContainer = document.querySelector(".bike-img");

function changeImg(event) {
  const currentImg = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    galleryContainer.prepend(currentImg);
  }

  console.log(media);
}

function galleryEvents(img) {
  img.addEventListener("click", changeImg);
}

gallery.forEach(galleryEvents);

// plugin animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
