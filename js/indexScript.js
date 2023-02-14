
let button = document.querySelector('.dropbtn');

//Eventlistner that opens menu when clicking on button
button.addEventListener("click", (event) => {
  console.log('open');
  document.getElementById("myDropdown").classList.toggle("show");

});


window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {
    console.log('close');
    
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
      
    for (i = 0; i < dropdowns.length; i++) {
        
      let openDropdown = dropdowns[i];
      
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}