var result;
var i=0;
var updates;
var times;

function newQuestion(){
    var a = Math.floor(Math.random() * 20)+1;
    var b = Math.floor(Math.random() * 20)+1;
    var c = Math.floor(Math.random() * 4)+1;
    if(c==1){
        result = a+b;
        document.getElementById("question").innerHTML = a + "+" + b + ":";
    } else if(c==2){
        result = a-b;
        document.getElementById("question").innerHTML = a + "-" + b + ":";
    } else if(c==3){
        result = a*b;
        document.getElementById("question").innerHTML = a + "*" + b + ":";
    } else if(c==4){
        if(a>b){
            result = a/b;
            document.getElementById("question").innerHTML = a + "/" + b + ":";
        } else{
            result = b/a;
            document.getElementById("question").innerHTML = b + "+" + a + ":";
        }
    }
    
    times=20;
    updates = setInterval(function () {
        document.getElementById("timer").innerHTML = times+"s";
            
        if(times<=0){
            clearInterval(updates);
            document.getElementById("timer").innerHTML = "Time's up";
        }
        times=times-1;
    }, 1000);
}

function verify(){
    let answer = document.getElementById("fname");
    if(time<=0 || times<=0){
        alert("Time's up");
    }
    else if((answer.value==1) || (Number(answer.value)==result)){
        score+=1;
    }
    document.getElementById("score").innerHTML = score;
    i++;
    clearInterval(update);
    clearInterval(updates);
    if(i<=4){
        newQuestion();
    }else{
        document.getElementById("main-class").innerHTML="QUIZ FINISHED and you scored "+score+" points";
    }
    
    document.getElementById("timer").innerHTML = "Time's up";
}

var time = 20;
var score = 0;

var update = setInterval(function () {
document.getElementById("timer").innerHTML = time+"s";
            
    if(time<=0){
        clearInterval(update);
        document.getElementById("timer").innerHTML = "Time's up";
    }
    time=time-1;
}, 1000);




var form = document.getElementById("form");
function submitForm(event){

    //Preventing page refresh
    event.preventDefault();
    verify();
 }
form.addEventListener("submit",submitForm);
// document.getElementById("score").addEventListener("click",verify);
// else if(Number(answer.value)==result){
//     alert("correct answer");
//     score+=1;
// }