// !054
// let pepole = [
//     {name: 'Hossein' , new: true},
//     {name: 'Amir' , new: false},
//     {name: 'Ali' , new: false},
//     {name: 'Amir Reza' , new: true},
// ]

// function create_navbar(pepole) {
//     let ul = document.querySelector('ul')
//     ul.innerHTML=''
// pepole.forEach( p =>{
//    if(p.new){
//     ul.innerHTML += `<li>${p.name} <span class='badge bg-danger'>new</span></li>`
//    }else{
//     ul.innerHTML += `<li>${p.name}</li>`
//    }
// })
// }
// create_navbar(pepole)

// !055
// let header = document.querySelector('#header')

// console.log(header.getAttribute('id'));
// header.setAttribute('title' , 'my header title')

// let links = document.querySelectorAll('a')
// links.forEach(link =>{
//     href = link.getAttribute('href')
//     link.setAttribute('href', href.replace('http://', 'https://'))
//     link.setAttribute('data-portocol' , 'ssl')
// })

// !056
// let links = document.querySelectorAll('a')

// links.forEach(link => {
// link.setAttribute('data-portocol' , 'ssl')
// let href = link.href
// link.href = href.replace('http://' , 'https://');
// console.log(link.dataset.protocol);
// link.dataset.protocol2 = 'SSL'
// link.setAttribute('style' , 'color: red ; font-size:30px')
// link.style.color = 'red'

// })

// !057
// let header = document.querySelector("#header");
// header.classList.add("mb-5");
// header.classList.remove("btn-success");
// header.classList.toggle("btn-danger");

// let lists = document.querySelectorAll('li')

// lists.forEach(list =>{
//     if(list.textContent.includes('success')){
//         list.classList.add('text-success')
//     }
//     if(list.textContent.includes('danger')){
//         list.classList.add('text-danger')
//     }

// })

// !058

// let ul = document.querySelector("ul");
// ! Qalateh
// ul.children.forEach(li => {
//     console.log(li);
// });
// * Dorost
// Array.from(ul.children).forEach((li, index) => {
//     li.style.color = 'red'
//     if(index % 2 ==0){
//     li.style.color = 'red'

//     }else{
//     li.style.color = 'green'

//     }
// });

// console.log(ul.parentElement);
// ul.parentElement.style.fontSize= '25px'

// ul.previousElementSibling.style.color= 'red'
// ul.nextElementSibling.style.color = 'red'

// !059

// let btn = document.querySelector('button')
// btn.addEventListener('click' , e =>{
//     e.target.textContent = 'Clicked!';
//     e.target.classList.add('btn-danger')
//     alert('Hossein Douzandeh')
// })

// ? Online and offline internet event practice

// let el = document.createElement("div");

// document.querySelector(".content").prepend(el);

// window.addEventListener("online", (event) => {
//   el.textContent = 'online'
//   el.className = 'alert'
//   el.classList.add('alert-success')
// });

// window.addEventListener("offline", (event) => {
//   el.textContent = 'offline'
//   el.className = 'alert'
//   el.classList.add('alert-danger')
// });




// !061