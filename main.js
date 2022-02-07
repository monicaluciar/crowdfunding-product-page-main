const menu = document.querySelector(".menu-box");
const menuDesktop = document.querySelector(".menu-horizontal");
// menu.classList.add("open");
// menu.addEventListener("click", () => menuV.classList.toggle("open"));
console.log(menu);

// AGREGAR UN NUEVO ELEMENTO AL MENU HORIZONTAL
// let menulist = document.querySelector(".menu-horizontal");
// let link = document.createElement("a");
// link.textContent = "Contact";
// menulist.appendChild(link);

//CREAR MENU HORIZONTAL CON JS
const MenuList = ["About", "Discover", "Get Starter"];
console.log(MenuList);
MenuList.forEach((item) => {
  const link = document.createElement("a");
  link.textContent = item;
  menuDesktop.appendChild(link);
});

let ButtonMenu = document.querySelector("#bar-menu");

ButtonMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
  const clases = menu.classList;

  console.log(clases);
  if ((clases[1] = "open")) {
    ButtonMenu.style.background =
      "url(/images/icon-close-menu.svg) no-repeat center";
  }
});

// let rewards = document.querySelectorAll(".reward");
// console.log(rewards);
// let child = "5";
// rewards.forEach((item) => {
//   let child = item.firstChild;
//   if ((child.innerHTML = "0")) {
//     const R = child.innerHTML;
//     console.log(this);
//   }
// });

let wrapper = document.querySelectorAll(".wrapper.card");
wrapper.forEach((item) => {
  console.log(item.innerHTML);
});

//abrir y cerrar modal
let btnModal = document.querySelector("#btn-project");
let modal = document.querySelector(".modal-container");
btnModal.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.style.opacity = "1";
});
let btnclose = document.querySelector(".modal-close");
btnclose.addEventListener("click", () => {
  modal.style.display = "none";
  modal.style.opacity = "0";
});
