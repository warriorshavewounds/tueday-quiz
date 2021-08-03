//  Question bank
let questionBank= [
    {
        question : 'A variable that has not been assigned a value is of type?',
        option : ['defined','undefined','refined','unrefined'],
        answer : 'undefined'
    },
    {
        question : 'The intentional absence of any object value in javaScript is represented by?',
        option : ['none','null','no','nill'],
        answer : 'null'
    },
    {
        question : 'This value indicates that a value is not a legitimate number?',
        option : ['unnumbered','NeN','NuN','NaN'],
        answer : 'NaN'
    },
    {
        question : 'How do you tell git to start tracking a directory?',
        option : ['git track','git plus','git init','git home'],
        answer : 'git init'
    },
    {
        question : '_________ languages are usually interpreted at runtime rather than compiled.',
        option : ['Printing','Linting','Rendering','Scripting'],
        answer : 'Scripting'
    },
    {
        question : 'A Full stack application built with PostgreSQL, Express, Node.js & React is commonly refered to as been done with what stack?',
        option : ['PERN','MERN','STEM','PERM'],
        answer : 'PERN'
    },
    {
        question : 'kwiklab is an online resource known for creating instances of?',
        option : ['Virtual Machines','Printing Machines','Machine learning','Web development'],
        answer : 'Virtual Machines'
    }
]

let question= document.getElementById('question');
let quizContainer= document.getElementById('quiz-container');
let scorecard= document.getElementById('scorecard');
let option0= document.getElementById('option0');
let option1= document.getElementById('option1');
let option2= document.getElementById('option2');
let option3= document.getElementById('option3');
let next= document.querySelector('.next');
let points= document.getElementById('score');
let span= document.querySelectorAll('span');
let i=0;
let score= 0;

//function to display questions
function displayQuestion(){
    for(let a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    let answerBank= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion(); 