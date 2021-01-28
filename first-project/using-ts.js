var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // adding exclamation tells typescript compiler this expression will never yield null
var input2 = document.getElementById("num2"); // "as HTMLInputElement Type-Casts the expression to assure expreesion returns an html input element"
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
