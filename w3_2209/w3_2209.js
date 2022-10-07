

/*////////////////////////////////////////////////////////////////////*/
/* Snackbar */


/*function reset_class(input) {
    input.className = input.className.toggle("show");
    /*something wrong with the definition not remove classname properly
}
*/

function myFunction () {

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.classList.toggle('show');

    setTimeout ( function () {    x.classList.toggle('show');} , 3000 );

    // After 3 seconds, remove the show class from DIV
    //setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


}

/*////////////////////////////////////////////////////////////////////*/
/* scroll with JS */


let test22 = document.getElementById('Div_test');

window.addEventListener("scroll", myFunction2);
//window.onscroll = function() {myFunction()};
//html <element onscroll="myScript">

function myFunction2 () {
    var scrollpercent = document.documentElement.scrollTop;
    console.log(scrollpercent);

    if (scrollpercent > 30) {
        document.getElementById('scroll_text').style.color = "blue";

    }
    else {
        document.getElementById('scroll_text').style.color = "red";
    }

    document.getElementById('scroll_text').innerHTML = "Scroll";

}

function scroll_up () {
    //document.documentElement.scrollTop = 0;
    document.getElementById('Div_test2').scrollTop = 0;

//    element.scrollLeft += 50;

    console.log("hey");

}

/* scrollTop either take value or give value */

/*////////////////////////////////////////////////////////////////////*/

/* animated icon with Font_Awesome using link , js */

function chargebattery() {
    var a;
    a = document.getElementById("charging");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
  }
  chargebattery();
  setInterval(chargebattery, 5000); /* to repeat function */


/*////////////////////////////////////////////////////////////////////*/  
/* JS function to change */


var blendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity"
];

// Returns a Promise that resolves after "ms" Milliseconds
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const displayModes = async () => {

  var i;
  for (i = 0; i < blendModes.length; i++) {

    let elem = document.getElementById("blend_h1");
    elem.style.mixBlendMode = blendModes[i];
    elem.innerText = ` ${blendModes[i]}`;

    if (i >= blendModes.length - 1) {
      i = 0;
    }
    await timer(2000); // then the created Promise can be awaited
  }
};

displayModes();


/*////////////////////////////////////////////////////////////////////*/  
/* JS function to change */


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -250px 0px"

};


//const appearOnScroll = new IntersectionObserver(function, appearOptions);
//function (p1,p2) { entries.forEach( entry =>{} }
const appearOnScroll = new IntersectionObserver(

  function (entries, appearOnScroll) {
    entries.forEach( entry => {

        if (!entry.isIntersecting) {
          return; /* function done */
        }
        else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
                              }
                    );
                                    }, appearOptions);     

  faders.forEach(fader => {
      appearOnScroll.observe(fader); 
  });
