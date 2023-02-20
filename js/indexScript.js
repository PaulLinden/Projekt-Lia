window.onclick = function(event) {
  console.log(event.target);
  
  if (event.target.matches('.dropbtn') || event.target.matches('.hamburger')) {
    console.log('open');
    document.getElementById("myDropdown").style.display = 'block';
     
  }
  else {
    console.log('close');

    document.getElementById("myDropdown").style.display = 'none';
  }
}