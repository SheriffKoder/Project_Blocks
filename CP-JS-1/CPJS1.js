

//age_in_days();


function age_in_days () {

    let input1 = prompt("What is your age ?", "....");
    input2 = input1 * 365 ;

    console.log(input1);
    console.log(input2);

    let output_text = document.createElement('p');
    output_text.innerHTML = "you entered " + input1 + " years, which will be " + input2 + " days ";
    output_text.setAttribute("class", "output_text_class");

    document.getElementById("click_button").remove();

    document.getElementById("AND_BOX").appendChild(output_text);

    let box2 = document.getElementById("AND_BOX");
    let Class_list = box2.classList;
    console.log(Class_list);
    box2.classList.remove("AND_BOX_UNLIGHTENED")
    box2.classList.add("AND_BOX_LIGHTENED");
    console.log(Class_list);


}
