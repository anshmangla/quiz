var result;
var i=0;
var j=1;
var updates;
var times;
const questions = [];
const answers = [];
questions[0] = "1+0:";
answers[0] = 1;
var ques;

function newQuestion(){
    var a = Math.floor(Math.random() * 20)+1;
    var b = Math.floor(Math.random() * 20)+1;
    var c = Math.floor(Math.random() * 4)+1;
    if(c==1){
        result = a+b;
        document.getElementById("question").innerHTML = a + "+" + b + ":";
        ques = a + "+" + b + ":";
    } else if(c==2){
        result = a-b;
        document.getElementById("question").innerHTML = a + "-" + b + ":";
        ques = a + "-" + b + ":";
    } else if(c==3){
        result = a*b;
        document.getElementById("question").innerHTML = a + "*" + b + ":";
        ques = a + "*" + b + ":";
    } else if(c==4){
        if(a>b){
            result = a/b;
            document.getElementById("question").innerHTML = a + "/" + b + ":";
            ques = a + "/" + b + ":";
        } else{
            result = b/a;
            document.getElementById("question").innerHTML = b + "+" + a + ":";
            ques = b + "+" + a + ":";
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
    clearInput();
}

function clearInput() {
    document.getElementById("form").reset();
}

function verify(){
    let answer = document.getElementById("fname");
    if(time<=0 || times<=0){
        alert("Time's up");
    }
    else if((answer.value==1) || (Number(answer.value)==result)){
        score+=1;
        answers[j] = result;
        questions[j] = ques;
        j++;
    }
    
    document.getElementById("score").innerHTML = score;
    i++;
    clearInterval(update);
    clearInterval(updates);
    if(i<=4){
        newQuestion();
        
    }else{
        document.getElementById("main-class").style.display = "none";
        displayTable();
        
    }
    
    document.getElementById("timer").innerHTML = "Time's up";
}

function displayTable() {
    const table = document.createElement("table");
    table.style.margin = "0 auto";
  
    const headerRow = document.createElement("tr");
  
    const questionHeaderCell = document.createElement("th");
    questionHeaderCell.textContent = "Question";
    headerRow.appendChild(questionHeaderCell);
  
    const answerHeaderCell = document.createElement("th");
    answerHeaderCell.textContent = "Answer";
    headerRow.appendChild(answerHeaderCell);
  
    table.appendChild(headerRow);
  
    for (let i = 0; i < questions.length; i++) {
      const row = document.createElement("tr");
  
      const questionCell = document.createElement("td");
      questionCell.textContent = questions[i];
      row.appendChild(questionCell);
  
      const answerCell = document.createElement("td");
      answerCell.textContent = answers[i];
      row.appendChild(answerCell);
  
      table.appendChild(row);
    }
  
    document.body.appendChild(table);
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