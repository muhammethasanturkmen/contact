let isim = document.querySelector("#inputname");
let soy = document.querySelector("#inputsurname");
let yazisim = document.querySelector("#first-name");
let yaz = document.querySelector("#sur");
let mail = document.querySelector("#mail");
let mailto = document.querySelector("#mailto")
let submit = document.querySelector(".button-one");
let Support = document.querySelector("#Support");
let general = document.querySelector("#general");
let subject = document.querySelector("#subject");
let QueryType = document.querySelector("#QueryType");
let Message = document.querySelector("#Message");
let generaltext = document.querySelector("#generaltext");
let Supportext = document.querySelector("#Supportext");



function handlinkclick(e) {
  e.preventDefault();
  document.getElementById("todolist").style.display = "flex";
  document.getElementById("alert").style.display = "flex";
  yazisim.innerText = isim.value;
  yaz.innerText = soy.value;
  mailto.innerText = mail.value;
  Message.innerText = subject.value;

  if (general.checked === true) {
    QueryType.innerText = generaltext.innerText;
  } else if (Support.checked === true) {
    QueryType.innerText = Supportext.innerText;
  } else {
    QueryType.innerText = "";
  }


}



submit.addEventListener("click", handlinkclick);
