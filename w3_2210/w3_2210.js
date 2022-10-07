/*////////////////////////////////////////////////////////////////////*/  
/* overlay effect */

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
  

/*////////////////////////////////////////////////////////////////////*/  
/* on fullscreen style */

  var elem = document.documentElement;

  function openFullscreen() {
    if (elem.requestFullscreen) { //exitFullscreen
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }


/*////////////////////////////////////////////////////////////////////*/


