let header = document.getElementById("header");

console.log(header);
header.style.color='red'

let content = document.getElementsByClassName('content')
console.log(content[1]);
content[1].style.fontSize = '20px'




let pr = document.getElementsByTagName('p')
console.log(pr[0].innerText);
pr[0].innerText = "Edited: Pragraph Edited by Js!"