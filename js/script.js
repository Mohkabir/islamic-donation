$(document).ready(function(){
  $(".fa-bars").click(function(){
    $(".nav_wrapper").slideToggle();


    let togglee = 0;
    navbar.addEventListener("click",function(){
  //    navbar.style.backgroundColor = "#18307F"
      console.log("true")
  
      if (togglee == 0){
        navbar.style.backgroundColor = "#18307F"
      //  navbar.classList.toggle(".addcolor");
      }
    })
    
  });
});

  let navbar = document.querySelector(".fa-bars");
  let toggle = 0;
  
  
