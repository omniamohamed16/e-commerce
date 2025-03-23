function openNav() {

    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.addEventListener("click" , function(e){
       e.stopPropagation()     

    if(e.target.className !== "l1" && e.target.className !== "three-lines" && e.target.className !== "menu-content" ){

    document.getElementById("mySidenav").style.width = "0";}
  })