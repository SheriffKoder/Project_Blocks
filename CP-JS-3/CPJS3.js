

let object_status = {

    'reset': 1 ,
    'start': 0 ,
    'played': 0,
    'player_selection': 'none',
    'bot_selection': 'none',

}

let object_status_backup = {

    'reset': 1 ,
    'start': 0 ,
    'played': 0,
    'player_selection': 'none',
    'bot_selection': 'none',

}


console.log(object_status_backup);


//console.log(object_status['reset']);


function start () {

    console.log('hi');

    if (object_status['reset']==1 && object_status['start'] == 0) {

        object_status['reset'] = 0;
        object_status['start'] = 1;

        let rock = document.createElement('img');
        let paper = document.createElement('img');
        let sci = document.createElement('img');

        rock.src = './rock.jpg';
        paper.src = './paper.jpg';
        sci.src = './sci.jpg';

        rock.id = 'rock';
        paper.id = 'paper';
        sci.id = 'sci';


        let destination_div = document.getElementById('Content_Div');

        destination_div.appendChild(rock);
        destination_div.appendChild(paper);
        destination_div.appendChild(sci);


        Record_Player_Selection();
        
    

    }
}

    
    

/*///////////////////////////////////////////////////////*/
/* player part //////////////////////////////////////////*/
function Record_Player_Selection () {

    /*add event listener does not respect the if condition */
    rock.addEventListener('click', Know_ID);
    paper.addEventListener('click', Know_ID);
    sci.addEventListener('click', Know_ID);

    

}

/*
    sci.addEventListener('click', Know_ID);
    console.log(evt.currentTarget.id);
*/

function Know_ID (evt) {

    if (object_status['played'] == 0) {

        //console.log(evt.currentTarget.id);
        object_status['player_selection'] = evt.currentTarget.id;
        //console.log(object_status['player_selection']);

        Compute_Bot_Selection();
    }

}

//add bot random selection, random number, from array return, 
//have both now to, decide by them a score, score will determine output message


/*///////////////////////////////////////////////////////*/
/* bot part /////////////////////////////////////////////*/

function Compute_Bot_Selection () {

    let random_number = Math.floor ( Math.random() * 3 );
    //console.log(random_number);

    let random_card = ['rock', 'paper', 'sci'][random_number];
    //console.log(random_card);

    object_status['bot_selection'] = random_card;
    //console.log(object_status['bot_selection']);

    let Decision_Result = Decide_Winner (object_status['player_selection'], object_status['bot_selection']);
    let Message_Properties = Decide_Message (Decision_Result);
    Output_Message(Message_Properties);
}


/*///////////////////////////////////////////////////////*/
/* Decide Winner ////////////////////////////////////////*/

function  Decide_Winner (player, bot) {

    console.log(player);
    console.log(bot);

    object_status['played'] = 1;
    //console.log(object_status['played']);

    let result_object = {
        'rock': {'rock': 0.5, 'paper': 0, 'sci': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'sci': 0},
        'sci': {'rock': 1, 'paper': 0, 'sci': 0.5},

    }

    return (result_object[player][bot]);

}

/* Output Message ////////////////////////////////////////*/
function Decide_Message (input) {

    let output_message = {
        '1': {'message': 'won', 'color': 'green'},
        '0': {'message': 'lost', 'color': 'red'},
        '0.5': {'message': 'tied', 'color': 'yellow'},


    }


    //console.log(output_message[input]);
    return output_message[input];
}

function Output_Message (object) {

    let target = document.getElementById('Message_Div');

    console.log(object);

    target.innerHTML = '<p style="color:' +object['color']+ '">' +object['message']+ '</p>';
    target.setAttribute('class', 'Message_Div_P');



}

/*///////////////////////////////////////////////////////*/
/* Reset Functionality //////////////////////////////////*/

function Reset_Functionality () {

    console.log("reset");

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('sci').remove();
    document.getElementById('Message_Div').innerHTML = '';

    object_status = object_status_backup;
    console.log(object_status);

}
