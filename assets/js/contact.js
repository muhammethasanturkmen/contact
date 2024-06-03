let isim = document.querySelector(".input-name");
let soy = document.querySelector(".input-surname");
let yazİsim = document.querySelector(".first-name");
let yazSoy = document.querySelector(".sur-name");
let submit = document.querySelector(".button-one");

function handlinkclick(e) {
  e.preventDefault();
  yazİsim.innerText = isim.value;
  yazSoy.innerText = soy.value;
}

submit.addEventListener("click", handlinkclick);
