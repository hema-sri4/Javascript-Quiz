var quizdata=[

    {
        question : 'Which framework is related to Javascript ?',
        a:'.net',
        b:'django',
        c:'laver',
        d:'react',
        correct:'d'
    },
    {
        question : 'Which framework is related to CSS ?',
        a:'.net',
        b:'django',
        c:'Bootstrap',
        d:'react',
        correct:'c'
    },
    {
        question : 'Which framework is related to python ?',
        a:'.net',
        b:'django',
        c:'laver',
        d:'react',
        correct:'b'
    },
    {
        question : 'Where is the correct place to insert a JavaScript?',
        a:'The <body> section',
        b:'The <head> section',
        c:'Both a and b ',
        d:'Need not be inserted',
        correct:'c'
    },
    {
        question : 'Which type of JavaScript language is ___',
        a:'Object-Oriented',
        b:'Object-Based',
        c:'Assembly-language',
        d:'High-level',
        correct:'b'
    }
]

var quiz=document.getElementById('quiz');
var answer=document.querySelectorAll('.answer');
var question=document.getElementById('question');
var option_a=document.getElementById('a_value');
var option_b=document.getElementById('b_value');
var option_c=document.getElementById('c_value');
var option_d=document.getElementById('d_value');

var submitbtn=document.getElementById('submit');

var currentQuestion = 0;
var quizScore=0;

loadQuiz();

function loadQuiz(){
    deselect();

    question.innerHTML=quizdata[currentQuestion].question;
    option_a.innerText=quizdata[currentQuestion].a;
    option_b.innerText=quizdata[currentQuestion].b;
    option_c.innerText=quizdata[currentQuestion].c;
    option_d.innerText=quizdata[currentQuestion].d;
    
}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}
submitbtn.addEventListener("click",()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked){
            selectedoption=answer.id;
        }
    })

    if(selectedoption==quizdata[currentQuestion].correct){
        quizScore++;
    }
    currentQuestion++;

    if(currentQuestion==quizdata.length){
        document.getElementById('quizdiv').innerHTML=`<h2>You have answered ${quizScore} correctly out of ${quizdata.length}.</h2> `
    }
    else{
        loadQuiz();
    }
})