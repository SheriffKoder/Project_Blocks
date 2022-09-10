

let object_status = {

    'start': 0 ,
    'reset': 1 ,
    'player_selection': 'none',

}

//console.log(object_status['reset']);


function start () {

    if (object_status['reset']==1 && object_status['start'] == 0) {

        object_status['reset']==0;
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

        Record();

    }
}

start();

function Record () {

    rock.addEventListener('click', Know_ID);
    paper.addEventListener('click', Know_ID);
    sci.addEventListener('click', Know_ID);
}

/*
    sci.addEventListener('click', Know_ID);
    console.log(evt.currentTarget.id);
*/

function Know_ID (evt) {
        console.log(evt.currentTarget.id);
        object_status['player_selection'] = evt.currentTarget.id;
        console.log(object_status['player_selection']);

}

//add bot random selection, random number, from array return, 
//have both now to, decide by them a score, score will determine output message


