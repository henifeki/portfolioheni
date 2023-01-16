var questions = [{
    question: "Quel est le nom complet de JavaScript?", choices: ["JavaScript Object Notation", "ECMAScript", "JavaScript Standard Language", "JavaScript Object Programming"],
    answer: "ECMAScript"
},
{
    question: "Comment déclarez-vous une variable en JavaScript?",
    choices: ["var", "variable", "const", "let"],
    answer: "var"
},
{
    question: "Quel est le résultat de l'opération mathématique '5 + 6' en JavaScript?",
    choices: ["11", "5", "6", "10"],
    answer: "11"
},
{
    question: "Comment appelez-vous une fonction en JavaScript?",
    choices: ["call", "run", "execute", "invoke"],
    answer: "invoke"
},
{
    question: "Quel est le résultat de l'opération booléenne '5 > 6' en JavaScript?",
    choices: ["true", "false"],
    answer: "false"
},
{
    question: "Quel est le nom de la boucle utilisée pour parcourir les tableaux en JavaScript?",
    choices: ["for", "foreach", "while", "do-while"],
    answer: "for"
},
{
    question: "Comment accédez-vous à un élément d'un tableau en JavaScript?",
    choices: ["getItem()", "itemAt()", "index()", "[]"],
    answer: "[]"
},
{
    question: "Comment vérifiez-vous si une variable est de type 'string' en JavaScript?",
    choices: ["typeof variable === 'string'", "variable.isString()", "variable instanceof String", "variable.type === 'string'"],
    answer: "typeof variable === 'string'"
},
{
    question: "Comment ajoutez-vous un élément à la fin d'un tableau en JavaScript?",
    choices: ["push()", "add()", "append()", "insert()"],
    answer: "push()"
},
{
    question: "Comment vérifiez-vous si un objet est vide en JavaScript?",
    choices: ["Object.isEmpty(obj)", "obj.isEmpty()", "obj === { }", "Object.keys(obj).length === 0"],
    answer: "Object.keys(obj).length === 0"
}
];
var score = 0;
var currentQuestion = 0;
var quizContainer = document.getElementById("quiz");
var submitButton = document.getElementById("submit-button");

function displayQuestion() {
    quizContainer.innerHTML = "";
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices;
    quizContainer.innerHTML += "<h2>" + question + "</h2>";
    for (var i = 0; i < choices.length; i++) {
        quizContainer.innerHTML += "<input type='radio' name='choice' value='" + choices[i] + "'>" + choices[i] + "<br>";
    }
    submitButton.disabled = false;
}

displayQuestion();

submitButton.addEventListener("click", function () {
    var userAnswer = document.querySelector("input[name='choice']:checked").value;
    if (userAnswer === questions[currentQuestion].answer) {
        score++;
        alert("Bonne réponse!");
    } else {
        alert("Mauvaise réponse. La bonne réponse était: " + questions[currentQuestion].answer);
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
        alert("Votre score est de " + score + "/" + questions.length);
    } else {
        displayQuestion();
    }
});
