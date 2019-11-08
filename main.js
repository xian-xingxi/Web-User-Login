//Web Dev User Login Master 
"use strict";

//Event Listener
document.getElementById("btn1").addEventListener("click", Login);

//Event Functions
function Login() {
    //Store Inputs
    let input1 = document.getElementById("in1").value;
    let input2 = document.getElementById("in2").value;

    //Correct Username
    if (input1 == 'CS.Login61' && input2 == 'PassWord1234') {
        //Output for Correct Login
        document.getElementById('results1').innerHTML = "Sign In Successful";
        document.getElementById('results1').style.color = "green";
        document.getElementById('results1').style.fontSize = "20px";
    } /* Incorrect Username and PassWord */
    else if (input1 != 'CS.Login61' && input2 != "PassWord1234") {
        //Output for Incorrect Login
        document.getElementById("results1").innerHTML = "Sign In Unsuccessful! (Invalid Username and Password)";
        document.getElementById("results1").style.color = "red";
        document.getElementById('results1').style.fontSize = "20px";
    } /* Incorrect Username */
    else if (input1 != 'CS.Login61') {
        //Output for Incorrect Login
        document.getElementById("results1").innerHTML = "Sign In Unsuccessful! (Invalid Username)";
        document.getElementById('results1').style.color = "red";
        document.getElementById('results1').style.fontSize = "20px";
    } /* Incorrect PassWord */
    else {
        //Output for Incorrect Login
        document.getElementById("results1").innerHTML = "Sign In Unsuccessful! (Invalid Password)";
        document.getElementById("results1").style.color = "red"
        document.getElementById('results1').style.fontSize = "20px";
    }
}