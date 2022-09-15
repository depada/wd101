let form = document.getElementById("form");
const retriveEntries = () => {
  let entries = localStorage.getItem("userEntry");

  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};

let Entries = retriveEntries();

const displayEntries = () => {
  const entries = retriveEntries();

  const rows = entries
    .map((entry) => {
      const name = `<td class="td">${entry.name}</td>`;
      const email = `<td class="td">${entry.email}</td>`;
      const password = `<td class="td">${entry.password}</td>`;
      const dob = `<td class="td">${entry.dob}</td>`;
      const accseptConditions = `<td class="td">${entry.accseptConditions}</td>`;

      const row = `<tr>${name} ${email} ${password} ${dob} ${accseptConditions}</tr>`;
      return row;
    })
    .join("\n");

  let tableDiv = document.getElementById("tableDiv");

  // <th class="th">Name</th> inside oneMore head for name
  tableDiv.innerHTML = `<table class="table" border="2">
  <tr>
    <th class="th">Name</th>
    <th class="th">Email</th>
    <th class="th">Password</th>
    <th class="th">Dob</th>
    <th class="th">Accepted terms?</th>
  </tr>
    ${rows}
  </table>`;
};
// dajgbrjibaegoijdfnjewndsjand




// nrgjanfofmewpfkamndklvnekdsfewf
// ewfewg
// rwsg
// rwsgg
// ewrg
// rwhetjhn
// tyn
//
// dgh
const saveUserFrom = (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let accseptConditions = document.getElementById("agree").checked;

  let entry_obj = {
    name,
    email,
    password,
    dob,
    accseptConditions,
  };

  Entries.push(entry_obj);

  localStorage.setItem("userEntry", JSON.stringify(Entries));

  displayEntries();
};

form.addEventListener("submit", saveUserFrom);

displayEntries();

function getAge(today, birthDate) {

  var cur = today.getFullYear() - birthDate.getFullYear();
  var mon = today.getMonth() - birthDate.getMonth();
  if (mon < 0 || (mon === 0 && today.getDate() < birthDate.getDate())) {
    cur--;
  }
  return cur;
}

let pavan = document.getElementById("dob");

pavan.addEventListener("change", () => {
  let [year, month, date] = document.getElementById("dob").value.split("-");

  let dob = new Date(year, month, date);
  let Today = new Date();

  age = getAge(Today, dob);

  pavan.style.border = "2px solid rgba(0, 0, 0, 0.4)";
  if (age < 18 || age > 55) {
    pavan.setCustomValidity("Your age is not lies between 18 and 55");
    pavan.style.border = "2px solid red";
    return;
  } else {
    pavan.setCustomValidity("");
  }
});

const mail = document.getElementById("email");

mail.addEventListener("input", () => validate(mail));

function validate(ele) {
  if (ele.validity.typeMismatch) {
    ele.setCustomValidity("The Email is not in the right format!!!");
    ele.reportValidity();
  } else {
    ele.setCustomValidity("");
  }
}