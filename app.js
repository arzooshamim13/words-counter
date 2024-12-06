let text = document.getElementById("input");
let newText = text.value;
let arr = "";
function btn(){
    arr = text.value;
    console.log(arr.length);
    alert("Your Words Is  " + arr.length)
    text.value = "";
}