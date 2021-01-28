const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // adding exclamation tells typescript compiler this expression will never yield null
const input2 = document.getElementById("num2") as HTMLInputElement; // "as HTMLInputElement Type-Casts the expression to assure expreesion returns an html input element"

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
