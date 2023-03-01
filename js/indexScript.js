
let button = document.querySelector('.dropbtn');

menuStatus = 0;

//Eventlistner that opens menu when clicking on button
button.addEventListener("click", (event) => {
  if(menuStatus == 0){
    document.getElementById("myDropdown").classList.toggle("show");
    menuStatus++;
  }else{
    document.getElementById('myDropdown').classList.toggle('show');
    menuStatus = 0;
  }

});


window.onclick = function (event) {

  if (!event.target.matches('.dropbtn') && menuStatus > 0) {
    document.getElementById('myDropdown').classList.toggle('show');
    menuStatus = 0;
  }
}