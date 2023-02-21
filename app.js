const firebaseConfig = {
    apiKey: "AIzaSyBWsTNFMRVOCUD_eOZWeBAqzSLV7XPf-QI",
    authDomain: "quiz-app-b8193.firebaseapp.com",
    projectId: "quiz-app-b8193",
    storageBucket: "quiz-app-b8193.appspot.com",
    messagingSenderId: "876113324609",
    appId: "1:876113324609:web:80649faa5809907cbef4c0",
    measurementId: "G-2KG2PE2MZF"
  };

  var frb=firebase.initializeApp(firebaseConfig);
  console.log(frb);

var quizData = [
    {
        question: "What Is JavaScript?",
        a: "client side",
        b: "html",
        c: "server language",
        d: "machine language",
        correct: "a",
    },
    {
        question: "What Is The Full Meaning Of CSS?",
        a: "Cascading Style Server",
        b: "Cascade Style Surface",
        c: "Cascading Surface Sheet",
        d: "Cascading Style Sheets",
        correct: "d",
    },
    {
        question: "What Is The Most Popular Programming Language In 2022?",
        a: "Java",
        b: "Php",
        c: "Html",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "What Is The Capital of Pakistan?",
        a: "Karachi",
        b: "Islamabad",
        c: "Lahore",
        d: "Quetta",
        correct: "b",
    },
    {
        question: "What Is The Largest land animal?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Rhinocerous",
        correct: "a",
    },
    {
        question: "What Is The Tallest Mountain On The Earth?",
        a: "Mount K2",
        b: "Mount Nanga Parbat",
        c: "Mount Gasherbrum",
        d: "Mount Everest",
        correct: "d",
    },
    {
        question: "What Is The World's Largest Coral Reef System?",
        a: "The Great Barrier Reef",
        b: "The Maldives Coral Reef",
        c: "The Red Sea Coral Reef",
        d: "The Florida Reef",
        correct: "a",
    },
    {
        question: "What Is The Smallest Country In The World By Land Area?",
        a: "Monaco",
        b: "San Marino",
        c: "Vatican City",
        d: "",
        correct: "c",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Mars",
        b: "Saturn",
        c: "Jupiter",
        d: "Uranus",
        correct: "c",
    },
    {
        question: "What is the Smallest planet in our solar system?",
        a: "Mars",
        b: "Venus",
        c: "Mercury",
        d: "Neptune",
        correct: "c",
    },
]

var currInd=0;
var score=0;
var eleQues = document.getElementById("ques");
var eleOptA = document.getElementById("optA");
var eleOptB = document.getElementById("optB");
var eleOptC = document.getElementById("optC");
var eleOptD = document.getElementById("optD");
var radioEles = document.getElementsByTagName("input");

function getDataToRender(){
    var obj = quizData[currInd];
    eleQues.innerHTML = obj.question;
    eleOptA.innerHTML = obj.a;
    eleOptB.innerHTML = obj.b;
    eleOptC.innerHTML = obj.c;
    eleOptD.innerHTML = obj.d;
}

function selectedOption(){
    var res = "";
    for (var i=0 ; i<radioEles.length ; i++){
        if (radioEles[i].checked){
            res=radioEles[i].id
        }
    }
    return res;
}

function next(){
    var selectedOpt = selectedOption();
        console.log(selectedOpt)
    if (selectedOpt == quizData[currInd].correct){
        score++;
    }
    currInd++;
    if(currInd < quizData.length){
        getDataToRender();
    }
    else{
        var div = document.getElementById("mainDiv");
        div.innerHTML = `<h2> You Answered ${score} out of ${quizData.length} correctly.</h2>
        <button onclick="location.reload()">Retake Quiz!</button>`
    }
}