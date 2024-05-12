// Add your code here
let submit = document.querySelector("#submit");
let fullName = document.querySelector("#name");
let user = document.querySelector("#username");
let email = document.querySelector("#email");
let dob = document.querySelector("#dob");

let pronouns;
const radio = document.querySelectorAll('input[name="pronouns"]');
radio.forEach((radio) => {
  radio.addEventListener("click", (event) => {
    pronouns = event.target.value;
  });
});

submit.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (
    fullName.value === "" ||
    username.value === "" ||
    email.value === "" ||
    dob.value === "" ||
    pronouns === undefined
  )
    console.log("Must fill out the entire form!");
  else {
    console.log("Name: ", fullName.value);
    console.log("Username: ", username.value);
    console.log("Email ", email.value);
    console.log("Date of Birth: ", dob.value);
    console.log("Pronouns: ", pronouns);
  }
}