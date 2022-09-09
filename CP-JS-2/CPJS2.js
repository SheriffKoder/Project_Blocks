

let Btn1 = document.getElementById('Generate_Button');
Btn1.addEventListener('click', generateImage);

let Btn2 = document.getElementById('Reset_Button');
Btn2.addEventListener('click', reset);

let count = 0;


function generateImage () {

    let image1 = document.createElement('img');
    image1.src = 'https://media1.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif';

    console.log(image1.src);
    image1.setAttribute('id', 'Gen_Image');
    console.log(image1.id);


    let output_div = document.getElementById('Sub_Div2_output');
    output_div.appendChild(image1);

    count++;

}


function reset () {


    for (i=0; i<count; i++) {
        let images = document.getElementById('Gen_Image');
        images.remove();

    }
}