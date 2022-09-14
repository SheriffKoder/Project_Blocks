

let all_buttons = document.getElementsByClassName('Button');
console.log(all_buttons);
console.log(all_buttons[0].classList[1]);

let all_buttons_backup = [];

for (i = 0 ; i< all_buttons.length; i++) {
    all_buttons_backup[i] = all_buttons[i].classList[1];

}
console.log(all_buttons_backup);


function Take_Input (x) {

    let input = x.value;
    //console.log(input);

    if (input == 'red') {
        console.log('Done Red');
        set_to_red();

    }
    else if (input == 'reset' ) {
        console.log('Reset 2');
        reset_buttons();
    }
    else if (input == 'random') {
        console.log('random 2');
        Random_Color();

    }


}





function set_to_red () {

    console.log ("set to red [start]");

    for (i=0; i< all_buttons.length ; i++){

        let currentButton = all_buttons[i].classList[1];
        all_buttons[i].classList.remove(currentButton);
        all_buttons[i].classList.add('RedButton');
    }

    console.log ("set to red [end]");

}


function reset_buttons () {

    console.log (" reset [start]");

    for (i=0; i< all_buttons.length ; i++){

        Remove_Style (i);

        //console.log(all_buttons_backup[i]);
        let original_button = all_buttons_backup[i];
        all_buttons[i].classList.add(original_button);

    }
    console.log (" reset [end]");

}


function Random_Color () {


    console.log (" random [start]");

    for (i=0; i< all_buttons.length ; i++){

        let x = Math.floor (Math.random() * all_buttons_backup.length);
        console.log (x);    

        Remove_Style(i);

        //console.log(all_buttons_backup[x]);
        let new_button = all_buttons_backup[x];
        all_buttons[i].classList.add(new_button);

    }
    console.log (" random [end]");

}


function Remove_Style (x) {
    let currentButton = all_buttons[x].classList[1];
    //console.log(currentButton);
    all_buttons[x].classList.remove(currentButton);
}