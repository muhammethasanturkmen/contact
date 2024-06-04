let isim = document.querySelector("#inputname");
let soy = document.querySelector("#inputsurname");
let yazisim = document.querySelector("#first-name");
let yaz = document.querySelector("#sur");
let mail = document.querySelector("#mail");
let mailto = document.querySelector("#mailto")
let submit = document.querySelector(".button-one");
let Support = document.querySelector("#Support");
let general = document.querySelector("#general");
let QueryType = document.querySelector("#QueryType");

function handlinkclick(e) {
  e.preventDefault();
  yazisim.innerText = isim.value;
  yaz.innerText = soy.value;
  mailto.innerText = mail.value;
  Support.innerText = QueryType.innerText;
}



submit.addEventListener("click", handlinkclick);
