const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const link = document.querySelector(".link");

const navToggler = () => {
  link.classList.toggle("active");
};

bars.addEventListener("click", navToggler);
xmark.addEventListener("click", navToggler);
