let pepole = [
    {name: 'Hossein' , new: true},
    {name: 'Amir' , new: false},
    {name: 'Ali' , new: false},
    {name: 'Amir Reza' , new: true},
]

function create_navbar(pepole) {
    let ul = document.querySelector('ul')
    ul.innerHTML=''
pepole.forEach( p =>{
   if(p.new){
    ul.innerHTML += `<li>${p.name} <span class='badge bg-danger'>new</span></li>`
   }else{
    ul.innerHTML += `<li>${p.name}</li>`
   }
})
}
create_navbar(pepole)