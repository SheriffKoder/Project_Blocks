
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

/*////////////////////////////////////////////////////////////////////*/