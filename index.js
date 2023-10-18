class MathQuiz {
    constructor(){
        this.result=0;
        this.i=0;
        this.j=1;
        this.updates;
        this.times=20;
        this.questions = [];
        this.answers = [];
        this.ques;
        this.score=0;
        this.timeIsUp = false;
  
        this.form = document.getElementById("form");
        this.timer = document.getElementById("timer");
        this.question = document.getElementById("question");
        this.scoreDisplay = document.getElementById("score");
  
        this.form.addEventListener("submit", this.verify.bind(this));
  
        this.updateTimer();
    }
  
    newQuestion(){
        this.timeIsUp = false;
        const a = Math.floor(Math.random() * 20)+1;
        const b = Math.floor(Math.random() * 20)+1;
        const c = Math.floor(Math.random() * 4)+1;
        if(c==1){
            this.result = a+b;
            this.question.innerHTML = a + "+" + b + ":";
            this.ques = a + "+" + b + ":";
        } else if(c==2){
            this.result = a-b;
            this.question.innerHTML = a + "-" + b + ":";
            this.ques = a + "-" + b + ":";
        } else if(c==3){
            this.result = a*b;
            this.question.innerHTML = a + "*" + b + ":";
            this.ques = a + "*" + b + ":";
        } else if(c==4){
            if(a>b){
                this.result = a/b;
                this.question.innerHTML = a + "/" + b + ":";
                this.ques = a + "/" + b + ":";
            } else{
                this.result = b/a;
                this.question.innerHTML = b + "/" + a + ":";
                this.ques = b + "/" + a + ":";
            }
        }
  
        this.times=20;
        this.clearInput();
        this.updateTimer();
    }
  
    clearInput(){
        this.form.reset();
    }
  
    verify(event){
        event.preventDefault();
        if (this.timeIsUp) {
            alert("Time's up");
        } else {
            const answer = document.getElementById("fname").value;
            if (Number(answer) === this.result) {
                this.score += 1;
                this.answers[this.j] = this.result;
                this.questions[this.j] = this.ques;
                this.j++;
            }
        }
        this.scoreDisplay.innerHTML = this.score;
        this.i++;
        if (this.i <= 4) {
            this.newQuestion();
        } else {
            document.getElementById("main-class").style.display = "none";
            this.displayTable();
        }
        
    }
  
    displayTable() {
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
  
        for (let i = 0; i < this.questions.length; i++) {
            const row = document.createElement("tr");
  
            const questionCell = document.createElement("td");
            questionCell.textContent = this.questions[i];
            row.appendChild(questionCell);
  
            const answerCell = document.createElement("td");
            answerCell.textContent = this.answers[i];
            row.appendChild(answerCell);
  
            table.appendChild(row);
        }

        const header = document.createElement("h1");
        header.textContent = `Your score is ${this.score} points`;
  
        document.body.appendChild(table);
        document.body.appendChild(header);
    }
  
    updateTimer() {
        this.time = 20;
        if (this.updates) {
            clearInterval(this.updates);
        }
  
        this.updates = setInterval(() => {
            this.timer.innerHTML = this.time+"s";
  
            if (this.time <= 0) {
                clearInterval(this.updates);
                this.timer.innerHTML = "Time's up";
                this.timeIsUp = true;
            }
            this.time--;
        }, 1000);
    }
  }
  
  const mathQuiz = new MathQuiz();
  mathQuiz.newQuestion();