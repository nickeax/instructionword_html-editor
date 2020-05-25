const output = document.querySelector("#output");
const input = document.querySelector("#input");

input.addEventListener("keyup", _ => {
  output.innerHTML = input.value;
});
