function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});


/* when a user clicks, toggle the 'is-animating' class */
$(document).ready(function () {
$(".heart").on('click touchstart', function(){
  $(this).toggleClass('animating');
});

/*when the animation is over, remove the class*/
$(".heart").on('animationend', function(){
  $(this).toggleClass('animating');
});

  });
