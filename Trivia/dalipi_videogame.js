var questions = [
    {category:"Scienza", question:"Qual è il pianeta più grande?", answers:["Terra","Marte","Giove","Venere"], correct:2},
    {category:"Scienza", question:"Quale gas è necessario per respirare?", answers:["Ossigeno","Azoto","Anidride carbonica","Idrogeno"], correct:0},
    {category:"Storia", question:"In che anno cadde l'Impero Romano d'Occidente?", answers:["476","1492","800","1066"], correct:0},
    {category:"Storia", question:"Chi ha scoperto l'America?", answers:["Marco Polo","Cristoforo Colombo","Magellano","Vasco da Gama"], correct:1},
    {category:"Geografia", question:"Qual è la capitale della Francia?", answers:["Berlino","Parigi","Roma","Madrid"], correct:1},
    {category:"Geografia", question:"Quale fiume attraversa Parigi?", answers:["Senna","Tamigi","Po","Danubio"], correct:0},
    {category:"Scienza", question:"Quale organo pompa il sangue in tutto il corpo?", answers:["Fegato","Polmoni","Cuore","Reni"], correct:2}
  ];
  
  var score = 0;
  var available = questions.slice();
  var current;
  var categoryEl = document.getElementById("category");
  var questionEl = document.getElementById("question");
  var answersEl = document.getElementById("answers");
  var messageEl = document.getElementById("message");
  var scoreEl = document.getElementById("score");
  var nextBtn = document.getElementById("nextBtn");
  
  function loadQuestion() {
    if(available.length===0){ endQuiz(); return; }
    answersEl.innerHTML = "";
    messageEl.innerText = "";
  
    var i = Math.floor(Math.random()*available.length);
    current = available[i];
    available.splice(i,1);
  
    categoryEl.innerText = "Categoria: " + current.category;
    questionEl.innerText = current.question;
  
    for(var j=0;j<current.answers.length;j++){
      var btn = document.createElement("button");
      btn.innerText = current.answers[j];
      btn.addEventListener("click", function(ansIndex){
        return function(){ checkAnswer(ansIndex); }
      }(j));
      answersEl.appendChild(btn);
    }
  }
  
  function checkAnswer(index){
    if(index===current.correct){ messageEl.innerText="Risposta corretta!"; score++; }
    else{ messageEl.innerText=" Risposta sbagliata!"; }
  }
  
  function endQuiz(){
    categoryEl.innerText="";
    questionEl.innerText=" Quiz terminato!";
    answersEl.innerHTML="";
    messageEl.innerText="Punteggio finale: "+score+"/7";
    nextBtn.style.display="none";
  }
  
  nextBtn.addEventListener("click", loadQuestion);
  loadQuestion();
  