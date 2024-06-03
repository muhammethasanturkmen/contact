let isim = document.querySelector(".inputname");
let soy = document.querySelector(".input-surname");
let yazİsim = document.querySelector(".first-name");
let yazSoy = document.querySelector(".surname");
let submit = document.querySelector(".button-one");

function handlinkclick() {
  yazİsim.innerText = isim.value;
}

submit.addEventListener("click", handlinkclick);
