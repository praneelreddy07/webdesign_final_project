function ach(){
    document.getElementById('con').innerHTML = "University Gold Medalist in CS"
}
function hob(){
    document.getElementById('con').innerHTML = "Developing New Websites and Coding"
}
function vol(){
    document.getElementById('con').innerHTML = "Did Voluntary work in blood donation camps"
}


function slidecontent(){
    const button = document.querySelector('.btn') 
  for(let i=0;i<=2;i++){
    if(i=0){
        button.addEventListener("click", () =>{
            document.getElementById('slidercontent').innerHTML = "Worked at Amazon for 2 years as front end developer"
        })
    if(i=1){
        button.addEventListener("click", () =>{
            document.getElementById('slidercontent').innerHTML = "Worked at Amazon for 3 years as front end developer"
        })
    if(i=2){
        button.addEventListener("click", () =>{
            document.getElementById('slidercontent').innerHTML = "Worked at Amazon for 4 years as front end developer"
        })
    i=0
    }

              
    }
}
}
}
