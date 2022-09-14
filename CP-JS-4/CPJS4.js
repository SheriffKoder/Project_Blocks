

function Take_Input (x) {

    let input = x.value;
    //console.log(input);

    if (input == 'red') {
        console.log('Done Red');
    }
    else if (input == 'reset' ) {
        console.log('Reset 2');
    }
    else if (input == 'random') {
        console.log('random 2');

    }


}


let all_buttons = document.getElementsByClassName('Button');
console.log(all_buttons);
console.log(all_buttons[0].classList[1]);

set_to_red();

function set_to_red () {

    console.log ("set to red [start]");

    for (i=0; i< all_buttons.length ; i++){

        let currentButton = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(currentButton);
        all_buttons[i].classList.add('RedButton');
    }



}