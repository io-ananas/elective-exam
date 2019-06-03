const data = {};
const form = document.querySelector("form");
("use strict");
/*
//Js validity
form.elements.Email.addEventListener("blur", e => {
  if (form.elements.Email.checkValidity()) {
    console.log("correct");
  } else {
    console.log("please add an email");
    alert("please add an email in order to register");
  }
});
*/
function post(newUsers) {
  fetch("https://testdb-6ac0.restdb.io/rest/oddset-users", {
    method: "post",
    body: JSON.stringify(newUsers),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7cdb0ccac6621685acba52",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.message) {
        //unhappy
        const generalError = data.message;
        const field = data.list[0].field;
        const specificError = data.list[0].message[0];
        // console.log(generalError, specificError, field);
        // console.log("the " + field + specificError);
        //TODO: show error
        alert("The " + field + " " + specificError);
      } else {
        //happy
        form.style.display = "none";
        document.querySelector(".validated-page ").style.display = "block";
        document.querySelector(".validated-page  span").textContent =
          newUsers.name;
      }
      /*form.elements.submit.disabled = false;
      showUsers(data);*/
    });
}

form.addEventListener("submit", e => {
  form.elements.submit.disabled = true;
  e.preventDefault();
  console.log("submitted");
  const obj = {
    name: form.elements.Name.value,
    email: form.elements.Email.value
  };

  post(obj);
});
