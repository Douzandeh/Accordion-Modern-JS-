// let header = document.getElementById("header");

// console.log(header);
// header.style.color='red'

// let content = document.getElementsByClassName('content')
// console.log(content[1]);
// content[1].style.fontSize = '20px'

// let pr = document.getElementsByTagName('p')
// console.log(pr[0].innerText);
// pr[0].innerText = "Edited: Pragraph Edited by Js!";

// let header = document.querySelector('#header')
// header.style.color = 'red';

// let pr =document.querySelector('p')
// pr.style.color = 'red';

// let content =document.querySelector('.content')
// content.style.color = 'red';

// let pr = document.querySelectorAll('p')
// pr.forEach(pr =>{
//     pr.style.color = 'red'
// })

// let contents = document.querySelectorAll('.content')
// .Array.contents.forEach(content =>{
//     content.style.color = 'blue'
// })

// let costom_query = document.querySelector(
//   "#header"
// );
// costom_query.style.color = "green";
// costom_query.style.fontSize = '40px'



// let lists = document.querySelectorAll('li');
// lists.forEach(lists =>{
//     console.log(lists.innerText);
// })

// let lists = document.querySelectorAll('li')
// lists.forEach(list => {
    // list.innerText += " new"
    // list.innerHTML += "<span class='badge bg-danger'>new</span>"
    // list.textContent += ' new'
// })
   

// let list = document.querySelector('li')
// console.log(list.innerText);
// console.log(list.textContent);



let lists = document.querySelectorAll('li')

lists.forEach(list =>{
    if(list.textContent.includes(' new')){
        list.innerHTML += "<span class='badge bg-danger'>new</span>"
    }
})