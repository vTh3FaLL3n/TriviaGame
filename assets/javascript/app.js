window.onload = (function () {

    var questions = [{
            question: "How many Universes currently exist?",
            answer: ["1", "16", "12", "8"],
            correct: "12"
        },
        {
            question: "Which of these shows is not a canon to the dragon ball series?",
            answer: ["Dragon Ball", "Dragon ball GT", "Dragon Ball Super", "Dragon Ball Z"],
            correct: "Dragon Ball GT"
        },
        {
            question: "What is the name of Goku's father?",
            answer: ["Bardock", "Raditz", "Broly", "Vegeta"],
            correct: "Bardock"
        },
        {
            question: "Which of these is Goku's signature technique?",
            answer: ["Solar Flare", "Galick Gun", "Final Flash", "Kamehameha"],
            correct: "Kamehameha"
        },
        {
            question: "The abilty to move your body without thinking?",
            answer: ["Super Saiyan", "Ultra Instinct", "Kaioken", "Super Saiyan Blue"],
            correct: "Ultra Instinct"
        },
        {
            question: "Bardock had how many children?",
            answer: ["1", "2", "3", "0"],
            correct: "2"
        },
        {
            question: "Who is the Legendary Super Saiyan?",
            answer: ["Broly", "Goku", "Vegeta", "Gohan"],
            correct: "Broly"
        }
    ]
    var timer = 15;
    var timerInterval;
    var correct = 0;
    var incorrect = 0;
    var answered = 0;

    

    //begin quiz
    function beginQuiz() {
        $("#begin").on("click", function () {
            $("#begin").hide();
            timerInterval = setInterval(runTimer, 1000);
            displayQuestion();
        });
    }
    beginQuiz();

    //generates question and answers
    function displayQuestion() {

        timer = 15;
        runTimer();

        var random = Math.floor(Math.random() * questions.length);
        var solution = questions[random];

        $("#question").html(solution.question);
        for (var i = 0; i < solution.answer.length; i++) {
            var answerButton = $("<button class='answerButton' id='button' data-name='" + solution.answer[i] + "'>" + solution.answer[i] + "</button><br>");
            $("#answers").append(answerButton);
        }
        $(document).on("click", "#button", function () {
            var userAnswer = $(this).data("name");

            if (userAnswer === solution.correct) {
                $("#question").html("You're over 9000!");
                correct++;
                stopTimer();
                betweenTimer();
            } else if (
                answered === 7) {
                displayScore();
            } else {
                $("#question").html("Youre a disappointment to the Saiyan Race!<br>The correct answer is: " + solution.correct);
                incorrect++;
                stopTimer();
                betweenTimer();
            }
        });
    }

    function runTimer() {
        timer--;
        $("#timer").html(timer);
        if (timer === 0) {
            $("#timer").html("Too slow!<br>");
            $("#question").html("The correct answer is: " + solution.correct);
            incorrect++;
            stopTimer();
        }
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }
    //shows score after answering all questions
    function displayScore() {
        $("#timer").hide();
        $("#answers").hide();
        $("#question").html("You answered " + correct + " questions correctly and " + incorrect + " questions incorrectly.");

    }
    var questionTimer = 5;

    function betweenTimer() {
        timerInterval = setInterval(betweenTimer, 1000);
        questionTimer--;
        if (questionTimer === 0) {
            stopTimer();
            timerInterval = setInterval(runTimer, 1000);
            $("#question, #answers").empty();
            displayQuestion();
        }
    }
});