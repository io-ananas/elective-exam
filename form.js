const data = {};

("use strict");

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
      form.elements.submit.disabled = false;
      showUsers(data);
    });
}

function get() {
  fetch("https://testdb-6ac0.restdb.io/rest/oddset-users", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5c7cdb0ccac6621685acba52",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    //.then(e => console.log(e));
    .then(data => {
      data.forEach(showUsers);
    });
}

function showUsers(oddsetUsers) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h1").textContent = oddsetUsers.name;
  clone.querySelector("h2").textContent = oddsetUsers.email;

  document.querySelector("main").appendChild(clone);
}

get();

const form = document.querySelector("form");
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
