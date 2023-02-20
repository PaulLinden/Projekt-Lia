
let button = document.querySelector('.dropbtn');

menuStatus = 0;

//Eventlistner that opens menu when clicking on button
button.addEventListener("click", (event) => {
  if(menuStatus == 0){
    console.log('open');
    document.getElementById("myDropdown").classList.toggle("show");
    menuStatus++;
  }else{
    console.log("close");
    document.getElementById('myDropdown').classList.remove('show');
    menuStatus = 0;
  }

});


window.onclick = function (event) {

  if (!event.target.matches('.dropbtn') && menuStatus > 0) {
    console.log("close");
    document.getElementById('myDropdown').classList.remove('show');
    menuStatus = 0;
  }
}