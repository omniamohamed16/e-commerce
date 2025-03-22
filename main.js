function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.addEventListener("click" , function(e){
       e.stopPropagation()     

    if(e.target.className !== "l1" && e.target.className !== "three-lines" && e.target.className !== "sidenav" ){

        console.log("kk")
    document.getElementById("mySidenav").style.width = "0";}
  })