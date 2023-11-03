player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;

function send()
{
    get_word = document.getElementById("input_1").value;
    word = get_word.toLowerCase();
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    middle_value = Math.floor(word.lenght/2);
    char2 = word.charAt(middle_value);
    console.log(char2);

    end_value = word.lenght -1;
    console.log(end_value);
    char3 = word.charAt(end_value);
    console.log(char3);

    remove_char1 = word.replace(char1,"_");
    remove_char2 = remove_char1.replace(char2,"_");
    remove_char3 = remove_char2.replace(char3,"_");
    console.log(remove_char3);

    question = "<h4 id='question_display'> Q. "+remove_char3+"</h4>";
    input_box = " <br> Answer: <input type='text' id='input_checkbox'>";
    check_button = "<br><br> <button class='btn btn-success' onclick='check()'>Check</button>";
    column = question + input_box + check_button;
    document.getElementById("output").innerHTML =column;
    document.getElementById("input_1").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        
    }
    if(question_turn =="player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
    }
    if(answer_turn = "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player1_name;
    }

    document.getElementById("input_checkbox").innerHTML = "";

}player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;

function send()
{
    get_word = document.getElementById("input_1").value;
    word = get_word.toLowerCase();
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    middle_value = Math.floor(word.lenght/2);
    char2 = word.charAt(middle_value);
    console.log(char2);

    end_value = word.lenght -1;
    console.log(end_value);
    char3 = word.charAt(end_value);
    console.log(char3);

    remove_char1 = word.replace(char1,"_");
    remove_char2 = remove_char1.replace(char2,"_");
    remove_char3 = remove_char2.replace(char3,"_");
    console.log(remove_char3);

    question = "<h4 id='question_display'> Q. "+remove_char3+"</h4>";
    input_box = " <br> Answer: <input type='text' id='input_checkbox'>";
    check_button = "<br><br> <button class='btn btn-success' onclick='check()'>Check</button>";
    column = question + input_box + check_button;
    document.getElementById("output").innerHTML =column;
    document.getElementById("input_1").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        
    }
    if(question_turn =="player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
    }
    if(answer_turn = "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player1_name;
    }

    document.getElementById("input_checkbox").innerHTML = "";

}player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;

function send()
{
    get_word = document.getElementById("input_1").value;
    word = get_word.toLowerCase();
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    middle_value = Math.floor(word.lenght/2);
    char2 = word.charAt(middle_value);
    console.log(char2);

    end_value = word.lenght -1;
    console.log(end_value);
    char3 = word.charAt(end_value);
    console.log(char3);

    remove_char1 = word.replace(char1,"_");
    remove_char2 = remove_char1.replace(char2,"_");
    remove_char3 = remove_char2.replace(char3,"_");
    console.log(remove_char3);

    question = "<h4 id='question_display'> Q. "+remove_char3+"</h4>";
    input_box = " <br> Answer: <input type='text' id='input_checkbox'>";
    check_button = "<br><br> <button class='btn btn-success' onclick='check()'>Check</button>";
    column = question + input_box + check_button;
    document.getElementById("output").innerHTML =column;
    document.getElementById("input_1").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        
    }
    if(question_turn =="player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
    }
    if(answer_turn = "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player1_name;
    }

    document.getElementById("input_checkbox").innerHTML = "";

}player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;

function send()
{
    get_word = document.getElementById("input_1").value;
    word = get_word.toLowerCase();
    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    middle_value = Math.floor(word.lenght/2);
    char2 = word.charAt(middle_value);
    console.log(char2);

    end_value = word.lenght -1;
    console.log(end_value);
    char3 = word.charAt(end_value);
    console.log(char3);

    remove_char1 = word.replace(char1,"_");
    remove_char2 = remove_char1.replace(char2,"_");
    remove_char3 = remove_char2.replace(char3,"_");
    console.log(remove_char3);

    question = "<h4 id='question_display'> Q. "+remove_char3+"</h4>";
    input_box = " <br> Answer: <input type='text' id='input_checkbox'>";
    check_button = "<br><br> <button class='btn btn-success' onclick='check()'>Check</button>";
    column = question + input_box + check_button;
    document.getElementById("output").innerHTML =column;
    document.getElementById("input_1").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        
    }
    if(question_turn =="player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = " Question Turn : " + player1_name;
    }
    if(answer_turn = "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = " Answer Turn : " + player1_name;
    }

    document.getElementById("input_checkbox").innerHTML = "";

}