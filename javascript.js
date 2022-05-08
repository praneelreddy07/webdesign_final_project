function ach(){
    document.getElementById('con').innerHTML = `<strong style="color:yellow;">University Gold Medalist</strong> in Computer Science`
}
function hob(){
    document.getElementById('con').innerHTML = `Developing <strong style="color:yellow;">New Websites and Coding</strong>`
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



function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }