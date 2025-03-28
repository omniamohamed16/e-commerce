function openNav() {

    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.addEventListener("click" , function(e){
    e.stopPropagation()

    if(e.target.className !== "l1" && e.target.className !== "three-lines" && e.target.className !== "Mills-title"  && e.target.className !== "menu-content" ){

    document.getElementById("mySidenav").style.width = "0";}
  })

  menuLinks = document.querySelectorAll(".vertical-menu a")

  menudiv = document.querySelectorAll(".menu-content div")

  menudiv.forEach(element => {
    element.onclick= function(e){e.stopPropagation()}
  });
  
  menuLinks.forEach(element => {
    
    element.onclick= function(e){e.stopPropagation()}
  });
  
