player1_name = localStorage.getItem("Player1_name");
player2_name = localStorage.getItem("Player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;



function send(){
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_ans = parseInt(number1) * parseInt(number2);

    question = "<h4>" +  number1 + "X" + number2 + "</h4>";
    input = "<br> Answer : <input id='input_check_box' type='text'>"
    button = "<br><br> <button id='check_button' class='btn btn-info' onclick='check()'>Check</button>"

    row = question + input + button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}





    
